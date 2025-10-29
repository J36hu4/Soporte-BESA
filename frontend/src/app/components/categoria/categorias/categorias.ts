import { Component, HostListener, signal } from '@angular/core';
import { CategoriaService } from '../../../share/services/api/categoria.service';
import { UserService } from '../../../share/services/api/user.service';
import { NotificationService } from '../../../share/services/app/notification.service';
import { Router } from '@angular/router';
import { Categoria } from '../../../share/models/CategoriaModel';
import { UserModel } from '../../../share/models/UsuarioModel';

@Component({
  selector: 'app-categorias',
  standalone: false,
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class Categorias {
  constructor(
    private categoriaSvc: CategoriaService,
    private userService: UserService,
    private noti: NotificationService,
    protected router: Router
  ) { }

  // ─────────────────────────────────────────────────────────────
  //  Signals y propiedades reactivas
  // ─────────────────────────────────────────────────────────────
  cargando = signal<boolean>(true);
  datos = signal<Categoria[]>([]);
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
  tipo: string = 'list';

  // ─────────────────────────────────────────────────────────────
  //  Filtros
  // ─────────────────────────────────────────────────────────────
  filtros = {
    texto: '',
    prioridad: '',
    ordenCampo: '',
    ordenDireccion: 'desc'
  };
  camposOrdenables = [
    { value: 'id', label: 'Código' },
    { value: 'nombre', label: 'Nombre' },
    { value: 'prioridad', label: 'Prioridad' }
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
    const { texto, prioridad, ordenCampo, ordenDireccion } = this.filtros;

    const queryParts = [];

    if (take) queryParts.push(`take=${take}`);
    if (skip) queryParts.push(`skip=${skip}`);
    if (texto) queryParts.push(`search=${texto}`);
    if (prioridad) queryParts.push(`prio=${prioridad}`);
    if (ordenCampo) queryParts.push(`orderBy=${ordenCampo}&orderDir=${ordenDireccion}`);

    const query = queryParts.join('&');

    this.categoriaSvc.get(query).subscribe((res: { lista: Categoria[], count: number }) => {
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
    this.router.navigate(['categorias/detalle'], {
      fragment: btoa(id.toString()) 
    })
  }
}
