import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { Header } from './header/header'; 
import { Footer } from './footer/footer'; 
import { RouterModule } from '@angular/router'; import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatBadgeModule} from '@angular/material/badge';
import { sidebar } from './sidebar/sidebar' 
import {CdkAccordionModule} from '@angular/cdk/accordion';
 
@NgModule({ 
  declarations: [Header, Footer, sidebar], 
 imports: [ 
CommonModule, 
RouterModule, 
MatIconModule, 
MatButtonModule, 
MatToolbarModule, 
MatMenuModule, 
MatBadgeModule ,
CdkAccordionModule
], 
  exports: [Header, Footer, sidebar], 
}) 
export class CoreModule {} 