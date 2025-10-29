import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing-module';
import { Categorias } from './categorias/categorias';
import { CategoriaDetalle } from './detalle/detalle';
import { CapitalizarPipe } from '../../app';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from "@angular/forms";
import { ShareModule } from '../../share/share-module';


@NgModule({
  declarations: [
    Categorias,
    CategoriaDetalle
  ],
  imports: [
    CommonModule,
    CapitalizarPipe,
    MatIconModule,
    ShareModule,
    CategoriaRoutingModule,
    FormsModule
],
  exports: [
    Categorias,
    CategoriaDetalle
  ]
})
export class CategoriaModule { }
