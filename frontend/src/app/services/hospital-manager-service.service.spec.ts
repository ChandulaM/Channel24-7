import { TestBed } from '@angular/core/testing';

import { HospitalManagerServiceService } from './hospital-manager-service.service';

describe('HospitalManagerServiceService', () => {
  let service: HospitalManagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalManagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
