import { TestBed, inject } from '@angular/core/testing';

import { SearchservService } from './searchserv.service';

describe('SearchservService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchservService]
    });
  });

  it('should be created', inject([SearchservService], (service: SearchservService) => {
    expect(service).toBeTruthy();
  }));
});
