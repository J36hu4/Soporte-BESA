import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { LoginModule } from './login/login';


@NgModule({
  declarations: [
    LoginModule
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModules { }
