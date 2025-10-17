import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { FormsModule } from '@angular/forms';

import { LoginModule } from './login/login';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    LoginModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    AuthRoutingModule
  ]
})
export class AuthModules { }
