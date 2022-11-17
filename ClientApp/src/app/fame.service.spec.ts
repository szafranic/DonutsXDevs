import { TestBed } from '@angular/core/testing';

import { FameService } from './fame.service';

describe('FameService', () => {
  let service: FameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
