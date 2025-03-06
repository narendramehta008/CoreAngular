import { Routes } from '@angular/router';
import { SamplesComponent } from './samples/samples.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'samples',
    component: SamplesComponent,
    // canActivate: [AuthGuardService],
    loadChildren: () =>
      import('../app/samples/samples-routing.module').then(
        (m) => m.SamplesRoutingModule
      ),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
