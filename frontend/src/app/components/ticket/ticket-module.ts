import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing-module';
import { MyTickets } from './my-tickets/my-tickets';
import { MatIconModule } from '@angular/material/icon';
import { CapitalizarPipe } from '../../app';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from "@angular/forms";
import { ShareModule } from "../../share/share-module";
import { TicketDetalle } from './detalle/detalle';
import { A11yModule } from "@angular/cdk/a11y";
import { AdminTicket } from './admin-ticket/admin-ticket';


@NgModule({
  declarations: [
    MyTickets,
    TicketDetalle,
    AdminTicket
  ],
  imports: [
    CommonModule,
    CapitalizarPipe,
    MatIconModule,
    MatPaginatorModule,
    TicketRoutingModule,
    FormsModule,
    ShareModule,
    A11yModule
],
  exports: [
    MyTickets,
    TicketDetalle,
    AdminTicket
  ]
})
export class TicketModule { }
