import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageresultsComponent } from './manageresults.component';

describe('ManageresultsComponent', () => {
  let component: ManageresultsComponent;
  let fixture: ComponentFixture<ManageresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
