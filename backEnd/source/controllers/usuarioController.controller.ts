import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AppError } from '../errors/custom.error';
import { PrismaClient } from '../../generated/prisma';

export class UsuarioController {
    prisma = new PrismaClient();

    auth = async (
        request: Request,
        response: Response,
        next: NextFunction
    ) => {
        try {
            const { myCorreo, myContrasenna } = request.body;

            if (!myCorreo || !myContrasenna) {
                return next(AppError.badRequest('Debe indicar correo y contraseña'));
            }

            const usuario = await this.prisma.usuario.findUnique({
                where: { correo: myCorreo }
            });

            if (!usuario) {
                return next(AppError.unauthorized('Credenciales inválidas'));
            }

            const contrasennaValida = await bcrypt.compare(myContrasenna, usuario.contrasenna);

            if (!contrasennaValida) {
                return next(AppError.unauthorized('Credenciales inválidas'));
            }

            const token = jwt.sign(
                {
                    id: usuario.id,
                    idioma: usuario.idioma,
                    correo: usuario.correo,
                    nombre: usuario.nombre,
                    rol: usuario.role,
                    imagen: usuario.imagen ? usuario.imagen : ''
                },
                process.env.JWT_SECRET as string, // ← Clave secreta obligatoria
                { expiresIn: '8h' }
            );

            return response.status(200).json({ token });
        } catch (error: any) {
            console.error('Error en autenticación:', error.message);
            next(AppError.internalServer('Error interno del servidor'));
        }
    };
}
