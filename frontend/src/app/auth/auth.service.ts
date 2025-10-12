// auth.service.ts

import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AuthService {
  getUserRole(): string {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role || 'guest';
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }
}
