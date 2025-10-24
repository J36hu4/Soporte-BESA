import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicoRoutingModule } from './tecnico-routing-module';
import { Tecnicos } from './tecnicos/tecnicos';


@NgModule({
  declarations: [
    Tecnicos
  ],
  imports: [
    CommonModule,
    TecnicoRoutingModule
  ],
  exports: [
    Tecnicos
  ]
})
export class TecnicoModule { }
