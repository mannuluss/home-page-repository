/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocalService } from './Local.service';

describe('Service: LocalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalService]
    });
  });

  it('should ...', inject([LocalService], (service: LocalServiceService) => {
    expect(service).toBeTruthy();
  }));
});
