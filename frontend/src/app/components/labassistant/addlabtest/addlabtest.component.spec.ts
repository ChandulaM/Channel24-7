import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlabtestComponent } from './addlabtest.component';

describe('AddlabtestComponent', () => {
  let component: AddlabtestComponent;
  let fixture: ComponentFixture<AddlabtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlabtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlabtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
