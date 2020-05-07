import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaPersonalisadaComponent } from './directiva-personalisada.component';

describe('DirectivaPersonalisadaComponent', () => {
  let component: DirectivaPersonalisadaComponent;
  let fixture: ComponentFixture<DirectivaPersonalisadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivaPersonalisadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaPersonalisadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
