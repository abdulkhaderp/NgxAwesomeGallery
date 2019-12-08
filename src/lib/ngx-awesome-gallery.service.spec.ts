import { TestBed } from '@angular/core/testing';

import { NgxAwesomeGalleryService } from './ngx-awesome-gallery.service';

describe('NgxAwesomeGalleryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAwesomeGalleryService = TestBed.get(NgxAwesomeGalleryService);
    expect(service).toBeTruthy();
  });
});
