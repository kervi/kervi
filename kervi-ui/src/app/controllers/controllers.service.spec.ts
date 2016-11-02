/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ControllersService } from './controllers.service';

describe('Service: Controllers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControllersService]
    });
  });

  it('should ...', inject([ControllersService], (service: ControllersService) => {
    expect(service).toBeTruthy();
  }));
});
