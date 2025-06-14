import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LogementComponent } from './pages/logement/logement.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'a-propos', component: AboutComponent },
      { path: 'logement/:logementId', component: LogementComponent },
      { path: '**', component: NotFoundComponent },
      { path: '404', redirectTo: '/404' }
    ]
  }
];
