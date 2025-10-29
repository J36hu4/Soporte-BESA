import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inicio } from './components/home/inicio/inicio';
import { PageNotFound } from './share/page-not-found/page-not-found';
import { MainLayout } from './layout/main-layout/main-layout';
import { CleanLayout } from './layout/clean-layout/clean-layout';
import { LoginModule } from './components/auth/login/login';
import { RedirectGuard, RoleGuard } from './guard/contol-root.guard';
import { MyTickets } from './components/ticket/my-tickets/my-tickets';
import { TicketDetalle } from './components/ticket/detalle/detalle';
import { AdminTicket } from './components/ticket/admin-ticket/admin-ticket';
import { Tecnicos } from './components/tecnico/tecnicos/tecnicos';
import { TecnicoDetalle } from './components/tecnico/detalle/detalle';
import { Categorias } from './components/categoria/categorias/categorias';
import { CategoriaDetalle } from './components/categoria/detalle/detalle';
import { Asignaciones } from './components/tecnico/asignaciones/asignaciones';
import { MiAsignacion } from './components/tecnico/mi-asignacion/mi-asignacion';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '', component: MainLayout, children: [
      { path: 'inicio', component: Inicio, canActivate: [RedirectGuard] },
      { path: 'mytickets', component: MyTickets, canActivate: [RedirectGuard] },
      { path: 'mytickets/detalle', component: TicketDetalle, canActivate: [RedirectGuard] },

      // ─────────────────────────────────────────────────────────────
      //  Modulos de Admin
      // ─────────────────────────────────────────────────────────────
      { path: 'tickets', component: AdminTicket, canActivate: [RoleGuard], data: { roles: ['ADMIN'] } },
      { path: 'tickets/detalle', component: TicketDetalle, canActivate: [RoleGuard], data: { roles: ['ADMIN'] } },
      { path: 'tecnicos', component: Tecnicos, canActivate: [RoleGuard], data: { roles: ['ADMIN'] } },
      { path: 'tecnicos/detalle', component: TecnicoDetalle, canActivate: [RoleGuard], data: { roles: ['ADMIN'] } },
      { path: 'categorias', component: Categorias, canActivate: [RoleGuard], data: { roles: ['ADMIN'] } },
      { path: 'categorias/detalle', component: CategoriaDetalle, canActivate: [RoleGuard], data: { roles: ['ADMIN'] } },

      // ─────────────────────────────────────────────────────────────
      //  Modulos de tecnico
      // ─────────────────────────────────────────────────────────────
      { path: 'asignaciones', component: Asignaciones, canActivate: [RoleGuard], data: { roles: ['TEC'] } },
      { path: 'asignaciones/detalle', component: MiAsignacion, canActivate: [RoleGuard], data: { roles: ['TEC'] } },
    ]
  },
  {
    path: '', component: CleanLayout, children: [
      { path: 'login', component: LoginModule },
    ]
  },
  { path: '**', component: PageNotFound }
];

// const routes: Routes = [
//   // 🔁 Redirección condicional según autenticación
//   {
//     path: '',
//     canActivate: [RedirectGuard],
//     pathMatch: 'full'
//   },

//   // 🔐 Rutas protegidas con layout principal
//   {
//     path: '',
//     component: MainLayoutComponent,
//     children: [
//       {
//         path: 'inicio',
//         component: InicioComponent,
//         canActivate: [RoleGuard],
//         data: { roles: ['user', 'admin'] }
//       }
//     ]
//   },

//   // 🔓 Rutas públicas con layout de autenticación
//   {
//     path: '',
//     component: AuthLayoutComponent,
//     children: [
//       { path: 'login', component: LoginComponent },
//       { path: 'register', component: RegisterComponent },
//       { path: 'recuperar', component: PasswordRecoveryComponent }
//     ]
//   },

//   // 🧭 Página no encontrada
//   { path: '**', component: PageNotFoundComponent }
// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
