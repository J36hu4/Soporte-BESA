import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { RouterModule } from '@angular/router'; import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { Sidebar } from './sidebar/sidebar'
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { Tabla } from './tabla/tabla';

@NgModule({
  declarations: [Header, Footer, Sidebar, Tabla],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatBadgeModule,
    CdkAccordionModule
  ],
  exports: [Header, Footer, Sidebar, Tabla],
})
export class CoreModule { } 