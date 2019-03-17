import { TestBed, inject } from '@angular/core/testing';

import { KerviMaterialService } from './kervi-material.service';

describe('KerviMaterialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KerviMaterialService]
    });
  });

  it('should be created', inject([KerviMaterialService], (service: KerviMaterialService) => {
    expect(service).toBeTruthy();
  }));
});
