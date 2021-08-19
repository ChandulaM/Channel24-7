import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportdeliveryComponent } from './reportdelivery.component';

describe('ReportdeliveryComponent', () => {
  let component: ReportdeliveryComponent;
  let fixture: ComponentFixture<ReportdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportdeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
