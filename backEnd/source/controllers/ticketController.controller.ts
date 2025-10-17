import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/custom.error';
import { PrismaClient } from '../../generated/prisma';

export class TicketController {
    prisma = new PrismaClient();

    get = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const lista = await this.prisma.ticket.findMany({
                orderBy: {
                    slaSolucion: 'desc',
                },
                select: {
                    id: true,
                    usuario: {select: {nombre: true}},
                    etiqueta: {select: {nombre: true, categoria: {select: {nombre: true, prioridad: true}}}},
                    titulo: true,
                    fechaCreacion: true,
                    estado: true
                },
            });
            response.status(200).json(lista);
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
