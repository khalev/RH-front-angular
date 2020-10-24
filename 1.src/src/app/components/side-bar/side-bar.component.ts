import { Component, OnInit } from '@angular/core';
import { PartageService } from 'src/app/services/partage.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  hideSideBar = false;
  constructor(private partage: PartageService) {}

  ngOnInit(): void {
    this.partage.curSideBarState.subscribe((data) => {
      this.hideSideBar = data;
    });
  }
}
