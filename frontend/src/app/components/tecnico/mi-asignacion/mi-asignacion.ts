import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../../share/services/api/ticket.service';
import { UserService } from '../../../share/services/api/user.service';
import { Asignacion, Ticket } from '../../../share/models/ticketModel';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mi-asignacion',
  standalone: false,
  templateUrl: './mi-asignacion.html',
  styleUrl: './mi-asignacion.css'
})
export class MiAsignacion {
  constructor(
    protected router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private ticketSVC: TicketService,
    private userService: UserService
  ) { }

  // ─────────────────────────────────────────────────────────────
  //  Signals y propiedades reactivas
  // ─────────────────────────────────────────────────────────────
  cargando = signal<boolean>(true);
  dato = signal<Ticket | null>(null);

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const id = parseInt(atob(fragment));
        this.getItem(id);
      }
    });
  }

  getItem(id: number): void {
    this.ticketSVC.getById(id).subscribe((res: Ticket) => {
      this.dato.set(res)
    })
  }

  get tecnicoAsignado(): Asignacion | null {
    const tecnico = this.asignacionesOrdenadas[0];
    return tecnico ?? null;
  }

  get asignacionesOrdenadas(): Asignacion[] {
    return this.dato()?.asignaciones?.sort((a, b) => {
      return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
    }) ?? [];
  }


  get fechaAsignacion(): Date | null {
    const historial = this.dato()?.historial ?? [];
    const asignado = historial.find(h => h.estadoNuevo === 'asignado');
    return asignado?.fecha ?? null;
  }

  get fechaResuelto(): Date | null {
    const historial = this.dato()?.historial ?? [];
    const asignado = historial.find(h => h.estadoNuevo === 'resuelto');
    return asignado?.fecha ?? null;
  }

  cumplioSla(type: string): string {
    const fechaResuelto = this.fechaResuelto ? new Date(this.fechaResuelto) : null;
    const rawSla = this.dato()?.slaSolucion;
    const sla = rawSla ? new Date(rawSla) : null;


    if (type === 'text') {

      if (!fechaResuelto) {
        return 'Aún se está trabajando en el ticket';
      }

      if (sla && fechaResuelto <= sla) {
        return 'El ticket se resolvió en el tiempo esperado';
      }

      if (sla && fechaResuelto > sla) {
        return 'El ticket no se resolvió en el tiempo esperado';
      }

      return 'No hay información suficiente para evaluar el SLA';
    } else {
      if (!fechaResuelto) {
        return 'bg-warning';
      }

      if (sla && fechaResuelto <= sla) {
        return 'bg-success';
      }

      if (sla && fechaResuelto > sla) {
        return 'bg-error';
      }

      return 'bg-warning';
    }
  }


  volver(): void {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/mytickets']);
    }
  }
}
