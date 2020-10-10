import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notif-primary',
  templateUrl: './notif-primary.component.html',
  styleUrls: ['./notif-primary.component.css'],
})
export class NotifPrimaryComponent implements OnInit {
  @Input('msg') msg;
  constructor() {}

  ngOnInit(): void {}
}
