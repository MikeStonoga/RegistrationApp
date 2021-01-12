import { TestBed } from '@angular/core/testing';

import { MspSnackbarService } from './msp-snackbar.service';

describe('MspSnackbarService', () => {
  let service: MspSnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MspSnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
