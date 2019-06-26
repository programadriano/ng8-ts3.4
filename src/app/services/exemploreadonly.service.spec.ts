import { TestBed } from '@angular/core/testing';

import { ExemploreadonlyService } from './exemploreadonly.service';

describe('ExemploreadonlyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExemploreadonlyService = TestBed.get(ExemploreadonlyService);
    expect(service).toBeTruthy();
  });
});
