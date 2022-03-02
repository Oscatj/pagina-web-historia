import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViernesSantosComponent } from './viernes-santos.component';

describe('ViernesSantosComponent', () => {
  let component: ViernesSantosComponent;
  let fixture: ComponentFixture<ViernesSantosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViernesSantosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViernesSantosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
