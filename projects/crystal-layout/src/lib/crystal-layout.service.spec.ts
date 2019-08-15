import { TestBed } from '@angular/core/testing';

import { CrystalLayoutService } from './crystal-layout.service';

describe('CrystalLayoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrystalLayoutService = TestBed.get(CrystalLayoutService);
    expect(service).toBeTruthy();
  });
});
