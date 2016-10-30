/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConnectedService } from './connected.service';

describe('Service: Connected', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectedService]
    });
  });

  it('should ...', inject([ConnectedService], (service: ConnectedService) => {
    expect(service).toBeTruthy();
  }));
});
