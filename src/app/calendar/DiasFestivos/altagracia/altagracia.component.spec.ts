import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltagraciaComponent } from './altagracia.component';

describe('AltagraciaComponent', () => {
  let component: AltagraciaComponent;
  let fixture: ComponentFixture<AltagraciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltagraciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltagraciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
