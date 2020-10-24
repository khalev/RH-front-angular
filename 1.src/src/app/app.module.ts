import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { ComponentsModule } from './components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { SESSION_STORAGE } from 'ngx-webstorage-service';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SortDirective } from './directive/sort.directive';
import { SortEmpDirective } from './directive/sort-emp.directive';
import { RedDirective } from './directive/red.directive';

@NgModule({
  declarations: [AppComponent, AuthComponent, AdminComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
