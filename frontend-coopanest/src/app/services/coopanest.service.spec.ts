import { TestBed } from '@angular/core/testing';

import { CoopanestService } from './coopanest.service';

describe('CoopanestService', () => {
  let service: CoopanestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoopanestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
