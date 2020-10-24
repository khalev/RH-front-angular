import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Employe } from '../models/Employe';

@Injectable({
  providedIn: 'root'
})
export class DonneesService implements OnInit {

  emp:Employe;
  empForm:FormGroup;
  user:User;
  userForm:FormGroup;
  constructor(private http:HttpClient,
              private contactBuilder:FormBuilder,public router:Router,private route: ActivatedRoute ){
  
  }
  
    ngOnInit(){
  
  
    }
/* Gestion des utilisateurs*/
  getAllUsers(){
    const url = "http://localhost:8080/usersList";
     return  this.http.get<User>(url);
    }
    getUsersParMc(motCle:string){
        const url = "http://localhost:8080/chercherUsers?mc="+motCle;
         return  this.http.get<any>(url);
        }
    
  getUsers(motCle:string,page:number,size:number){
      const url = "http://localhost:8080/chercherUser?mc="+motCle+"&page="+page+"&size="+size;
       return  this.http.get<any>(url);
      }
  saveUser(user:User){
        const url = "http://localhost:8080/users";
        this.http.post(url,user)
            .subscribe(
                (resp:any)=>{
                    console.log('Enregistrement reussit');
                    alert("Enregistrement reussit");
                    this.user = resp;
                },
                (error)=>{
                    console.log('Echec de l\'enregistrement ');
                }
            );
    }

    /*for update*/

    getUser(id:number){
        const url = "http://localhost:8080/user/"+id;
        return  this.http.get<any>(url);
    }


    updateUser(user:User){
        const url = "http://localhost:8080/users/"+user.id;
        this.http.put(url,user)
            .subscribe(
                (resp:any)=>{
                    console.log('Enregistrement reussit');
                    this.user = resp;
                    alert("Mis a jour effectuee");
                    this.router.navigate(['/home/user'],{ relativeTo: this.route });
                },
                (error)=>{
                    console.log('Echec de l\'enregistrement ');
                }
            );
    }


    deleteUser(id:number){
        const url = "http://localhost:8080/user/"+id;
        this.http.delete(url)
            .subscribe(
                (resp:any)=>{
                    //console.log('Enregistrement reussit');
                    //this.contact = resp;
                   // alert("Mis a jour effectuee");
                   // this.router.navigate(['contacts']);

                },
                (error)=>{
                    console.log('Echec de l\'enregistrement ');
                }
            );
    }


    /*fin update*/

/* Gestion des employes*/
getEmployes(motCle:string,page:number,size:number){
    const url1 = "http://localhost:8080/chercherEmploye?mc="+motCle+"&page="+page+"&size="+size;
     return  this.http.get<any>(url1);
    }
saveEmploye(emp:Employe){
      const url = "http://localhost:8080/employes";
     return this.http.post<any>(url,emp);
          
  }

  /*for update*/

  getEmploye(id:number){
      const url = "http://localhost:8080/employe/"+id;
      return  this.http.get<any>(url);
  }


  updateEmploye(emp:Employe){
      const url = "http://localhost:8080/employes/"+emp.id;
      this.http.put(url,emp)
          .subscribe(
              (resp:any)=>{
                  console.log('Enregistrement reussit');
                  this.emp = resp;
                  alert("Mis a jour effectuee");
                  this.router.navigate(['/home/emp'],{ relativeTo: this.route });
              },
              (error)=>{
                  console.log('Echec de l\'enregistrement ');
              }
          );
  }


  deleteEmploye(id:number){
      const url = "http://localhost:8080/employe/"+id;
      this.http.delete(url)
          .subscribe(
              (resp:any)=>{
                  //console.log('Enregistrement reussit');
                  //this.contact = resp;
                 // alert("Mis a jour effectuee");
                 // this.router.navigate(['contacts']);

              },
              (error)=>{
                  console.log('Echec de l\'enregistrement ');
              }
          );
  }


  /*fin update*/

}
