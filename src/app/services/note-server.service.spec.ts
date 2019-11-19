import { TestBed } from '@angular/core/testing';

import { NoteServerService } from './note-server.service';

describe('NoteServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteServerService = TestBed.get(NoteServerService);
    expect(service).toBeTruthy();
  });
});
