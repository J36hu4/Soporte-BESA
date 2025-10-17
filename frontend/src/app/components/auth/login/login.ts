import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../share/services/api/user.service';
import { jwtDecode } from 'jwt-decode';
import { NotificationService } from '../../../share/services/app/notification.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginModule {
  correo: string = '';
  contrasenna: string = '';
  cargando: boolean = false;
  error: { correo: boolean, contra: boolean } = { correo: false, contra: false };
  today: number = Date.now();

  constructor(private userService: UserService, private router: Router, private noti: NotificationService) { }

  Submit(): void {
    this.error = { correo: false, contra: false };
    this.cargando = true;

    const inicio = Date.now();

    if (!this.correo || this.correo.trim().length < 3) {
      this.noti.error('Correo inválido', 'Debe indicar un correo válido para iniciar sesión', 5000);
      this.error = { correo: true, contra: false }
      this.cargando = false;
      return;
    }

    if (!this.contrasenna || this.contrasenna.trim().length < 3) {
      this.noti.error('Contraseña inválida', 'Debe indicar una contraseña válida para iniciar sesión', 5000);
      this.error = { correo: false, contra: true }
      this.cargando = false;
      return;
    }

    this.userService.auth(this.correo, this.contrasenna).subscribe({
      next: res => {
        sessionStorage.setItem('token', res.token);

        const usuario = jwtDecode(res.token) as {
          nombre: string;
          correo: string;
          rol: string;
          imagen?: string;
        };

        const tiempoTranscurrido = Date.now() - inicio;
        const restante = Math.max(4000 - tiempoTranscurrido, 0);

        setTimeout(() => {
          this.router.navigate(['/inicio']);
          this.cargando = false;
          this.noti.success('Bienvenido', usuario?.nombre ?? '', 5000);
        }, restante);
      },
      error: err => {
        const tiempoTranscurrido = Date.now() - inicio;
        const restante = Math.max(4000 - tiempoTranscurrido, 0);

        setTimeout(() => {
          if (err.status === 401) {
            this.noti.error('Credenciales incorrectas', 'El correo o la contraseña son incorrectas', 5000);
            this.error = { correo: true, contra: true };
            this.contrasenna ="";
            this.correo = '';
          } else {
            console.log('Error desconocido');
          }

          this.cargando = false;
        }, restante);
      }
    });
  }


}
