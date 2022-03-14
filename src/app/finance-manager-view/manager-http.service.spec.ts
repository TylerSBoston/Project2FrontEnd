import { TestBed } from '@angular/core/testing';

import { ManagerHttpService } from './manager-http.service';

describe('ManagerHttpReimbursementService', () => {
  let service: ManagerHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
