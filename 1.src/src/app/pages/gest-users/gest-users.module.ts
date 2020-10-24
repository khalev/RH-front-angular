import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestUsersRoutingModule } from './gest-users-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { SortDirective } from 'src/app/directive/sort.directive';
import { RedDirective } from 'src/app/directive/red.directive';


@NgModule({
  declarations: [ListUsersComponent, AddUserComponent, EditUserComponent,SortDirective],
  imports: [
    CommonModule,
    GestUsersRoutingModule,
    RouterModule,
    FormsModule
   
  ]
})
export class GestUsersModule { }
