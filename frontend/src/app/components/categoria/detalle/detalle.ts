import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../../share/services/api/user.service';
import { CategoriaService } from '../../../share/services/api/categoria.service';
import { Categoria } from '../../../share/models/CategoriaModel';

@Component({
  selector: 'app-detalle',
  standalone: false,
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class CategoriaDetalle {
  constructor(
    protected router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private categoriaSVC: CategoriaService,
    private userService: UserService
  ) { }

  // ─────────────────────────────────────────────────────────────
  //  Signals y propiedades reactivas
  // ─────────────────────────────────────────────────────────────
  cargando = signal<boolean>(true);
  dato = signal<Categoria | null>(null);
  countAsignaciones = signal<{
    total: number, bajos: number, medios: number, altos: number, asignados: number, proceso: number, resueltos: number, cerrados: number, [key: string]: number;
  } | null>(null);

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const id = parseInt(atob(fragment));
        this.getItem(id);
      }
    });
  }

  getItem(id: number): void {
    this.categoriaSVC.getById(id).subscribe((res: Categoria) => {
      this.dato.set(res)
    })
  }

  volver(): void {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/mytickets']);
    }
  }
}
