import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHospitalmanagerComponent } from './dashboard-hospitalmanager.component';

describe('DashboardHospitalmanagerComponent', () => {
  let component: DashboardHospitalmanagerComponent;
  let fixture: ComponentFixture<DashboardHospitalmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardHospitalmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHospitalmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
