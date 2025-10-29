import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/custom.error';
import { Prioridad, Prisma, PrismaClient } from '../../generated/prisma';

export class CategoriaController {
    prisma = new PrismaClient();

    get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const skip = parseInt(req.query.skip as string) || 0;
            const take = parseInt(req.query.take as string) || 10;
            const search = (req.query.search as string)?.trim() || '';
            const searchId = isNaN(parseInt(search)) ? 0 : parseInt(search);
            const prio = req.query.prio as string || 'all';
            const orderBy = req.query.orderBy as string || 'nombre';
            const orderDir: Prisma.SortOrder = req.query.orderDir === 'desc' ? 'desc' : 'asc';



            const prioridadFiltro = (() => {
                switch (prio) {
                    case 'baja': return Prioridad.baja;
                    case 'media': return Prioridad.media;
                    case 'alta': return Prioridad.alta;
                    default: return null;
                }
            })();

            const searchFiltro: Prisma.CategoriaWhereInput = search
                ? {
                    OR: [
                        !isNaN(searchId) ? { id: searchId } : undefined,
                        {
                            nombre: {
                                contains: search
                            }
                        }
                    ].filter(Boolean) as any
                }
                : {};

            // 🧠 Composición final del whereClause
            const whereClause: Prisma.CategoriaWhereInput = {
                ...searchFiltro,
                ...(prioridadFiltro ? { prioridad: prioridadFiltro } : {}),
            };

            // 🧭 Ordenamiento dinámico
            const orderClause = orderBy === 'prioridad'
                ? { prioridad: orderDir }
                : orderBy === 'id'
                    ? { id: orderDir }
                    : { nombre: orderDir };

            const [lista, total] = await Promise.all([
                this.prisma.categoria.findMany({
                    where: whereClause,
                    skip,
                    take,
                    orderBy: orderClause,
                    select: {
                        id: true,
                        nombre: true,
                        prioridad: true,
                        tiempoMaximoRespuesta: true,
                        tiempoMaximoSolucion: true,
                    }
                }),
                this.prisma.categoria.count()
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


            const objeto = await this.prisma.categoria.findFirst({
                where: { id: myId },
                select: {
                    id: true,
                    nombre: true,
                    descripcion: true,
                    prioridad: true,
                    tiempoMaximoRespuesta: true,
                    tiempoMaximoSolucion: true,
                    especialidades: {
                        select: {
                            id: true,
                            nombre: true,
                            descripcion: true
                        }
                    },
                    etiquetas: {
                        select: {
                            id: true,
                            nombre: true,
                        }
                    },
                    reglas: {
                        select: {
                            id: true,
                            activa: true,
                            carga: true,
                            nombre: true,
                            prioridad: true,
                            etiquetas: {
                                select: {
                                    id: true,
                                    nombre: true,
                                }
                            },
                            especialidades: {
                                select: {
                                    id: true,
                                    nombre: true,
                                    descripcion: true
                                }
                            }
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

}
