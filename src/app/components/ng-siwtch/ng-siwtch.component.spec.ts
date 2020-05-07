import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSiwtchComponent } from './ng-siwtch.component';

describe('NgSiwtchComponent', () => {
  let component: NgSiwtchComponent;
  let fixture: ComponentFixture<NgSiwtchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSiwtchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSiwtchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
