import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalManagerRegistrationComponent } from './hospital-manager-registration.component';

describe('HospitalManagerRegistrationComponent', () => {
  let component: HospitalManagerRegistrationComponent;
  let fixture: ComponentFixture<HospitalManagerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalManagerRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalManagerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
