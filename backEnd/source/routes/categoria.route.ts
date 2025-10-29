import { Router } from 'express';
import { CategoriaController } from '../controllers/categoriaController.controller';
export class CategoriaRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new CategoriaController();
    //GET localhost:3000/usuario/
    router.get('/search', controller.get);
    router.get('/:id', controller.getById);
    return router;
  }
}