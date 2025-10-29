import { Component, HostListener, signal } from '@angular/core';
import { Asignacion, Ticket } from '../../../share/models/ticketModel';
import { Tecnico, UserModel } from '../../../share/models/UsuarioModel';
import { Router } from '@angular/router';
import { NotificationService } from '../../../share/services/app/notification.service';
import { UserService } from '../../../share/services/api/user.service';
import { TicketService } from '../../../share/services/api/ticket.service';

@Component({
  selector: 'app-admin-ticket',
  standalone: false,
  templateUrl: './admin-ticket.html',
  styleUrl: './admin-ticket.css'
})
export class AdminTicket {
  constructor(
    private ticketSvc: TicketService,
    private userService: UserService,
    private noti: NotificationService,
    protected router: Router
  ) { }

  // ─────────────────────────────────────────────────────────────
  //  Signals y propiedades reactivas
  // ─────────────────────────────────────────────────────────────
  cargando = signal<boolean>(true);
  datos = signal<Ticket[]>([]);
  total = signal<number>(0);
  user = signal<UserModel | null>(null);
  selectDate = signal<Date>(new Date());
  fechaInicio = signal<Date>(new Date());
  fechasVisibles: Date[] = [];
  readonly hoy = new Date();

  // ─────────────────────────────────────────────────────────────
  //  Paginación
  // ─────────────────────────────────────────────────────────────
  itemsPorPagina = 10;
  paginaActual = 1;
  totalItems: number = 0;

  // ─────────────────────────────────────────────────────────────
  //  Estado UI
  // ─────────────────────────────────────────────────────────────
  select: number = -1;
  verTipos: boolean = window.innerWidth > 768;
  tipo: string = window.innerWidth <= 768 ? 'grid' : sessionStorage.getItem("Ticket-datos") ?? 'lista';

  // ─────────────────────────────────────────────────────────────
  //  Filtros
  // ─────────────────────────────────────────────────────────────
  filtros = {
    texto: '',
    estado: '',
    prioridad: '',
    ordenCampo: '',
    ordenDireccion: 'desc'
  };
  camposOrdenables = [
    { value: 'id', label: 'Código' },
    { value: 'estado', label: 'Estado' },
    { value: 'fechaCreacion', label: 'Fecha de creación' },
    { value: 'slaSolucion', label: 'Fecha de solución' }
  ];
  direccionesOrden = [
    { value: 'asc', label: 'Acendente (A-Z)' },
    { value: 'desc', label: 'Decendente (Z-A)' }
  ];

  // ─────────────────────────────────────────────────────────────
  //  Carga inical
  // ─────────────────────────────────────────────────────────────
  ngOnInit(): void {
    this.user.set(this.userService.getUser());
    if (this.tipo === "calendar") this.generarFechas()
    this.lista();
  }

  // ─────────────────────────────────────────────────────────────
  //  Carga de datos
  // ─────────────────────────────────────────────────────────────
  lista(): void {
    this.cargando.set(true);
    const skip = (this.paginaActual - 1) * this.itemsPorPagina;
    const take = this.itemsPorPagina;
    const { texto, estado, prioridad, ordenCampo, ordenDireccion } = this.filtros;

    const queryParts = [];

    if (take) queryParts.push(`take=${take}`);
    if (skip) queryParts.push(`skip=${skip}`);
    if (texto) queryParts.push(`search=${texto}`);
    if (estado) queryParts.push(`estado=${estado}`);
    if (prioridad) queryParts.push(`prioridad=${prioridad}`);
    if (ordenCampo) queryParts.push(`orderBy=${ordenCampo}&orderDir=${ordenDireccion}`);
    if (this.tipo === "calendar") {
      queryParts.push(`fechaInicio=${this.fechasVisibles[0].toDateString()}`);
      queryParts.push(`fechaFin=${this.fechasVisibles[6].toDateString()}`);
    }

    const query = queryParts.join('&');

    this.ticketSvc.get(query).subscribe((res: { lista: Ticket[], count: number }) => {
      this.datos.set(res.lista);
      this.total.set(res.count);
      this.totalItems = res.count;
      this.cargando.set(false);
    });
  }

  tecnicoAsignado(lista: Asignacion[] | undefined): Tecnico | null {
    const tecnico = lista?.find((t: any) => t.activo)?.tecnico;
    return tecnico ?? null;
  }

  // ─────────────────────────────────────────────────────────────
  //  Calendario
  // ─────────────────────────────────────────────────────────────
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

  // ─────────────────────────────────────────────────────────────
  //  Paginación dinámica
  // ─────────────────────────────────────────────────────────────
  cambiarPagina(p: number): void {
    this.paginaActual = p;
    this.lista();
  }

  cambiarItemsPorPagina(n: number): void {
    this.itemsPorPagina = n;
    this.paginaActual = 1;
    this.lista();
  }

  // ─────────────────────────────────────────────────────────────
  //  Filtros
  // ─────────────────────────────────────────────────────────────
  quitarFiltros(): void {
    this.filtros = {
      texto: '',
      estado: '',
      prioridad: '',
      ordenCampo: '',
      ordenDireccion: 'desc' // 'asc' o 'desc'
    };
    this.lista()
  }


  // ─────────────────────────────────────────────────────────────
  //  Acciones de botones
  // ─────────────────────────────────────────────────────────────
  irDetalles(id: number): void {
    this.router.navigate(['tickets/detalle'], {
      fragment: btoa(id.toString()) // opcionalmente encriptado como base64
    })
  }

  // ─────────────────────────────────────────────────────────────
  //  Tipo de visualización
  // ─────────────────────────────────────────────────────────────
  cambiarTipo(t: string): void {
    this.tipo = t;
    sessionStorage.setItem("Ticket-datos", t);
    if (this.tipo === "calendar") this.generarFechas()
  }

  // ─────────────────────────────────────────────────────────────
  //  Responsive: detectar tamaño de pantalla
  // ─────────────────────────────────────────────────────────────
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.verTipos = window.innerWidth > 768;

    const tipoGuardado = sessionStorage.getItem("Ticket-datos");
    this.tipo = window.innerWidth > 768 ? tipoGuardado ?? 'lista' : 'grid';
  }
}
