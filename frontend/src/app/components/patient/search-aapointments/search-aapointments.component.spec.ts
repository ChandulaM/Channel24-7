import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAapointmentsComponent } from './search-aapointments.component';

describe('SearchAapointmentsComponent', () => {
  let component: SearchAapointmentsComponent;
  let fixture: ComponentFixture<SearchAapointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAapointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAapointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
