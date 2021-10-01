import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePgLoggedComponent } from './home-pg-logged.component';

describe('HomePgLoggedComponent', () => {
  let component: HomePgLoggedComponent;
  let fixture: ComponentFixture<HomePgLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePgLoggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePgLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
