import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/models/Employe';
import { DonneesService } from 'src/app/services/donnees.service';

@Component({
  selector: 'app-edit-employe',
  templateUrl: './edit-employe.component.html',
  styleUrls: ['./edit-employe.component.css']
})
export class EditEmployeComponent implements OnInit {

  mode:number = 1;
  emp:Employe=new Employe();
 idEmp:number;

constructor(public donneService:DonneesService,
activatedRoute:ActivatedRoute,public router:Router ) {

    /*console.log(activatedRoute.snapshot.params['id']);*/
    this.idEmp=activatedRoute.snapshot.params['id'];
    console.log("test test test "+activatedRoute.snapshot.params['id'])
}

ngOnInit() {
this.donneService.getEmploye(this.idEmp)
    .subscribe(data=>{
        this.emp=data;
    },error => {
        console.log(error);
    })
   
}


  updateEmploye(){
    this.donneService.updateEmploye(this.emp);
          
  }


}
