import { TestBed } from '@angular/core/testing';

import { SkinCareProductsService } from './skin-care-products.service';

describe('SkinCareProductsService', () => {
  let service: SkinCareProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkinCareProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
