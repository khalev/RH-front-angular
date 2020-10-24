import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestEmpsRoutingModule } from './gest-emps-routing.module';
import { RouterModule } from '@angular/router';
import { ListEmployeComponent } from './list-employe/list-employe.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeComponent } from './edit-employe/edit-employe.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { SortEmpDirective } from 'src/app/directive/sort-emp.directive';
import { RedDirective } from 'src/app/directive/red.directive';
 


@NgModule({
  declarations: [ListEmployeComponent, EditEmployeComponent, AddEmployeComponent,SortEmpDirective,RedDirective],
  imports: [
    CommonModule,
    GestEmpsRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class GestEmpsModule { }
