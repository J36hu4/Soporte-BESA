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

    etiquetasLista = async (req: Request, res: Response, next: NextFunction) => {
        try {

            const lista = await this.prisma.etiqueta.findMany({
                select: {
                    id: true,
                    nombre: true,
                }
            })

            return res.status(200).json(lista);
        } catch (error: any) {
            console.error('Error al obtener técnicos:', error.message);
            next(AppError.internalServer('Error interno del servidor'));
        }
    }

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const c = req.body;

            const Especialidades = c.especialidades?.map((id: any) => ({ id: id.id })) ?? [];
            const Etiquetas = c.etiquetas?.map((e: any) => ({
                nombre: e.nombre
            })) ?? [];

            const newCategoria = await this.prisma.categoria.create({
                data: {
                    nombre: c.nombre,
                    descripcion: c.descripcion,
                    tiempoMaximoRespuesta: c.tiempoMaximoRespuesta,
                    tiempoMaximoSolucion: c.tiempoMaximoSolucion,
                    prioridad: c.prioridad,
                    especialidades: {
                        connect: Especialidades
                    },
                    etiquetas: {
                        create: Etiquetas
                    }
                }
            });

            const objeto = await this.prisma.categoria.findFirst({
                where: { id: newCategoria.id },
                select: {
                    id: true,
                    etiquetas: {
                        select: {
                            id: true,
                            nombre: true,
                        }
                    },

                }
            });

            if (c.reglas?.length > 0) {
                for (const regla of c.reglas) {
                    const EspecialidadesR = regla.especialidades?.map((id: any) => ({ id: id.id })) ?? [];
                    let EtiquetasR = regla.etiquetas?.map((et: any) => {
                        const etiqueta = objeto?.etiquetas.find((e: any) => e.nombre === et.nombre);
                        return etiqueta ? { id: etiqueta.id } : null;
                    }).filter((e: any) => e !== null) ?? [];

                    await this.prisma.regla_Autotriage.create({
                        data: {
                            nombre: regla.nombre,
                            idCategoria: newCategoria.id,
                            prioridad: regla.prioridad,
                            carga: regla.prioridad,
                            especialidades: { connect: EspecialidadesR },
                            etiquetas: { connect: EtiquetasR }
                        }
                    });
                }
            }

            res.status(201).json(newCategoria);
        } catch (error) {
            console.error("Error creando categoria:", error);
            next(error);
        }
    };


    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id);
            const c = req.body;

            const Especialidades = c.especialidades?.map((id: any) => ({ id: id.id })) ?? [];
            const EtiquetasNuevas = c.etiquetas?.map((e: any) => ({
                nombre: e.nombre
            })) ?? [];
            const ReglasExistentes = c.reglas?.filter((e: any) => e.id !== 0) ?? [];
            const ReglasNuevas = c.reglas?.filter((e: any) => e.id === 0) ?? [];

            const categoriaOld = await this.prisma.categoria.findFirst({
                where: { id },
                select: {
                    especialidades: { select: { id: true } },
                    etiquetas: { select: { id: true } },
                    reglas: { select: { id: true } },
                }
            });

            const EspecialidadesOld = categoriaOld?.especialidades.map((es: any) => ({ id: es.id })) ?? [];
            // const EtiquetasOld = categoriaOld?.etiquetas.map((es: any) => es.id) ?? [];

            // await this.prisma.etiqueta.deleteMany({
            //     where: { id: { in: EtiquetasOld } }
            // });



            const newCategoria = await this.prisma.categoria.update({
                where: { id },
                data: {
                    nombre: c.nombre,
                    descripcion: c.descripcion,
                    tiempoMaximoRespuesta: c.tiempoMaximoRespuesta,
                    tiempoMaximoSolucion: c.tiempoMaximoSolucion,
                    prioridad: c.prioridad,
                    especialidades: {
                        set: Especialidades
                    },
                }
            });

            const objeto = await this.prisma.categoria.findFirst({
                where: { id: newCategoria.id },
                select: {
                    id: true,
                    etiquetas: {
                        select: {
                            id: true,
                            nombre: true
                        }
                    }
                }
            });

            if (ReglasNuevas.length > 0) {
                for (const regla of ReglasNuevas) {
                    const EspecialidadesR = regla.especialidades?.map((id: any) => ({ id: id.id })) ?? [];
                    let EtiquetasR = regla.etiquetas?.map((et: any) => {
                        const etiqueta = objeto?.etiquetas.find((e: any) => e.nombre === et.nombre);
                        return etiqueta ? { id: etiqueta.id } : null;
                    }).filter((e: any) => e !== null) ?? [];

                    await this.prisma.regla_Autotriage.create({
                        data: {
                            nombre: regla.nombre,
                            idCategoria: newCategoria.id,
                            prioridad: regla.prioridad,
                            carga: regla.carga,
                            especialidades: { connect: EspecialidadesR },
                            etiquetas: { connect: EtiquetasR }
                        }
                    });
                }
            }

            if (ReglasExistentes.length > 0) {
                for (const regla of ReglasExistentes) {
                    const EspecialidadesR = regla.especialidades?.map((id: any) => ({ id: id.id })) ?? [];
                    let EtiquetasR = regla.etiquetas?.map((et: any) => {
                        const etiqueta = objeto?.etiquetas.find((e: any) => e.nombre === et.nombre);
                        return etiqueta ? { id: etiqueta.id } : null;
                    }).filter((e: any) => e !== null) ?? [];

                    await this.prisma.regla_Autotriage.update({
                        where: { id: regla.id },
                        data: {
                            nombre: regla.nombre,
                            prioridad: regla.prioridad,
                            carga: regla.carga,
                            especialidades: {
                                set: [],
                                connect: EspecialidadesR
                            },
                            etiquetas: {
                                set: [],
                                connect: EtiquetasR
                            },
                            activa: regla.activa
                        }
                    });
                }
            }

            res.status(201).json(newCategoria);
        } catch (error) {
            console.error("Error actualizando categoria:", error);
            next(error);
        }
    };


}
