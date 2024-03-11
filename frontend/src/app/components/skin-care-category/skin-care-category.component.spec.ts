import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinCareCategoryComponent } from './skin-care-category.component';

describe('SkinCareCategoryComponent', () => {
  let component: SkinCareCategoryComponent;
  let fixture: ComponentFixture<SkinCareCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkinCareCategoryComponent]
    });
    fixture = TestBed.createComponent(SkinCareCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
