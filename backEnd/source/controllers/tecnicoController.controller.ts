import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AppError } from '../errors/custom.error';
import { Prisma, PrismaClient } from '../../generated/prisma';

export class TecnicoController {
    prisma = new PrismaClient();

    getTecnicos = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const skip = parseInt(req.query.skip as string) || 0;
            const take = parseInt(req.query.take as string) || 10;
            const search = (req.query.search as string)?.trim() || '';
            const searchId = parseInt(search);

            const whereClause: Prisma.TecnicoWhereInput = search
                ? {
                    OR: [
                        !isNaN(searchId) ? { id: searchId } : undefined,
                        {
                            usuario: {
                                nombre: {
                                    contains: search,
                                    mode: 'insensitive'
                                }
                            }
                        }
                    ].filter(Boolean) as any
                }
                : {};

            const [lista, total] = await Promise.all([
                this.prisma.tecnico.findMany({
                    where: whereClause,
                    skip,
                    take,
                    orderBy: { usuario: { nombre: 'asc' } },
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

            console.log(lista)
            console.log(total)


            return res.status(200).json({ lista, count: total });
        } catch (error: any) {
            console.error('Error al obtener técnicos:', error.message);
            next(AppError.internalServer('Error interno del servidor'));
        }
    };

}
