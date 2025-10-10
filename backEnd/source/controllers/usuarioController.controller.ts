import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/custom.error';
import { PrismaClient } from '../../generated/prisma';

export class UsuarioController {
    prisma = new PrismaClient();

    get = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const lista = await this.prisma.usuario.findMany({
                orderBy: {
                    nombre: 'asc',
                },
                include: {
                    tecnico: true,
                },
            });
            response.json(lista);
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

            const objeto = await this.prisma.usuario.findFirst({
                where: { id: myId }
            });
            if (objeto) {
                response.status(200).json(objeto);
            } else {
                next(AppError.notFound("No existe el videojuego seleccionado"))
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
}
