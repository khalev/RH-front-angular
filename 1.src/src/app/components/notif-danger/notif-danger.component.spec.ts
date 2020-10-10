import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifDangerComponent } from './notif-danger.component';

describe('NotifDangerComponent', () => {
  let component: NotifDangerComponent;
  let fixture: ComponentFixture<NotifDangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifDangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
