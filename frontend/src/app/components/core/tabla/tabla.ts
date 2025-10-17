import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: false,
  templateUrl: './tabla.html',
  styleUrl: './tabla.css'
})
export class Tabla implements OnInit {
  constructor(private router: Router) { }
  @Input() columnas: { key: string; label: string }[] = [];
  @Input() datos: any[] = [];
  @Input() itemsPorPagina: number = 5;
  @Input() tipos: {grid: boolean, calendar: boolean, list: boolean} = {grid: true, calendar: true, list: true};
  @Input() acciones: { crear: boolean, editar: boolean, eliminar: boolean, detalles: boolean } = { crear: true, editar: true, eliminar: true, detalles: true };
  @Input() link?: string = "";
  @Input() titulo: string = 'Titulo tabla'
  @Input() storage: string = ''
  @Input() tipo: string = localStorage.getItem(this.storage) ?? "grid";

  select: number = -1;
  paginaActual = 1;
  totalPaginas = 1;
  verTipos: boolean = window.innerWidth > 768;

  @HostListener('window:resize', ['$event'])
onResize(event: Event): void {
  this.verTipos = window.innerWidth > 768;

    const tipoGuardado = localStorage.getItem(this.storage);
    this.tipo = window.innerWidth > 768 ? tipoGuardado ?? 'grid' : 'grid'; // fallback si es null
 
}


  get datosPaginados(): any[] {
    const start = (this.paginaActual - 1) * this.itemsPorPagina;
    return this.datos.slice(start, start + this.itemsPorPagina);
  }

  ngOnInit(): void {
    this.totalPaginas = Math.ceil(this.datos.length / this.itemsPorPagina);
  }

  cambiarPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
    }
  }

  detalle(id: string): void {
    if (!(this.link = "")) {
      this.router.navigate([this.link + '/detalle/' + id])
    }
  }
  crear(): void {
    this.router.navigate([this.link + '/crear/'])
  }
  editar(id: string): void {
    this.router.navigate([this.link + '/editar/' + id])
  }

  cambiarTipo(t: string): void {
    this.tipo = t
    localStorage.setItem(this.storage, t)
  }
}
