import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablateComponent } from './tablate.component';

describe('TablateComponent', () => {
  let component: TablateComponent;
  let fixture: ComponentFixture<TablateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
