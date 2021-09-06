import { TestBed } from '@angular/core/testing';

import { HospitalManagerService } from './hospital-manager.service';

describe('HospitalManagerService', () => {
  let service: HospitalManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
