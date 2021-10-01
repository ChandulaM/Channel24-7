import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterPatientDetailsComponent } from './enter-patient-details.component';

describe('EnterPatientDetailsComponent', () => {
  let component: EnterPatientDetailsComponent;
  let fixture: ComponentFixture<EnterPatientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterPatientDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterPatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
