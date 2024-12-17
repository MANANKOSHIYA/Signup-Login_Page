import { TestBed } from '@angular/core/testing';

import { OtpgeneratorService } from './otpgenerator.service';

describe('OtpgeneratorService', () => {
  let service: OtpgeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtpgeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
