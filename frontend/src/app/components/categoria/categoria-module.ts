import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing-module';
import { Categorias } from './categorias/categorias';
import { CategoriaDetalle } from './detalle/detalle';
import { CapitalizarPipe } from '../../app';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShareModule } from '../../share/share-module';
import { CoreModule } from '../core/core-module';
import { CategoriaFormulario } from './formulario/formulario';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    Categorias,
    CategoriaDetalle,
    CategoriaFormulario
  ],
  imports: [
    CommonModule,
    CapitalizarPipe,
    MatIconModule,
    ShareModule,
    CategoriaRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [
    Categorias,
    CategoriaDetalle,
    CategoriaFormulario
  ]
})
export class CategoriaModule { }
