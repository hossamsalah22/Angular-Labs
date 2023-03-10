import { TestBed } from '@angular/core/testing';

import { DepatrmentsService } from './depatrments.service';

describe('DepatrmentsService', () => {
  let service: DepatrmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepatrmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
