import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIndividualProductComponent } from './show-individual-product.component';

describe('ShowIndividualProductComponent', () => {
  let component: ShowIndividualProductComponent;
  let fixture: ComponentFixture<ShowIndividualProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowIndividualProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIndividualProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
