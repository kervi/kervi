import { TestBed } from '@angular/core/testing';

import { NgxKerviComponentsService } from './ngx-kervi-components.service';

describe('NgxKerviComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxKerviComponentsService = TestBed.get(NgxKerviComponentsService);
    expect(service).toBeTruthy();
  });
});
