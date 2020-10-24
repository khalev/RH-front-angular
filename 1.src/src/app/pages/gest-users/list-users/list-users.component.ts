import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DonneesService } from 'src/app/services/donnees.service';

import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit , OnDestroy{
  public pageUsers:any;
  userSubcription:Subscription;
  motCle:string ="";
  pageCourante:number=0;
  size:number=9;
  pages:Array<number>;
  User:User;
  usersList:any;
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
        
    this.userSubcription = this.donneesService.getUsers(this.motCle,this.pageCourante,this.size).subscribe(
      (resp:any)=>{
        this.pageUsers = resp;
        this.pages = new Array<number>(resp.totalPages);
        //this.pageCourante=0;
        console.log("pageCourante :  "+this.pageCourante);
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
  onSubmitAddUser(){
    this.onAddUser();
  }

  onSubmitSearch(){
   this.doSercher();
  }

  ngOnDestroy(){
   // this.userSubcription.unsubscribe();
  }

  /** Add user */
  onAddUser(){
    this.router.navigate(['../add-user'],{ relativeTo: this.route });
  }
  /**fin Add user */
   /*update*/
   onEditUser(u:User){
    this.router.navigate(['../edit-user',u.id],{ relativeTo: this.route });
  }
  /*fin update*/
  
  /*delete*/

  onDeleteUser(u:User){
    let confirm=window.confirm('Est vous sure ?');
    if(confirm==true){
      this.donneesService.deleteUser(u.id)
      this.pageUsers.content.splice(
          this.pageUsers.content.indexOf(u),1
      );

    }
  }
  
  Sercher(){
    this.userSubcription = this.donneesService.getUsersParMc(this.motCle).subscribe(
      (resp:any)=>{
        this.usersList = resp;
        
      },
      (error)=>{
        console.log("Erreur : "+error);
      }
    );



}

  /*fin delete*/

}
