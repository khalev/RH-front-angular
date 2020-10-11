import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PartageService {
  sideBarState = new BehaviorSubject(false);
  curSideBarState = this.sideBarState.asObservable();

  constructor() {}

  toggleSideBarState() {
    let state = !this.sideBarState.getValue();
    this.sideBarState.next(state);
  }

  getSideBarState() {
    return this.sideBarState.getValue();
  }
}
