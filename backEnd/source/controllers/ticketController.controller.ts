import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/custom.error';
import { Prioridad, PrismaClient } from '../../generated/prisma';
import { EstadoTicket, MetodoAsignacion } from "../../generated/prisma";

export class TicketController {
    prisma = new PrismaClient();

    get = async (request: Request, response: Response, next: NextFunction) => {

        try {
            const skip = parseInt(request.query.skip as string) || 0;
            const take = parseInt(request.query.take as string) || 10;
            const idUser = parseInt(request.query.idUser as string) || 0;
            const estado = request.query.estado as string || 'all';
            const notEstado = (request.query.notEstado as string || '0') === '1';
            const search = request.query.search as string || '';
            const searchId = isNaN(parseInt(search)) ? 0 : parseInt(search);
            const prioridad = request.query.prioridad as string || '';
            const orderBy = request.query.orderBy as string || 'fechaCreacion';
            const orderDir = (request.query.orderDir as string === 'asc') ? 'asc' : 'desc';


            const estadoTipo = (() => {
                switch (estado) {
                    case 'pendiente': return EstadoTicket.pendiente;
                    case 'asignado': return EstadoTicket.asignado;
                    case 'en_proceso': return EstadoTicket.en_proceso;
                    case 'resuelto': return EstadoTicket.resuelto;
                    case 'cerrado': return EstadoTicket.cerrado;
                    default: return null;
                }
            })();

            const miPrioridad = (() => {
                switch (prioridad) {
                    case 'alta': return Prioridad.alta
                    case 'media': return Prioridad.media
                    case 'baja': return Prioridad.baja
                    default: return undefined
                }
            })();

            const whereClause = {
                ...(estadoTipo ? notEstado ? {} : { estado: estadoTipo } : {}),
                ...(idUser !== 0 ? { idUsuario: idUser } : {}),
                ...(prioridad ? { etiqueta: { categoria: { prioridad: miPrioridad } } } : {}),
                ...(search ? {
                    OR: [
                        { id: searchId },
                        { titulo: { contains: search } }
                    ]
                } : {})
            };


            const whereClauseCount = {
                ...(estadoTipo ? notEstado ? { NOT: { estado: estadoTipo } } : { estado: estadoTipo } : {}),
                ...(idUser !== 0 ? { idUsuario: idUser } : {}),
                ...(prioridad ? { etiqueta: { categoria: { prioridad: miPrioridad } } } : {}),
                ...(search ? {
                    OR: [
                        { id: searchId },
                        { titulo: { contains: search } }
                    ]
                } : {})
            };

            const [lista, total] = await Promise.all([
                this.prisma.ticket.findMany({
                    where: whereClause,
                    skip,
                    take,
                    orderBy: { [orderBy]: orderDir },
                    select: {
                        id: true,
                        titulo: true,
                        fechaCreacion: true,
                        estado: true,
                        usuario: { select: { nombre: true, correo: true } },
                        asignaciones: {
                            where: { activo: true },
                            select: {
                                activo: true,
                                tecnico: {
                                    select: {
                                        usuario: {
                                            select: {
                                                nombre: true, correo: true
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        etiqueta: {
                            select: {
                                nombre: true,
                                categoria: { select: { nombre: true, prioridad: true } }
                            }
                        }
                    }
                }),

                this.prisma.ticket.count({
                    where: whereClauseCount
                })
            ]);

            response.status(200).json({ lista: lista, count: total });
        } catch (error) {
            next(error);
        }
    };

    count = async (request: Request, response: Response, next: NextFunction) => {

        try {
            const idUser = parseInt(request.query.idUser as string) || 0;
            const estado = request.query.estado as string || 'all';

            const whereClause = idUser !== 0 ? { idUsuario: idUser } : {};


            const estadoExcluido = (() => {
                switch (estado) {
                    case 'pendiente': return EstadoTicket.pendiente;
                    case 'asignado': return EstadoTicket.asignado;
                    case 'en_proceso': return EstadoTicket.en_proceso;
                    case 'resuelto': return EstadoTicket.resuelto;
                    case 'cerrado': return EstadoTicket.cerrado;
                    default: return null;
                }
            })();
            const whereClauseCount = {
                ...(estadoExcluido ? { estado: estadoExcluido } : {}),
                ...(idUser !== 0 ? { idUsuario: idUser } : {})
            };

            const total = await this.prisma.ticket.count({
                where: whereClauseCount
            })

            response.status(200).json(total);
        } catch (error) {
            next(error);
        }
    };

    //Obtener por Id
    getById = async (
        request: Request,
        response: Response,
        next: NextFunction
    ) => {
        try {
            let myId = parseInt(request.params.id);

            if (isNaN(myId)) {
                next(AppError.badRequest('El ID no es valido'));
            }

            const objeto = await this.prisma.ticket.findFirst({
                where: { id: myId },
                select: {
                    id: true,
                    titulo: true,
                    descripcion: true,
                    fechaCreacion: true,
                    fechaCierre: true,
                    slaRespusta: true,
                    slaSolucion: true,
                    estado: true,
                    Valoracion: {
                        take: 1,
                        select: {
                            puntaje: true,
                            comentario: true,
                            fecha: true
                        }
                    },
                    asignaciones: {
                        select: {
                            id: true,
                            fecha: true,
                            puntajePrioridad: true,
                            motivo: true,
                            metodo: true,
                            activo: true,
                            regla: {
                                select: {
                                    id: true,
                                    nombre: true,
                                    carga: true,
                                    prioridad: true,
                                    activa: true,

                                }
                            },
                            tecnico: {
                                select: {
                                    id: true,
                                    disponible: true,
                                    especialidades: true,
                                    motivoDisponible: true,
                                    usuario: {
                                        select: {
                                            id: true,
                                            nombre: true,
                                            imagen: true,
                                            correo: true,
                                        }
                                    }
                                }
                            }
                        }
                    },
                    etiqueta: {
                        select: {
                            id: true,
                            nombre: true,
                            categoria: {
                                select: {
                                    id: true,
                                    nombre: true,
                                    descripcion: true,
                                    prioridad: true,
                                }
                            }
                        }
                    },
                    historial: {
                        select: {
                            id: true,
                            estadoAnterior: true,
                            estadoNuevo: true,
                            fecha: true,
                            observacion: true,
                            imagenes: { select: { url: true } },
                            usuario: { select: { nombre: true } }
                        }
                    },
                    usuario: {
                        select: {
                            id: true,
                            nombre: true,
                            imagen: true,
                            correo: true,
                        }
                    }
                }
            });
            if (objeto) {
                response.status(200).json(objeto);
            } else {
                next(AppError.notFound("No existe el ticket seleccionado"))
            }
        } catch (error: any) {
            next(error);
        }
    };
    //Crear
    create = async (request: Request, response: Response, next: NextFunction) => {
        try {
        } catch (error) {
            next(error);
        }
    };
    //Actualizar
    update = async (request: Request, response: Response, next: NextFunction) => {
        try {
        } catch (error) {
            next(error);
        }
    };

    getByCorreo = async (
        request: Request,
        response: Response,
        next: NextFunction
    ) => {
        try {
            let myCorreo = (request.params.correo);
            if ((myCorreo)) {
                next(AppError.badRequest('Debe indicar el correo'));
            }

            const objeto = await this.prisma.usuario.findUnique({
                where: { correo: myCorreo }
            });
            if (objeto) {
                response.status(200).json(objeto);
            } else {
                next(AppError.notFound("No existe el videojuego seleccionado"))
            }
        } catch (error: any) {
            next(error);
        }
    }
}
