import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabAssistantAcceptComponent } from './lab-assistant-accept.component';

describe('LabAssistantAcceptComponent', () => {
  let component: LabAssistantAcceptComponent;
  let fixture: ComponentFixture<LabAssistantAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabAssistantAcceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabAssistantAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
