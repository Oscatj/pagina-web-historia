import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpdComponent } from './jpd.component';

describe('JpdComponent', () => {
  let component: JpdComponent;
  let fixture: ComponentFixture<JpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JpdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
