import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabAssistantListComponent } from './lab-assistant-list.component';

describe('LabAssistantListComponent', () => {
  let component: LabAssistantListComponent;
  let fixture: ComponentFixture<LabAssistantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabAssistantListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabAssistantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
