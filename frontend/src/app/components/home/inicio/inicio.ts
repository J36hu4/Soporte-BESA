import { Component, HostListener, signal } from '@angular/core';
import { TicketsModel } from '../../../share/models/ticketModel';
import { TicketService } from '../../../share/services/api/ticket.service';
import { UserModel } from '../../../share/models/UsuarioModel';
import { UserService } from '../../../share/services/api/user.service';
import { NotificationService } from '../../../share/services/app/notification.service';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  cargando = signal<boolean>(true);
  constructor(private ticketSvc: TicketService, private userService: UserService, private noti: NotificationService) { };

  user = signal<UserModel | null>(null);
  ngOnInit(): void {
    this.user.set(this.userService.getUser());
    this.lista();
  }


  //Carga de datos
  datos = signal<TicketsModel[]>([]);
  lista() {
    this.ticketSvc.get().subscribe((res: TicketsModel[]) => {
      console.log(res);
      this.datos.set(res);
      this.cargando.set(false);
    })
  }

  //Variables de tipo de datos
  verTipos: boolean = window.innerWidth > 768;
  tipo: string = localStorage.getItem("home-datos") ?? 'grid'
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



}
