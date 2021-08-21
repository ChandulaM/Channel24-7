import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosmanagerAcceptComponent } from './hosmanager-accept.component';

describe('HosmanagerAcceptComponent', () => {
  let component: HosmanagerAcceptComponent;
  let fixture: ComponentFixture<HosmanagerAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HosmanagerAcceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HosmanagerAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
