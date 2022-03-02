import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaReyesComponent } from './dia-reyes.component';

describe('DiaReyesComponent', () => {
  let component: DiaReyesComponent;
  let fixture: ComponentFixture<DiaReyesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaReyesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaReyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
