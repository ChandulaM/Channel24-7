import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalmanagerComponent } from './hospitalmanager.component';

describe('HospitalmanagerComponent', () => {
  let component: HospitalmanagerComponent;
  let fixture: ComponentFixture<HospitalmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
