import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../services/app/notification.service';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptorService implements HttpInterceptor {
  constructor(private noti: NotificationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let message: string | null = null;

        if (error.error instanceof ErrorEvent) {
          console.log('Error del lado del cliente');
          message = `Error: ${error.error.message}`;
        } else {
          console.log('Error del lado del servidor');
          message = `Código: ${error.status}, Mensaje: ${error.message}`;

          switch (error.status) {
            case 0:
              message = 'Error desconocido';
              break;
            case 422:
              message = 'Se ha presentado un error';
              break;
            case 500:
              message = 'Error interno del servidor';
              break;
            case 503:
              message = 'Servicio no disponible';
              break;
          }

          // Mostrar notificación solo si el error no es 400, 401, 403, 404
          if (![400, 401, 403, 404].includes(error.status)) {
            this.noti.error(`Error ${error.status}`, message ?? 'Error inesperado', 5000);
          }
        }

        return throwError(() => error); // ← importante: propaga el error correctamente
      })
    );
  }
}
