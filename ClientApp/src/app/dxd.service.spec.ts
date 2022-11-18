import { TestBed } from '@angular/core/testing';

import { DxdService } from './dxd.service';

describe('DxdService', () => {
  let service: DxdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DxdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
