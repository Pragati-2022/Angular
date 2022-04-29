import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePracticeComponent } from './share-practice.component';

describe('SharePracticeComponent', () => {
  let component: SharePracticeComponent;
  let fixture: ComponentFixture<SharePracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharePracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
