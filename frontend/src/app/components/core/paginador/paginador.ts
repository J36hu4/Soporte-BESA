import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginador',
  standalone: false,
  templateUrl: './paginador.html',
  styleUrl: './paginador.css'
})
export class Paginador {
  @Input() paginaActual: number = 1;
  @Input() totalItems: number = 0;
  @Input() itemsPorPagina: number = 5;
  @Input() opcionesPorPagina: number[] = [1, 5, 10, 20];

  @Output() paginaCambiada = new EventEmitter<number>();
  @Output() itemsPorPaginaCambiado = new EventEmitter<number>();

  get totalPaginas(): number {
    return Math.max(1, Math.ceil(this.totalItems / this.itemsPorPagina));
  }

  get paginasVisibles(): number[] {
    const paginas: number[] = [];

    if (this.totalPaginas <= 1) return [1];

    paginas.push(1);

    const anterior = this.paginaActual - 1;
    const siguiente = this.paginaActual + 1;

    if (anterior > 1) paginas.push(anterior);
    if (this.paginaActual !== 1 && this.paginaActual !== this.totalPaginas) paginas.push(this.paginaActual);
    if (siguiente < this.totalPaginas) paginas.push(siguiente);
    if (!paginas.includes(this.totalPaginas)) paginas.push(this.totalPaginas);

    return [...new Set(paginas)].sort((a, b) => a - b);
  }

  cambiarPagina(p: number) {
    if (p >= 1 && p <= this.totalPaginas) {
      this.paginaCambiada.emit(p);
    }
  }

  cambiarItemsPorPagina(n: number) {
    this.itemsPorPaginaCambiado.emit(n);
  }

}
