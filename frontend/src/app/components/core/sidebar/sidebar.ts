import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  menuClose: boolean = false;

  constructor() {
    this.menuClose = window.innerWidth <= 992;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.menuClose = window.innerWidth <= 992;
  }
}


