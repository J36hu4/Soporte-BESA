import { Router } from 'express';
import { UsuarioRoutes } from './usuario.route';
import { TicketRoute } from './ticket.route';
import { TecnicoRoutes } from './tecnico.route';
export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        // ----Agregar las rutas----
        router.use('/usuario', UsuarioRoutes.routes);
        router.use('/ticket', TicketRoute.routes);
        router.use('/tecnico', TecnicoRoutes.routes);

        return router;
    }
}
