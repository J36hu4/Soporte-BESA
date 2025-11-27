import { Router } from 'express';
import { CategoriaController } from '../controllers/categoriaController.controller';
export class CategoriaRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new CategoriaController();
    //GET localhost:3000/usuario/
    router.get('/search', controller.get);
    router.get('/etiquetas', controller.etiquetasLista);
    router.get('/:id', controller.getById);

    
    //POST localhost:3000/categoria/
    router.post('/', controller.create);

    //Pat localhost:3000/cetegoria/
    router.put('/:id', controller.update);
    return router;
  }
}