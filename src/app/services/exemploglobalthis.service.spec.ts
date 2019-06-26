import { TestBed } from '@angular/core/testing';

import { ExemploglobalthisService } from './exemploglobalthis.service';

describe('ExemploglobalthisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExemploglobalthisService = TestBed.get(ExemploglobalthisService);
    expect(service).toBeTruthy();
  });
});
