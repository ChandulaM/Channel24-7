import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationhomeComponent } from './registrationhome.component';

describe('RegistrationhomeComponent', () => {
  let component: RegistrationhomeComponent;
  let fixture: ComponentFixture<RegistrationhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
