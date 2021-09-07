import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetestsComponent } from './managetests.component';

describe('ManagetestsComponent', () => {
  let component: ManagetestsComponent;
  let fixture: ComponentFixture<ManagetestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagetestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagetestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
