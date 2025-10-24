import { Component, HostListener, signal } from '@angular/core';
import { UserService } from '../../../share/services/api/user.service';
import { NavigationEnd, Router } from '@angular/router';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  menuClose: boolean = false;
  rutaSelect: number = 0;

  constructor(protected router: Router, protected userService: UserService) {
    this.menuClose = window.innerWidth <= 992 || (window.innerWidth > 992 && (sessionStorage.getItem('menuClose') ?? '0') === '1');
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        if (url.startsWith('/inicio')) {
          this.rutaSelect = 1;
        } else if (url.startsWith('/mytickets')) {
          this.rutaSelect = 2;
        } else if (url.startsWith('/tickets')) {
          this.rutaSelect = 9;
        } else {
          this.rutaSelect = 0;
        }
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.menuClose = window.innerWidth <= 992 || (window.innerWidth > 992 && (sessionStorage.getItem('menuClose') ?? '0') === '1');
  }

  logOut(): void {
    this.userService.logOut()
  }

  expand(): void {
    this.menuClose = !this.menuClose
    sessionStorage.setItem('menuClose', this.menuClose ? '1' : '0')
  }

  navigate(ruta: string): void {
    this.router.navigate([ruta]);
    if (window.innerWidth <= 992) this.menuClose = true
  }
}


