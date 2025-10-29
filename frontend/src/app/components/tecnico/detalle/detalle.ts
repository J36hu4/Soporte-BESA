import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TecnicoService } from '../../../share/services/api/tecnico.service';
import { UserService } from '../../../share/services/api/user.service';
import { Location } from '@angular/common';
import { Tecnico } from '../../../share/models/UsuarioModel';

@Component({
  selector: 'app-detalle',
  standalone: false,
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class TecnicoDetalle {
  constructor(
    protected router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private tecnicoSVC: TecnicoService,
    private userService: UserService
  ) { }

  // ─────────────────────────────────────────────────────────────
  //  Signals y propiedades reactivas
  // ─────────────────────────────────────────────────────────────
  cargando = signal<boolean>(true);
  dato = signal<Tecnico | null>(null);
  countAsignaciones = signal<{
    total: number, bajos: number, medios: number, altos: number, asignados: number, proceso: number, resueltos: number, cerrados: number, [key: string]: number;
  } | null>(null);

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const id = parseInt(atob(fragment));
        this.getItem(id);
        this.getCountAsignaciones(id);
      }
    });
  }

  getItem(id: number): void {
    this.tecnicoSVC.getById(id).subscribe((res: Tecnico) => {
      this.dato.set(res)
    })
  }

  getCountAsignaciones(id: number): void {
    this.tecnicoSVC.counAsignaciones(id).subscribe((res: {
      total: number, bajos: number, medios: number, altos: number, asignados: number, proceso: number, resueltos: number, cerrados: number
    }) => {
      this.countAsignaciones.set(res)
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
