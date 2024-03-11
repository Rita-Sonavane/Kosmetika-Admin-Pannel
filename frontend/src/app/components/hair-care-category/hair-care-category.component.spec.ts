import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairCareCategoryComponent } from './hair-care-category.component';

describe('HairCareCategoryComponent', () => {
  let component: HairCareCategoryComponent;
  let fixture: ComponentFixture<HairCareCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HairCareCategoryComponent]
    });
    fixture = TestBed.createComponent(HairCareCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
