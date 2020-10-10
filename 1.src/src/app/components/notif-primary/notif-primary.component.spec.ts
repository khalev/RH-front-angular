import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifPrimaryComponent } from './notif-primary.component';

describe('NotifPrimaryComponent', () => {
  let component: NotifPrimaryComponent;
  let fixture: ComponentFixture<NotifPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifPrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
