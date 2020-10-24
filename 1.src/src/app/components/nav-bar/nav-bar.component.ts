import { Component, OnInit } from '@angular/core';
import { PartageService } from 'src/app/services/partage.service';

import { SESSION_STORAGE, StorageService, StorageTranscoders } from 'ngx-webstorage-service';
import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthGuard}  from 'src/app/services/auth.guard'
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor( private router:Router,route: ActivatedRoute,private partage: PartageService,@Inject(SESSION_STORAGE) public storage: StorageService) {}

  ngOnInit(): void {
    
  }

  deconnexion(){
    this.storage.clear();
    
    this.router.navigateByUrl("/login");

  }






  toggleSide() {
    this.partage.toggleSideBarState();
  }
}
