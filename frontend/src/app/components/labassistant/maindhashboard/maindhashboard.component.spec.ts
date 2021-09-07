import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindhashboardComponent } from './maindhashboard.component';

describe('MaindhashboardComponent', () => {
  let component: MaindhashboardComponent;
  let fixture: ComponentFixture<MaindhashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaindhashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindhashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
