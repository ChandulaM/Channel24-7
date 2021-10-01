import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHospitalmanagerComponent } from './login-hospitalmanager.component';

describe('LoginHospitalmanagerComponent', () => {
  let component: LoginHospitalmanagerComponent;
  let fixture: ComponentFixture<LoginHospitalmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginHospitalmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHospitalmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
