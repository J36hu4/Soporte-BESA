import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from '../../layout/main-layout/main-layout';
import { MyTickets } from './my-tickets/my-tickets';
import { RedirectGuard } from '../../guard/contol-root.guard';

const routes: Routes = [
  {path: '', component: MainLayout, children: [
    {path: 'mytickets', component: MyTickets, canActivate: [RedirectGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
