import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employe } from 'src/app/models/Employe';
import { DonneesService } from 'src/app/services/donnees.service';

@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})
export class ListEmployeComponent implements OnInit, OnDestroy {
 public pageEmployes:any;
  empSubcription:Subscription;
  motCle:string ="";
  pageCourante:number=0;
  size:number=9;
  pages:Array<number>;
  emp:Employe;

  constructor(public donneesService:DonneesService,
    public http:HttpClient,
    public router:Router,private route: ActivatedRoute) {  }

    ngOnInit() {
      this.doSercher();
      }
   
  doSercher(){
    if(this.motCle != ""){
      this.pageCourante=0;
    }
    this.empSubcription = this.donneesService.getEmployes(this.motCle,this.pageCourante,this.size).subscribe(
      (resp:any)=>{
        this.pageEmployes = resp;
        this.pages = new Array<number>(resp.totalPages);
      },
      (error)=>{
        console.log("Erreur : "+error);
      }
    );
  }
  goToPage(i:number){
    this.pageCourante=i;
    this.doSercher();
    
  }
  onSubmitAddEmploye(){
    this.onAddEmploye();
  }

  onSubmitSearchEmployes(){
    this.doSercher();
  }

  ngOnDestroy(){
  }

  /** Add employe*/
  onAddEmploye(){
    this.router.navigate(['../add-employe'],{ relativeTo: this.route });
  }
  /**fin Add employe */
   /*update*/
   onEditEmploye(e:Employe){
    this.router.navigate(['../edit-employe',e.id],{ relativeTo: this.route });
  }
  /*fin update*/
  
  /*delete*/

  onDeleteEmploye(e:Employe){
    let confirm=window.confirm('Est vous sure ?');
    if(confirm==true){
      this.donneesService.deleteEmploye(e.id)
      this.pageEmployes.content.splice(
          this.pageEmployes.content.indexOf(e),1
      );

    }


  }


  /*fin delete*/

}
 


