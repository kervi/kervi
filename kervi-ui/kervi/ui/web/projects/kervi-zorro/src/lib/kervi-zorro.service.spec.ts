import { TestBed, inject } from '@angular/core/testing';

import { KerviZorroService } from './kervi-zorro.service';

describe('KerviZorroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KerviZorroService]
    });
  });

  it('should be created', inject([KerviZorroService], (service: KerviZorroService) => {
    expect(service).toBeTruthy();
  }));
});
