import { Router } from 'express';
import { TecnicoController } from '../controllers/tecnicoController.controller';
export class TecnicoRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new TecnicoController();
    //GET localhost:3000/usuario/
    router.get('/search', controller.getTecnicos);
    return router;
  }
}