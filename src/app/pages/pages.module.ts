import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './mapa/mapa.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    MapaComponent,
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    SharedModule,
  ],
  exports: [
    DashboardComponent,
    MapaComponent,
    PagesComponent,
  ]
})
export class PagesModule { }
