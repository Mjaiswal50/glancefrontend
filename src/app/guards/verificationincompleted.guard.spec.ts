import { TestBed } from '@angular/core/testing';

import { VerificationincompletedGuard } from './verificationincompleted.guard';

describe('VerificationincompletedGuard', () => {
  let guard: VerificationincompletedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerificationincompletedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
