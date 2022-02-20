import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEdiComponent } from './product-edi.component';

describe('ProductEdiComponent', () => {
  let component: ProductEdiComponent;
  let fixture: ComponentFixture<ProductEdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
