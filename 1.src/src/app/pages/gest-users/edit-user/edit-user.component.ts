import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { DonneesService } from 'src/app/services/donnees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  mode:number = 1;
   user:User=new User();
  idUser:number;

 constructor(public donneService:DonneesService,
 activatedRoute:ActivatedRoute,public router:Router ) {

     /*console.log(activatedRoute.snapshot.params['id']);*/
     this.idUser=activatedRoute.snapshot.params['id'];
     console.log("test test test "+activatedRoute.snapshot.params['id'])
 }

 ngOnInit() {
 this.donneService.getUser(this.idUser)
     .subscribe(data=>{
         this.user=data;
     },error => {
         console.log(error);
     })
    
 }


   updateUser(){
     this.donneService.updateUser(this.user);
           
   }

}
