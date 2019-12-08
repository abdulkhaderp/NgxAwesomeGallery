import { Component, OnInit,Input,ElementRef, ViewChild } from '@angular/core';
import { faAngleDoubleLeft,faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lib-NgxAwesomeGallery',
  templateUrl: './ngx-awesome-gallery.component.html',
  styleUrls: ['./ngx-awesome-gallery.component.css']
})
export class NgxAwesomeGalleryComponent implements OnInit {
  @Input() source : any;
  @Input() conf : {};
  imageCount : number;
  index : number = 0;
  faLeft = faAngleDoubleLeft;
  faRight = faAngleDoubleRight;
  @ViewChild("awesomeGallery") galleryView: ElementRef;
  @ViewChild("descBlock") descView: ElementRef;
  defaultConf={
    "transitionStyle" : "active",
    "description" : false,
    "fullWidth" : false
  };
  navClassMap = {
    "active" : ["active","active"],
    "tilt"   : ["tilt-in-fwd-tr","tilt-in-fwd-tl"],
    "swing"  : ["swing-in-right-fwd","swing-in-left-fwd"],
    "scale"  : ["scale-up-hor-right","scale-up-hor-left"]
  };
  constructor() { }

  ngOnInit() {
    this.imageCount = this.source.length;
    this.updateDefaultConf();
  }
 
  get imageURL(){
    return this.source[this.index].link;
  }
  get imageDesc(){
    return this.source[this.index].description;
  }
  
  navigateToRight(){
    this.galleryView.nativeElement.className = "image_wrapper";
    let transition = this.defaultConf.transitionStyle;
    let transClass = this.navClassMap[transition][1];
    this.index = (this.index < this.imageCount-1) ? (this.index+1) : 0 ;
    this.animateImageTransition(transClass);
  }
  navigateToLeft(){
    this.galleryView.nativeElement.className = "image_wrapper";
    let transition = this.defaultConf.transitionStyle;
    let transClass = this.navClassMap[transition][0];
    this.index =  (this.index < 1) ? (this.imageCount-1) : (this.index-1);
    this.animateImageTransition(transClass);
  }
  animateImageTransition(className){  
    setTimeout(()=>{  
      this.galleryView.nativeElement.classList.add(className);
    },100)
  
  }
 
  updateDefaultConf(){
    if(this.conf && typeof this.conf == "object"){
        Object.keys(this.conf).map((i)=> { 
          this.defaultConf[i] = this.conf[i];
        }); 
    }
  }
}

