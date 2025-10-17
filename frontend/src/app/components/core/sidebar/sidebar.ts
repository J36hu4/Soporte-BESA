import { Component, HostListener } from '@angular/core';
import { UserService } from '../../../share/services/api/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  menuClose: boolean = false;

  constructor(private router: Router, private userService: UserService) {
    this.menuClose = window.innerWidth <= 992;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.menuClose = window.innerWidth <= 992;
  }

  logOut(): void {
    this.userService.logOut()
  }
}


