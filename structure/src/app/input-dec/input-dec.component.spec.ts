import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDecComponent } from './input-dec.component';

describe('InputDecComponent', () => {
  let component: InputDecComponent;
  let fixture: ComponentFixture<InputDecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
