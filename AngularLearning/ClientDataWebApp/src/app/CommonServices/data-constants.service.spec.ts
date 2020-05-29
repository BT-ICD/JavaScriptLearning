import { TestBed } from '@angular/core/testing';

import { DataConstantsService } from './data-constants.service';

describe('DataConstantsService', () => {
  let service: DataConstantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataConstantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
