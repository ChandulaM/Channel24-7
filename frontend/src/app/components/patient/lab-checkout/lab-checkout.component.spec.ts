import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabCheckoutComponent } from './lab-checkout.component';

describe('LabCheckoutComponent', () => {
  let component: LabCheckoutComponent;
  let fixture: ComponentFixture<LabCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
