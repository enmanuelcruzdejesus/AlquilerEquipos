import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreturnedProductRentComponent } from './unreturned-product-rent.component';

describe('UnreturnedProductRentComponent', () => {
  let component: UnreturnedProductRentComponent;
  let fixture: ComponentFixture<UnreturnedProductRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnreturnedProductRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreturnedProductRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
