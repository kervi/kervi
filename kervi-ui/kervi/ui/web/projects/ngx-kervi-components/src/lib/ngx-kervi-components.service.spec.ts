import { TestBed, inject } from '@angular/core/testing';

import { NgxKerviComponentsService } from './ngx-kervi-components.service';

describe('NgxKerviComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxKerviComponentsService]
    });
  });

  it('should be created', inject([NgxKerviComponentsService], (service: NgxKerviComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
