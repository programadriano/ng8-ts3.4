import { TestBed } from '@angular/core/testing';

import { ExemplocostassertionsService } from './exemplocostassertions.service';

describe('ExemplocostassertionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExemplocostassertionsService = TestBed.get(ExemplocostassertionsService);
    expect(service).toBeTruthy();
  });
});
