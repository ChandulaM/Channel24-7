import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAppoinment1Component } from './search-appoinment1.component';

describe('SearchAppoinment1Component', () => {
  let component: SearchAppoinment1Component;
  let fixture: ComponentFixture<SearchAppoinment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAppoinment1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAppoinment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
