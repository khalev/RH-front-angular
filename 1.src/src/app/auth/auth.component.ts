import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonneesService } from '../services/donnees.service';
import { User } from '../models/User';
import { AuthGuard } from '../services/auth.guard';

import { SESSION_STORAGE, StorageService, StorageTranscoders } from 'ngx-webstorage-service';
import { Inject, Injectable } from '@angular/core';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  user:User=new User();
  responses:any=[];
  message:string
  isAuthenticated : boolean;

  constructor(@Inject(SESSION_STORAGE) public storage: StorageService, private route: Router,public serviceDonne:DonneesService,public authGuard:AuthGuard) {
      
  }

  ngOnInit(): void {
   this.onLogin();
  
 // Mimic third party storing a value...
 //sessionStorage.setItem('foo', 'barbbbbb');

 // Retrieve value...
// this.storage.get('foo'); // undefined :(
// this.storage.get('foo', StorageTranscoders.STRING); // 'bar' :)
//console.log(this.storage.get('foo', StorageTranscoders.STRING))
   
  
  }



  

saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    //this.data[key]= this.storage.get(key);
   }
 getFromLocal(key) {
    console.log('recieved= key:' + key);
    console.log(this.storage.get(key,StorageTranscoders.STRING));
    return this.storage.get(key,StorageTranscoders.STRING);
    
   }



  onLogin(){
   
    this.serviceDonne.getAllUsers().subscribe(users => this.responses= users);
    this.responses.forEach(u=> {
       if(u.login==this.user.login && u.password==this.user.password){

        this.saveInLocal("user",u);
        
        this.route.navigateByUrl('/home');
        
      }
        else{
          this.message="Login or password does not correct"
         // this.isAuthenticated=false;
         // this.authGuard.isLoged(this.isAuthenticated);
        }


      })
     
       
}
}