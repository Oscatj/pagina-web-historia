import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnoNuevoComponent } from './ano-nuevo.component';

describe('AnoNuevoComponent', () => {
  let component: AnoNuevoComponent;
  let fixture: ComponentFixture<AnoNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnoNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
