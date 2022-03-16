import { TestBed } from '@angular/core/testing';

import { NoteDetailService } from './note-detail.service';

describe('NoteDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteDetailService = TestBed.get(NoteDetailService);
    expect(service).toBeTruthy();
  });
});
