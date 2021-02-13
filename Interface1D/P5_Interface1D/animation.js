

class Animation {


    constructor() {
 
        this.numberOfFrames = 30;    // how many frames the animation has //NOTE: rename this totalFrames
        this.pixels = 30;            // how wide the animation is  //NOTE: pull this info from main sketch
        
        // Multidimensional arrays in javascript are a bit silly
        // I recommend you watch this: https://www.youtube.com/watch?v=OTNpiLUSiB4
        this.animation = new Array(this.numberOfFrames);
        this.currentFrameCount = -1;       

        // for tracking animation location
        let k = 0;

        // build up the array here 
        for (let i = 0; i < this.numberOfFrames; i++) {
            
            // since javascript can't initialize a 2D array, we need to do this
            this.animation[i] = new Array(this.pixels);     
            
            // populate array with empty/black pixels
            for (let j = 0; j < this.pixels; j++) {
                this.animation[i][j] = color(0, 0, 0);
            }
        
        // the populate array with animation
        let center = parseInt(this.pixels/2);
        
        // animate to the right
        this.animation[i][k+center] = color(255, 255, 0);

        // animate to the left
        this.animation[i][center-k] = color(255, 255, 0);
        
        // increment animation pixel
        k = k+1;
    }

    }

    currentFrame() {

        this.currentFrameCount = this.currentFrameCount + 1;

        if (this.currentFrameCount >= this.numberOfFrames) {
            this.currentFrameCount = 0;
        }

        return this.currentFrameCount;
    }

    grabPixel(_index) {

        return this.animation[this.currentFrameCount][_index];
    }

}
