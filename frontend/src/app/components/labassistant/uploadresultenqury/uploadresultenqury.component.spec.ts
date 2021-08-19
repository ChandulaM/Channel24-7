import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadresultenquryComponent } from './uploadresultenqury.component';

describe('UploadresultenquryComponent', () => {
  let component: UploadresultenquryComponent;
  let fixture: ComponentFixture<UploadresultenquryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadresultenquryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadresultenquryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
