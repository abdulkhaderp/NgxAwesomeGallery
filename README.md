# NgxAwesomeGallery

A simple ,lightweight ,Easy to integrate image gallery in Angular.

#Tested in Angular 7.

#  Online Demo
http://abdulkhaderp.github.io/awsomeGalleryDemo/index.html

# Installation
npm i ngx-awesome-gallery

## Usage
1. Import NgxAwesomeGalleryModule in app.module.ts, Add it in imports array : 

       import {NgxAwesomeGalleryModule} from 'ngx-awesome-gallery';
       ..
       imports: [
          .. , NgxAwesomeGalleryModule
       ]

2. Use the library in the component html  :  

            <div class="your_container_class">
                <lib-NgxAwesomeGallery [source]=imageData [conf]=conf></lib-NgxAwesomeGallery>
            </div>

3. Define width and height with CSS class, "your_container_class". The gallery will take 100% height and width of the DIV wrapper.

4. Provide required data (source and conf) in component .ts file. Source is madatory, conf is optional.
  
    imageData = [{
        link:"../assets/images/first.jpg", //Path to image file.
        description:"Sample description 1"  //Optional description text. 
      },
      ..
    ]
    
      conf = {
          "transitionStyle":"scale", 
          "description" : true,  
          "fullWidth" : false
      }
   
conf properties in detail:
            
 ##transitionStyle

 - Define the image transition css effect.
 - Default: 'active'  
 - Available Options: scale, swing , tilt  
                                      
 ##description
  
 - Decide show/hide the optional description text.
 - Default: false  
 - Expected: true or false  
                      
                        
  ##fullWidth
 - If set true, the image will take 100% width of the wrapper DIV. Else, image will be kept as of it's original width. 
 - Default: false 
 - Expected: true or false  
 
 
 

