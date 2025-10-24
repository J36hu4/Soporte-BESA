
import { Component, HostListener, signal } from '@angular/core';
import { TicketService } from '../../../share/services/api/ticket.service';
import { UserService } from '../../../share/services/api/user.service';
import { NotificationService } from '../../../share/services/app/notification.service';
import { Ticket } from '../../../share/models/ticketModel';
import { UserModel } from '../../../share/models/UsuarioModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-tickets',
  standalone: false,
  templateUrl: './my-tickets.html',
  styleUrl: './my-tickets.css'
})
export class MyTickets {
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
  tipo: string = window.innerWidth <= 768 ? 'grid' : localStorage.getItem("myTicket-datos") ?? 'grid';

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
    if (this.user()) queryParts.push(`idUser=${this.user()?.id}`);
    if (texto) queryParts.push(`search=${texto}`);
    if (estado) queryParts.push(`estado=${estado}`);
    if (prioridad) queryParts.push(`prioridad=${prioridad}`);
    if (ordenCampo) queryParts.push(`orderBy=${ordenCampo}&orderDir=${ordenDireccion}`);

    const query = queryParts.join('&');

    this.ticketSvc.get(query).subscribe((res: { lista: Ticket[], count: number }) => {
      this.datos.set(res.lista);
      this.total.set(res.count);
      this.totalItems = res.count;
      this.cargando.set(false);
    });
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
    this.router.navigate(['mytickets/detalle'], {
      fragment: btoa(id.toString()) // opcionalmente encriptado como base64
    })
  }

  // ─────────────────────────────────────────────────────────────
  //  Tipo de visualización
  // ─────────────────────────────────────────────────────────────
  cambiarTipo(t: string): void {
    this.tipo = t;
    localStorage.setItem("myTicket-datos", t);
  }

  // ─────────────────────────────────────────────────────────────
  //  Responsive: detectar tamaño de pantalla
  // ─────────────────────────────────────────────────────────────
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.verTipos = window.innerWidth > 768;

    const tipoGuardado = localStorage.getItem("myTicket-datos");
    this.tipo = window.innerWidth > 768 ? tipoGuardado ?? 'grid' : 'grid';
  }
}
