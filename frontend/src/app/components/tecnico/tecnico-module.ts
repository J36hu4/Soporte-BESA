import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicoRoutingModule } from './tecnico-routing-module';
import { Tecnicos } from './tecnicos/tecnicos';
import { FormsModule } from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';
import { CapitalizarPipe } from '../../app';
import { ShareModule } from '../../share/share-module';
import { TecnicoDetalle } from './detalle/detalle';
import { Asignaciones } from './asignaciones/asignaciones';
import { MiAsignacion } from './mi-asignacion/mi-asignacion';


@NgModule({
  declarations: [
    Tecnicos,
    TecnicoDetalle,
    Asignaciones,
    MiAsignacion
  ],
  imports: [
    CommonModule,
    MatIconModule,
    CapitalizarPipe,
    TecnicoRoutingModule,
    ShareModule,
    FormsModule
  ],
  exports: [
    Tecnicos,
    TecnicoDetalle,
    Asignaciones,
    MiAsignacion
  ]
})
export class TecnicoModule { }
