import { TestBed } from '@angular/core/testing';

import { FinanceManagerGuard } from './finance-manager.guard';

describe('FinanceManagerGuard', () => {
  let guard: FinanceManagerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FinanceManagerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
