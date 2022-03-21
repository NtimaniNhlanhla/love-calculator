import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveCalcComponent } from './love-calc.component';

describe('LoveCalcComponent', () => {
  let component: LoveCalcComponent;
  let fixture: ComponentFixture<LoveCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoveCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoveCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
