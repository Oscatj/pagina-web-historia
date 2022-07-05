import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabulasComponent } from './fabulas.component';

describe('FabulasComponent', () => {
  let component: FabulasComponent;
  let fixture: ComponentFixture<FabulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabulasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
