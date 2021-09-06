import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosmanagerListComponent } from './hosmanager-list.component';

describe('HosmanagerListComponent', () => {
  let component: HosmanagerListComponent;
  let fixture: ComponentFixture<HosmanagerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HosmanagerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HosmanagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
