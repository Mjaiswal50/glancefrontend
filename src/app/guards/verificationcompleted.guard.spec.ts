import { TestBed } from '@angular/core/testing';

import { VerificationcompletedGuard } from './verificationcompleted.guard';

describe('VerificationcompletedGuard', () => {
  let guard: VerificationcompletedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerificationcompletedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
