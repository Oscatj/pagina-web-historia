import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaTrabajoComponent } from './dia-trabajo.component';

describe('DiaTrabajoComponent', () => {
  let component: DiaTrabajoComponent;
  let fixture: ComponentFixture<DiaTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
