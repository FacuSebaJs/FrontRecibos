import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './screens/home/home.component';
import { RecibosComponent } from './screens/recibos/recibos.component';
import { DescargarComponent } from './screens/descargar/descargar.component';
import { ConfiguracionComponent } from './screens/configuracion/configuracion.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: HomeComponent },
      { path: 'recibos', component: RecibosComponent },
      { path: 'descargar', component: DescargarComponent },
      { path: 'configuracion', component: ConfiguracionComponent }
    ]
  }
];
