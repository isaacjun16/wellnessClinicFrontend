import { TestBed, inject } from '@angular/core/testing';

import { BservicesService } from './bservices.service';

describe('BservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BservicesService]
    });
  });

  it('should be created', inject([BservicesService], (service: BservicesService) => {
    expect(service).toBeTruthy();
  }));
});
