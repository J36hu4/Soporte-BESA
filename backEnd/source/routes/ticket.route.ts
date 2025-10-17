import { Router } from "express";
import { TicketController } from "../controllers/ticketController.controller";

export class TicketRoute {
    static get routes(): Router {
        const router = Router();
        const controller = new TicketController();
        router.get('/', controller.get);
        router.get('/:id', controller.getById);
        return router;
      }
}