import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AppError } from '../errors/custom.error';
import { EstadoTicket, MotivoDisponible, Prioridad, Prisma, PrismaClient } from '../../generated/prisma';

export class TecnicoController {
    prisma = new PrismaClient();

    get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const skip = parseInt(req.query.skip as string) || 0;
            const take = parseInt(req.query.take as string) || 10;
            const search = (req.query.search as string)?.trim() || '';
            const searchId = isNaN(parseInt(search)) ? 0 : parseInt(search);
            const estado = req.query.estado as string || 'all';
            const carga = req.query.carga as string || 'all'; 
            const orderBy = req.query.orderBy as string || 'nombre';
            const orderDir: Prisma.SortOrder = req.query.orderDir === 'desc' ? 'desc' : 'asc';


            const estadoTipo = (() => {
                switch (estado) {
                    case 'disponible': return MotivoDisponible.disponible;
                    case 'almuerzo': return MotivoDisponible.almuerzo;
                    case 'descanso': return MotivoDisponible.descanso;
                    case 'ausente': return MotivoDisponible.ausente;
                    default: return null;
                }
            })();

            const cargaFiltro = (() => {
                switch (carga) {
                    case 'baja': return { lte: 3 };
                    case 'media': return { gt: 3, lte: 6 };
                    case 'alta': return { gt: 6 };
                    default: return null;
                }
            })();

            const searchFiltro: Prisma.TecnicoWhereInput = search
                ? {
                    OR: [
                        !isNaN(searchId) ? { id: searchId } : undefined,
                        {
                            usuario: {
                                nombre: {
                                    contains: search
                                }
                            }
                        }
                    ].filter(Boolean) as any
                }
                : {};

            // 🧠 Composición final del whereClause
            const whereClause: Prisma.TecnicoWhereInput = {
                ...searchFiltro,
                ...(estadoTipo ? { motivoDisponible: estadoTipo } : {}),
                ...(cargaFiltro ? { carga: cargaFiltro } : {})
            };

            // 🧭 Ordenamiento dinámico
            const orderClause = orderBy === 'carga'
                ? { carga: orderDir }
                : orderBy === 'id'
                    ? { id: orderDir }
                    : { usuario: { nombre: orderDir } };

            const [lista, total] = await Promise.all([
                this.prisma.tecnico.findMany({
                    where: whereClause,
                    skip,
                    take,
                    orderBy: orderClause,
                    select: {
                        id: true,
                        motivoDisponible: true,
                        carga: true,
                        usuario: {
                            select: {
                                nombre: true,
                                correo: true
                            }
                        }
                    }
                }),
                this.prisma.tecnico.count({ where: whereClause })
            ]);

            return res.status(200).json({ lista, count: total });
        } catch (error: any) {
            console.error('Error al obtener técnicos:', error.message);
            next(AppError.internalServer('Error interno del servidor'));
        }
    };


    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let myId = parseInt(req.params.id);


            const objeto = await this.prisma.tecnico.findFirst({
                where: { id: myId },
                select: {
                    id: true,
                    motivoDisponible: true,
                    carga: true,
                    Asignacion: {
                        orderBy: { fecha: 'desc' },
                        take: 4,
                        select: {
                            activo: true,
                            fecha: true,
                            metodo: true,
                            puntajePrioridad: true,
                            regla: true,
                            motivo: true,
                            ticket: {
                                select: {
                                    id: true,
                                    titulo: true,
                                    estado: true,
                                    etiqueta: {
                                        select: {
                                            nombre: true,
                                            categoria: {
                                                select: {
                                                    nombre: true,
                                                    prioridad: true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    especialidades: {
                        select: {
                            nombre: true,
                            descripcion: true
                        }
                    },
                    usuario: {
                        select: {
                            nombre: true,
                            correo: true,
                            imagen: true
                        }
                    }
                }
            });

            return res.status(200).json(objeto);
        } catch (error: any) {
            console.error('Error al obtener técnicos:', error.message);
            next(AppError.internalServer('Error interno del servidor'));
        }
    };

    countAsignaciones = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let myId = parseInt(req.params.id);


            const [total, bajos, medios, altos, asignados, proceso, resueltos, cerrados] = await Promise.all([

                this.prisma.asignacion.count({
                    where: { activo: true, tecnico: { id: myId } },
                }),
                this.prisma.asignacion.count({
                    where: { activo: true, tecnico: { id: myId }, ticket: { etiqueta: { categoria: { prioridad: Prioridad.baja } } } },
                }),
                this.prisma.asignacion.count({
                    where: { activo: true, tecnico: { id: myId }, ticket: { etiqueta: { categoria: { prioridad: Prioridad.media } } } },
                }),
                this.prisma.asignacion.count({
                    where: { activo: true, tecnico: { id: myId }, ticket: { etiqueta: { categoria: { prioridad: Prioridad.alta } } } },
                }),
                this.prisma.asignacion.count({
                    where: { activo: true, tecnico: { id: myId }, ticket: { estado: EstadoTicket.asignado } },
                }),
                this.prisma.asignacion.count({
                    where: { activo: true, tecnico: { id: myId }, ticket: { estado: EstadoTicket.en_proceso } },
                }),
                this.prisma.asignacion.count({
                    where: { activo: true, tecnico: { id: myId }, ticket: { estado: EstadoTicket.resuelto } },
                }),
                this.prisma.asignacion.count({
                    where: { activo: true, tecnico: { id: myId }, ticket: { estado: EstadoTicket.cerrado } },
                }),
            ])

            return res.status(200).json({ total, bajos, medios, altos, asignados, proceso, resueltos, cerrados });
        } catch (error: any) {
            console.error('Error al obtener técnicos:', error.message);
            next(AppError.internalServer('Error interno del servidor'));
        }
    };
}
