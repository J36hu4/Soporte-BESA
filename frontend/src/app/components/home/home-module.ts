import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Inicio } from './inicio/inicio';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CoreModule } from "../core/core-module";
import { CapitalizarPipe } from '../../app';


@NgModule({
  declarations: [
    Inicio
  ],
  imports: [
    CommonModule,
    CapitalizarPipe,
    HomeRoutingModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatButtonModule,
    CoreModule
]
})
export class HomeModule { }
