import { TestBed, inject } from '@angular/core/testing';

import { ListdishesService } from './listdishes.service';

describe('ListdishesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListdishesService]
    });
  });

  it('should be created', inject([ListdishesService], (service: ListdishesService) => {
    expect(service).toBeTruthy();
  }));
});
