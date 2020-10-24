import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/models/Employe';
import { DonneesService } from 'src/app/services/donnees.service';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

  mode:number = 1;
  emp:Employe=new Employe();
  idEmp:number;

 constructor(public donneesServis:DonneesService,
 activatedRoute:ActivatedRoute,public router:Router ) {

     /*console.log(activatedRoute.snapshot.params['id']);*/
     this.idEmp=activatedRoute.snapshot.params['id'];
 }

 ngOnInit() {
 this.donneesServis.getUser(this.idEmp)
     .subscribe(data=>{
         this.emp=data;
     },error => {
         console.log(error);
     })
 }


 saveEmploye(){
  this.donneesServis.saveEmploye(this.emp)
  .subscribe(
    (resp:any)=>{
        console.log('Enregistrement reussit');
        alert("Enregistrement reussit");
        this.emp = resp;
    },
    (error)=>{
        console.log('Echec de l\'enregistrement ');
    }
);
 
   this.mode = 2;
 }

}


