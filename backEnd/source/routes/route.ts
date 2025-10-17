import { Router } from 'express';
import { UsuarioRoutes } from './usuario.route';
import { TicketRoute } from './ticket.route';
export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        // ----Agregar las rutas----
        router.use('/usuario', UsuarioRoutes.routes);
        router.use('/ticket', TicketRoute.routes);

        return router;
    }
}
