import { Component, HostListener, signal } from '@angular/core';
import { Ticket } from '../../../share/models/ticketModel';
import { TicketService } from '../../../share/services/api/ticket.service';
import { UserModel } from '../../../share/models/UsuarioModel';
import { UserService } from '../../../share/services/api/user.service';
import { NotificationService } from '../../../share/services/app/notification.service';
import { count } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  cargando = signal<boolean>(true);
  constructor(protected router: Router, private ticketSvc: TicketService, private userService: UserService, private noti: NotificationService) { };

  user = signal<UserModel | null>(null);
  ngOnInit(): void {
    this.user.set(this.userService.getUser());
    this.lista()
  }


  //Carga de datos
  datos = signal<Ticket[]>([]);
  total = signal<number>(0);
  lista() {
    this.ticketSvc.get(`take=5&idUser=${this.user()?.id ?? 0}&estado=cerrado&notEstado=1`).subscribe((res: { lista: Ticket[], count: number }) => {
      this.datos.set(res.lista);
      this.total.set(res.count)
      this.cargando.set(false);
    })
  }

  //Variables de tipo de datos
  verTipos: boolean = window.innerWidth > 768;
  tipo: string = window.innerWidth <= 768 ? 'grid' : localStorage.getItem("home-datos") ?? 'grid';
  cambiarTipo(t: string): void {
    this.tipo = t
    localStorage.setItem("home-datos", t)
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.verTipos = window.innerWidth > 768;

    const tipoGuardado = localStorage.getItem("home-datos");
    this.tipo = window.innerWidth > 768 ? tipoGuardado ?? 'grid' : 'grid'; // fallback si es null

  }

  // ─────────────────────────────────────────────────────────────
  //  Acciones de botones
  // ─────────────────────────────────────────────────────────────
  irDetalles(id: number): void {
    this.router.navigate(['mytickets/detalle'], {
      fragment: btoa(id.toString()) // opcionalmente encriptado como base64
    })
  }

}
