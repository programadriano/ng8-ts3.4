import { TestBed } from '@angular/core/testing';

import { ExemplonamedparametersService } from './exemplonamedparameters.service';

describe('ExemplonamedparametersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExemplonamedparametersService = TestBed.get(ExemplonamedparametersService);
    expect(service).toBeTruthy();
  });
});
