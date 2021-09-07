import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageappoinemtnsComponent } from './manageappoinemtns.component';

describe('ManageappoinemtnsComponent', () => {
  let component: ManageappoinemtnsComponent;
  let fixture: ComponentFixture<ManageappoinemtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageappoinemtnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageappoinemtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
