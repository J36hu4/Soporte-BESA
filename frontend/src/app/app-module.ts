import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CoreModule } from './components/core/core-module';
import { ShareModule } from './components/share/share-module';
import { HomeModule } from './components/home/home-module';
import { provideHttpClient } from '@angular/common/http';
import { LoginModule } from './components/auth/login/login';
import { AuthModules } from './components/auth/auth-module';
import { MainLayout } from './components/layout/main-layout/main-layout';
import { CleanLayout } from './components/layout/clean-layout/clean-layout';


@NgModule({
  declarations: [
    App,
    MainLayout,
    CleanLayout
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ShareModule,
    HomeModule,
    AppRoutingModule,
    AuthModules
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App],
  exports: []
})
export class AppModule { }
