import { TestBed, inject } from '@angular/core/testing';

import { KerviPrimeNGService } from './kervi-prime-ng.service';

describe('KerviPrimeNGService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KerviPrimeNGService]
    });
  });

  it('should be created', inject([KerviPrimeNGService], (service: KerviPrimeNGService) => {
    expect(service).toBeTruthy();
  }));
});
