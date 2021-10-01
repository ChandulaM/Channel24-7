import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsForAppointmentComponent } from './patient-details-for-appointment.component';

describe('PatientDetailsForAppointmentComponent', () => {
  let component: PatientDetailsForAppointmentComponent;
  let fixture: ComponentFixture<PatientDetailsForAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDetailsForAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailsForAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
