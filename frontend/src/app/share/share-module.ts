import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFound } from './page-not-found/page-not-found';

import {MatGridListModule} from '@angular/material/grid-list'; 
import { MatButtonModule } from '@angular/material/button';
import { Paginador } from '../components/core/paginador/paginador';
import { FormsModule } from "@angular/forms";
import { MatIcon } from "@angular/material/icon"; 


@NgModule({
  declarations: [
    PageNotFound,
    Paginador
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    MatIcon
],
  exports: [
    Paginador
  ]
})
export class ShareModule { }
