import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabAssistantRegistrationComponent } from './lab-assistant-registration.component';

describe('LabAssistantRegistrationComponent', () => {
  let component: LabAssistantRegistrationComponent;
  let fixture: ComponentFixture<LabAssistantRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabAssistantRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabAssistantRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
