import { Component, signal } from '@angular/core';
import { Ticket } from '../../../share/models/ticketModel';
import { TicketService } from '../../../share/services/api/ticket.service';
import { UserService } from '../../../share/services/api/user.service';
import { NotificationService } from '../../../share/services/app/notification.service';
import { Router } from '@angular/router';
import { UserModel } from '../../../share/models/UsuarioModel';
import { TecnicoService } from '../../../share/services/api/tecnico.service';

@Component({
  selector: 'app-asignaciones',
  standalone: false,
  templateUrl: './asignaciones.html',
  styleUrl: './asignaciones.css'
})
export class Asignaciones {
  constructor(
    private tecnicoSvc: TecnicoService,
    private userService: UserService,
    private noti: NotificationService,
    protected router: Router
  ) { }

  readonly hoy = new Date();

  datos = signal<Ticket[]>([]);
  total = signal<number>(0);
  user = signal<UserModel | null>(null);

  selectDate = signal<Date>(new Date());
  fechaInicio = signal<Date>(new Date()); // hoy
  fechasVisibles: Date[] = [];

  ngOnInit() {
    this.user.set(this.userService.getUser());
    this.generarFechas();
  }

  lista(): void {
    const queryParts = [];

    if (this.user()?.id) queryParts.push(`idUser=${this.user()?.id}`);
    queryParts.push(`fechaInicio=${this.fechasVisibles[0].toDateString()}`);
    queryParts.push(`fechaFin=${this.fechasVisibles[6].toDateString()}`);

    const query = queryParts.join('&');

    this.tecnicoSvc.getAsignaciones(query).subscribe((res: { lista: Ticket[], count: number }) => {
      this.datos.set(res.lista);
      this.total.set(res.count);
    });
  }

  generarFechas() {
    const inicio = new Date(this.fechaInicio());
    const diaSemana = inicio.getDay();
    const offset = diaSemana === 0 ? -6 : 1 - diaSemana;

    const lunes = new Date(inicio);
    lunes.setDate(inicio.getDate() + offset);

    this.fechasVisibles = Array.from({ length: 7 }, (_, i) => {
      const fecha = new Date(lunes);
      fecha.setDate(lunes.getDate() + i);
      return fecha;
    });

    this.lista();
  }


  retrocederDias() {
    const fechaActual = this.fechaInicio();
    const nuevaFecha = new Date(fechaActual); // 👈 clonar
    nuevaFecha.setDate(nuevaFecha.getDate() - 7);
    this.fechaInicio.set(nuevaFecha);
    this.selectDate.set(new Date);
    this.generarFechas();
  }

  avanzarDias() {
    const fechaActual = this.fechaInicio();
    const nuevaFecha = new Date(fechaActual); // 👈 clonar
    nuevaFecha.setDate(nuevaFecha.getDate() + 7);
    this.fechaInicio.set(nuevaFecha);
    this.selectDate.set(new Date);
    this.generarFechas();
  }


  seleccionarFecha(event: Event) {
    const input = event.target as HTMLInputElement;
    const nuevaFecha = new Date(input.value); // 👈 clonar
    nuevaFecha.setDate(nuevaFecha.getDate() + 1);
    this.fechaInicio.set(nuevaFecha);
    this.selectDate.set(nuevaFecha);
    this.generarFechas();
  }

  seleccionarHoy() {
    this.fechaInicio.set(new Date)
    this.generarFechas();
  }

  ticketsPorFecha(fecha: Date): Ticket[] {
    return this.datos().filter(t =>
      new Date(t.fechaCreacion).toDateString() === fecha.toDateString()
    );
  }

  tiempoRestante(fecha: Date): string {
    const fechaLimite = new Date(fecha);
    const ahora = new Date();
    const diferenciaMs = fechaLimite.getTime() - ahora.getTime();

    if (diferenciaMs <= 0) return '0h 0m restantes';

    const horas = Math.floor(diferenciaMs / (1000 * 60 * 60));
    const minutos = Math.floor((diferenciaMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${horas}h ${minutos}m restantes`;
  }

  botonDisable(): boolean {
    return this.fechasVisibles.some(
      fecha => fecha.toDateString() === this.hoy.toDateString()
    );
  }

  irDetalles(id: number): void {
    this.router.navigate(['asignaciones/detalle'], {
      fragment: btoa(id.toString()) // opcionalmente encriptado como base64
    })
  }

}
