import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
 


const routes: Routes = [
  
   
    { path: '', redirectTo: 'listUser', pathMatch: 'full' },
    { path: 'listUser',
     component:ListUsersComponent
    },
    {
      path:'edit-user/:id',
      component:EditUserComponent
    },
    {
      path:'add-user',
      component:AddUserComponent
    }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestUsersRoutingModule { }
