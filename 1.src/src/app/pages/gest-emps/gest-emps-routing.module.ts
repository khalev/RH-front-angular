import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { EditEmployeComponent } from './edit-employe/edit-employe.component';
import { ListEmployeComponent } from './list-employe/list-employe.component';


const routes: Routes = [
  { path: '', redirectTo: 'listEmploye', pathMatch: 'full' },
    { path: 'listEmploye',
     component:ListEmployeComponent
    },
    {
      path:'edit-employe/:id',
      component:EditEmployeComponent
    },
    {
      path:'add-employe',
      component:AddEmployeComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestEmpsRoutingModule { }
