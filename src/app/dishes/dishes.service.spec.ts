import { TestBed, inject } from '@angular/core/testing';

import { DishesService } from './dishes.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('DishesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishesService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([DishesService], (service: DishesService) => {
    expect(service).toBeTruthy();
  }));
});
