import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CoreModule } from './components/core/core-module';
import { ShareModule } from './share/share-module';
import { HomeModule } from './components/home/home-module';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthModules } from './components/auth/auth-module';
import { MainLayout } from './layout/main-layout/main-layout';
import { CleanLayout } from './layout/clean-layout/clean-layout';
import {  NgxSonnerToaster } from 'ngx-sonner' 
import { HttpErrorInterceptorService } from './share/interceptor/http-error-interceptor.service';
import { TicketModule } from './components/ticket/ticket-module';
import { TecnicoModule } from './components/tecnico/tecnico-module';


@NgModule({
  declarations: [
    App,
    MainLayout,
    CleanLayout,
  ],
  imports: [
    BrowserModule,
    NgxSonnerToaster,
    CoreModule,
    ShareModule,
    HomeModule,
    AppRoutingModule,
    AuthModules,
    TicketModule,
    TecnicoModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
     { 
      provide: HTTP_INTERCEPTORS,  
      useClass: HttpErrorInterceptorService,  
      multi:true 
    } 
  ],
  bootstrap: [App],
  exports: []
})
export class AppModule { }
