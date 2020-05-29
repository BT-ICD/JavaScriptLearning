import { TestBed } from '@angular/core/testing';

import { ServerTypeResolverService } from './server-type-resolver.service';

describe('ServerTypeResolverService', () => {
  let service: ServerTypeResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerTypeResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
