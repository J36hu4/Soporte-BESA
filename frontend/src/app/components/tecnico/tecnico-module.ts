import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicoRoutingModule } from './tecnico-routing-module';
import { Tecnicos } from './tecnicos/tecnicos';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';
import { CapitalizarPipe } from '../../app';
import { ShareModule } from '../../share/share-module';
import { TecnicoDetalle } from './detalle/detalle';
import { Asignaciones } from './asignaciones/asignaciones';
import { MiAsignacion } from './mi-asignacion/mi-asignacion';
import { TecnicoFormulario } from './formulario/formulario';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { CoreModule } from "../core/core-module";


@NgModule({
  declarations: [
    Tecnicos,
    TecnicoDetalle,
    Asignaciones,
    MiAsignacion,
    TecnicoFormulario
  ],
  imports: [
    CommonModule,
    MatIconModule,
    CapitalizarPipe,
    TecnicoRoutingModule,
    ShareModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    CoreModule
],
  exports: [
    Tecnicos,
    TecnicoDetalle,
    Asignaciones,
    MiAsignacion,
    TecnicoFormulario
  ]
})
export class TecnicoModule { }
