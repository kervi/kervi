/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KerviService } from './kervi.service';

describe('Service: KerviService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KerviService]
    });
  });

  it('should ...', inject([KerviService], (service: KerviService) => {
    expect(service).toBeTruthy();
  }));
});
