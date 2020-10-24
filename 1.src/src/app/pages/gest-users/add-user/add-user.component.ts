import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { DonneesService } from 'src/app/services/donnees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  mode:number = 1;
  user:User=new User();
  idUser:number;

 constructor(public donneesServis:DonneesService,
 activatedRoute:ActivatedRoute,public router:Router ) {

     /*console.log(activatedRoute.snapshot.params['id']);*/
     this.idUser=activatedRoute.snapshot.params['id'];
 }

 ngOnInit() {
 this.donneesServis.getUser(this.idUser)
     .subscribe(data=>{
         this.user=data;
     },error => {
         console.log(error);
     })
 }


 saveUser(){
  this.donneesServis.saveUser(this.user);
   this.mode = 2;
 }

}

