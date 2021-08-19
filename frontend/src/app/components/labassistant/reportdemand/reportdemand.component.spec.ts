import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportdemandComponent } from './reportdemand.component';

describe('ReportdemandComponent', () => {
  let component: ReportdemandComponent;
  let fixture: ComponentFixture<ReportdemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportdemandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportdemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
