import { TestBed, inject } from '@angular/core/testing';

import { KerviJsService } from './kervi-js.service';

describe('KerviJsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KerviJsService]
    });
  });

  it('should be created', inject([KerviJsService], (service: KerviJsService) => {
    expect(service).toBeTruthy();
  }));
});
