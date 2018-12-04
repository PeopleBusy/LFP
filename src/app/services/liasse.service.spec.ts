import { TestBed, inject } from '@angular/core/testing';

import { LiasseService } from './liasse.service';

describe('LiasseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiasseService]
    });
  });

  it('should be created', inject([LiasseService], (service: LiasseService) => {
    expect(service).toBeTruthy();
  }));
});
