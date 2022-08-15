import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionCalculatorComponent } from './prediction-calculator.component';

describe('PredictionCalculatorComponent', () => {
  let component: PredictionCalculatorComponent;
  let fixture: ComponentFixture<PredictionCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictionCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
