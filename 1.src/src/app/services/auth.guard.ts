import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SESSION_STORAGE, StorageService, StorageTranscoders } from 'ngx-webstorage-service';
import { Inject} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate ,OnInit{
  ff:boolean=false;
  constructor(@Inject(SESSION_STORAGE) public storage: StorageService,private router: Router)
  {}
  ngOnInit(): void {
    this.canActivate;
    this.getFromLocal;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.getFromLocal("user")){
      //  this.router.navigateByUrl('/home');
      console.log("if:son valuer ds bloc can activate"+this.getFromLocal("user"));
        return true;
      }
         console.log("else:son valuer ds bloc can activate "+this.getFromLocal("user"));
         this.router.navigateByUrl("/login");
         return false;
  
    }

   isLoged(st){
     console.log("sevice gard test val st :   " + st)
     this.ff=st;
     console.log("sevice gard test : val ff:  " + st)
     this.canActivate;
   }

   getFromLocal(key) {
    console.log('recieved= key:' + key);
   // console.log("service auth :"+this.storage.get(key,StorageTranscoders.STRING));
    return this.storage.get(key,StorageTranscoders.STRING);
    
   }


  }
  
  

