import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpusChristiComponent } from './corpus-christi.component';

describe('CorpusChristiComponent', () => {
  let component: CorpusChristiComponent;
  let fixture: ComponentFixture<CorpusChristiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpusChristiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpusChristiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
