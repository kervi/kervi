import { TestBed, inject } from '@angular/core/testing';

import { NgxKerviService } from './ngx-kervi.service';

describe('NgxKerviService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxKerviService]
    });
  });

  it('should be created', inject([NgxKerviService], (service: NgxKerviService) => {
    expect(service).toBeTruthy();
  }));
});
