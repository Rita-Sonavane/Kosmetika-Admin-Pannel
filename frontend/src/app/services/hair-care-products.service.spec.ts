import { TestBed } from '@angular/core/testing';

import { HairCareProductsService } from './hair-care-products.service';

describe('HairCareProductsService', () => {
  let service: HairCareProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HairCareProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
