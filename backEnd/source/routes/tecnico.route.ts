import { Router } from 'express';
import { TecnicoController } from '../controllers/tecnicoController.controller';
export class TecnicoRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new TecnicoController();

    //GET localhost:3000/tecnico/
    router.get('/search', controller.get);
    router.get('/especialidades', controller.getEspecialidadades);
    router.get('/asignaciones/count/:id', controller.countAsignaciones);
    router.get('/:id', controller.getById);

    //POST localhost:3000/tecnico/
    router.post('/', controller.create);

    //Pat localhost:3000/tecnico/
    router.put('/:id', controller.update);

    return router;
  }
}