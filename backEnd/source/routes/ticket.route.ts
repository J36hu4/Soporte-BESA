import { Router } from "express";
import { TicketController } from "../controllers/ticketController.controller";

export class TicketRoute {
    static get routes(): Router {
        const router = Router();
        const controller = new TicketController();
        router.get('/search', controller.get);
        router.get('/count/search', controller.count);
        router.get('/:id', controller.getById);
        return router;
      }
}