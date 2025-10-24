// control-root.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { UserService } from '../share/services/api/user.service';
import { Roles } from '../share/models/Enums';
import { NotificationService } from '../share/services/app/notification.service';

@Injectable({ providedIn: 'root' })
export class RedirectGuard implements CanActivate {
  constructor(private auth: UserService, private router: Router, private noti: NotificationService) { }

  canActivate(): boolean {
    const isLoggedIn = this.auth.isAuthenticated();

    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      this.noti.error('Sesion expirada', 'El tiempo de su sesion ha expirado, vuelva a iniciar sesion', 6000);
      return false;
    }

    return true;
  }

}


@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private auth: UserService, private router: Router, private noti: NotificationService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles = route.data['roles'] as string[];
    const userRole = this.auth.getUser()?.role;

    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      this.noti.error('Sesion expirada', 'El tiempo de su sesion ha expirado, vuelva a iniciar sesion', 6000);
      return false;
    } else if (!userRole || !expectedRoles.includes(userRole.toString())) {
      this.router.navigate(['/inicio']);
      this.noti.error('Sin permiso', 'No cuentas con el permiso necesario para acceder a esa ruta', 6000);
      return false
    }

    return true;
  }
}
