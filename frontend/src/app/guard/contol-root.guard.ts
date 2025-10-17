// control-root.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { UserService } from '../share/services/api/user.service';
import { Roles } from '../share/models/UsuarioModel';

@Injectable({ providedIn: 'root' })
export class RedirectGuard implements CanActivate {
  constructor(private auth: UserService, private router: Router) { }

  canActivate(): boolean {
    const isLoggedIn = this.auth.isAuthenticated();

    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

}


@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private auth: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles = route.data['roles'] as string[];
    const userRole = this.auth.getUser()?.role;

    if (!this.auth.isAuthenticated() || !userRole || !expectedRoles.includes(userRole.toString())) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
