import { NgModule } from '@angular/core';
import { NgxAwesomeGalleryComponent } from './ngx-awesome-gallery.component';
import { CommonModule } from '@angular/common'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [NgxAwesomeGalleryComponent],
  imports: [ CommonModule,FontAwesomeModule
  ],
  exports: [NgxAwesomeGalleryComponent]
})
export class NgxAwesomeGalleryModule { }