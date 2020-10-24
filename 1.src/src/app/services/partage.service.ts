import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PartageService {

  sideBarState = new BehaviorSubject(false);
  curSideBarState = this.sideBarState.asObservable();

  
  



























  toggleSideBarState() {
    let state = !this.sideBarState.getValue();
    this.sideBarState.next(state);
  }

  getSideBarState() {
    return this.sideBarState.getValue();
  }
}
