import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';

import { AuthGuard } from  './services/auth.guard';
const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'home',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:"user",
        loadChildren:() => import('./pages/gest-users/gest-users.module').then(m=>m.GestUsersModule),
      },
      {
        path:"emp",
        loadChildren:() => import('./pages/gest-emps/gest-emps.module').then(m=>m.GestEmpsModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
