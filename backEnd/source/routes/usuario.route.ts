import { Router } from 'express';
import { UsuarioController } from '../controllers/usuarioController.controller';
export class UsuarioRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new UsuarioController();
    //GET localhost:3000/usuario/
    router.get('/', controller.get);
    router.get('/:id', controller.getById);
    return router;
  }
}