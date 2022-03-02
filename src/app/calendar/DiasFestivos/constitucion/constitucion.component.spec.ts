import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstitucionComponent } from './constitucion.component';

describe('ConstitucionComponent', () => {
  let component: ConstitucionComponent;
  let fixture: ComponentFixture<ConstitucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstitucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
