import { TestBed } from '@angular/core/testing';

import { MspDialogService } from './msp-dialog.service';

describe('MspDialogService', () => {
  let service: MspDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MspDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
