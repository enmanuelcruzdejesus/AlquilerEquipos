import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageproductrentbydateComponent } from './averageproductrentbydate.component';

describe('AverageproductrentbydateComponent', () => {
  let component: AverageproductrentbydateComponent;
  let fixture: ComponentFixture<AverageproductrentbydateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageproductrentbydateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageproductrentbydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
