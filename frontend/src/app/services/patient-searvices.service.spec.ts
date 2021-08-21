import { TestBed } from '@angular/core/testing';

import { PatientSearvicesService } from './patient-searvices.service';

describe('PatientSearvicesService', () => {
  let service: PatientSearvicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientSearvicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
