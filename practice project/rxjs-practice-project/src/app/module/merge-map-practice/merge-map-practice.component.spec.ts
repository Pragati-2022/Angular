import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapPracticeComponent } from './merge-map-practice.component';

describe('MergeMapPracticeComponent', () => {
  let component: MergeMapPracticeComponent;
  let fixture: ComponentFixture<MergeMapPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeMapPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeMapPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
