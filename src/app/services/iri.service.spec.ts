import { TestBed } from '@angular/core/testing';

import { IriService } from './iri.service';

describe('IriService', () => {
  let service: IriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
