import { Component, OnInit } from '@angular/core';
import { PartageService } from '../services/partage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private partage: PartageService) {}

  ngOnInit(): void {}

  toggleSide() {
    this.partage.toggleSideBarState();
  }
}
