import { Component, HostListener, signal } from '@angular/core';
import { TecnicoService } from '../../../share/services/api/tecnico.service';
import { UserService } from '../../../share/services/api/user.service';
import { NotificationService } from '../../../share/services/app/notification.service';
import { Router } from '@angular/router';
import { Tecnico, UserModel } from '../../../share/models/UsuarioModel';

@Component({
  selector: 'app-tecnicos',
  standalone: false,
  templateUrl: './tecnicos.html',
  styleUrl: './tecnicos.css'
})
export class Tecnicos {
  constructor(
    private tecnicoSvc: TecnicoService,
    private userService: UserService,
    private noti: NotificationService,
    protected router: Router
  ) { }

  // ─────────────────────────────────────────────────────────────
  //  Signals y propiedades reactivas
  // ─────────────────────────────────────────────────────────────
  cargando = signal<boolean>(true);
  datos = signal<Tecnico[]>([]);
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
  verTipos: boolean = false;
  tipo: string = 'lista';

  // ─────────────────────────────────────────────────────────────
  //  Filtros
  // ─────────────────────────────────────────────────────────────
  filtros = {
    texto: '',
    estado: '',
    carga: '',
    ordenCampo: '',
    ordenDireccion: 'desc'
  };
  camposOrdenables = [
    { value: 'id', label: 'Código' },
    { value: 'carga', label: 'Carga' },
    { value: 'nombre', label: 'Nombre' },
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
    const { texto, estado, carga, ordenCampo, ordenDireccion } = this.filtros;

    const queryParts = [];

    if (take) queryParts.push(`take=${take}`);
    if (skip) queryParts.push(`skip=${skip}`);
    if (texto) queryParts.push(`search=${texto}`);
    if (estado) queryParts.push(`estado=${estado}`);
    if (carga) queryParts.push(`carga=${carga}`);
    if (ordenCampo) queryParts.push(`orderBy=${ordenCampo}&orderDir=${ordenDireccion}`);

    const query = queryParts.join('&');

    this.tecnicoSvc.get(query).subscribe((res: { lista: Tecnico[], count: number }) => {
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
      carga: '',
      ordenCampo: '',
      ordenDireccion: 'desc' // 'asc' o 'desc'
    };
    this.lista()
  }


  // ─────────────────────────────────────────────────────────────
  //  Acciones de botones
  // ─────────────────────────────────────────────────────────────
  irDetalles(id: number): void {
    this.router.navigate(['tecnicos/detalle'], {
      fragment: btoa(id.toString()) // opcionalmente encriptado como base64
    })
  }

  irEditar(id: number): void {
    this.router.navigate(['tecnicos/editar'], {
      fragment: btoa(id.toString()) // opcionalmente encriptado como base64
    })
  }
}
