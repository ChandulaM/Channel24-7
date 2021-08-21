import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHospitalmanagerComponent } from './register-hospitalmanager.component';

describe('RegisterHospitalmanagerComponent', () => {
  let component: RegisterHospitalmanagerComponent;
  let fixture: ComponentFixture<RegisterHospitalmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHospitalmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHospitalmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
