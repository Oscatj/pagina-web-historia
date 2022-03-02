import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependenciaComponent } from './independencia.component';

describe('IndependenciaComponent', () => {
  let component: IndependenciaComponent;
  let fixture: ComponentFixture<IndependenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndependenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndependenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
