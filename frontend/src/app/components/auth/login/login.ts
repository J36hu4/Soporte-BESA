import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginModule {
  constructor(private router: Router) { }
  @ViewChild('main') mainRef!: ElementRef;
  @ViewChild('sc1') sc1Ref!: ElementRef;
  @ViewChild('sc2') sc2Ref!: ElementRef;

  today: number = Date.now();

  cargar(): void {
    const main = this.mainRef.nativeElement;
    const seccion1 = this.sc1Ref.nativeElement;
    const seccion2 = this.sc2Ref.nativeElement;

    main.classList.add('cargando');
    seccion2.classList.add('hidden');
    seccion2.classList.remove('visible');

    setTimeout(() => {
      seccion1.classList.remove('hidden');
      seccion1.classList.add('visible');
    }, 400);

    setTimeout(() => {
      this.router.navigate(['/inicio']);
    }, 4000);
  }
}
