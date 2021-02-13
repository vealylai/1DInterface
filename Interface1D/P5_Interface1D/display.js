

class Display {

    constructor(_displaySize, _pixelSize) {
  
      this.displaySize = _displaySize;
      this.pixelSize = _pixelSize;
      this.initColor = color(0, 0, 0);      // start empty
      this.displayBuffer = [];

      for(let i = 0; i < this.displaySize; i++){
        this.displayBuffer[i] = this.initColor;
      }
  
    }
  
     // Color a specific pixel in the buffer
    setPixel(  _index,  _color) {
        this.displayBuffer[_index]  = _color;
    }
  

    // Color all pixels in the buffer
    setAllPixels( _color) {
      
      for(let i = 0; i < displaySize; i++) { 
        display.setPixel(i, _color); 
      }
    }


    // Now write it to screen
    show() {
      for (let i =0; i< this.displaySize; i++) {
        fill(this.displayBuffer[i]);
        rect(i*this.pixelSize,0,this.pixelSize,this.pixelSize);
      }
    }


    
    // Let's empty everything before we start adding things to it again
    clear() {

        for(let i = 0; i < this.displaySize; i++) {    
        this.displayBuffer[i] = this.initColor; 
        }
    }
    

  }