import { TestBed } from '@angular/core/testing';

import { MspListService } from './msp-list.service';

describe('MspListService', () => {
  let service: MspListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MspListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
