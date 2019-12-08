import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAwesomeGalleryComponent } from './ngx-awesome-gallery.component';

describe('NgxAwesomeGalleryComponent', () => {
  let component: NgxAwesomeGalleryComponent;
  let fixture: ComponentFixture<NgxAwesomeGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAwesomeGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAwesomeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
