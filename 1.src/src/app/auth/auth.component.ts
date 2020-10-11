import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  logIn(login, mdp) {
    this.route.navigateByUrl('home');
    console.log(login, mdp);
  }
}
