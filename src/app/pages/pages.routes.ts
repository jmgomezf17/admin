import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapaComponent } from './mapa/mapa.component';

const pageRoutes: Routes = [
    {
      path: '',
      component: PagesComponent,
      children: [
        { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
        { path: 'mapa', component: MapaComponent, data: { titulo: 'Progreso' } },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      ]
    },
  ];

export const PAGES_ROUTES = RouterModule.forChild( pageRoutes);
