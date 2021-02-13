


class Controller {

    constructor() {
        this.gameState = "PLAY";

    }
    

    update() {

        // STATE MACHINE ////////////////////////////////////////////////
        // This is where your game logic lives
        /////////////////////////////////////////////////////////////////
        switch(this.gameState) {

            case "PLAY":

                

                // clear screen at frame rate so we always start fresh      
                display.clear();
            
                // show all players in the right place, by adding them to display buffer
                display.setPixel(playerOne.position, playerOne.playerColor);
                display.setPixel(playerTwo.position, playerTwo.playerColor);
                

                // now add the target
                display.setPixel(target.position, target.playerColor);

                
                // check if player has caught target
                if (playerOne.position == target.position)  {
                    playerOne.score++;
                    this.gameState = "COLLISION";
                }
                
                // check if other player has caught target        
                if (playerTwo.position == target.position)  {
                    playerTwo.score++;
                    this.gameState = "COLLISION";
                }
                    
                // NOTE: if you have lots of players or targets, you could consider adding them to an array of objects
                // This page explains how: https://processing.org/tutorials/arrays/

                break;

            // This state is used to play an animation, after a target has been caught by a player 
            case "COLLISION":
                
                 // clear screen at frame rate so we always start fresh      
                 display.clear();

                // play explosion animation one frame at a time.
                // first figure out what frame to show
                let frameToShow = collisionAnimation.currentFrame();    // this grabs number of current frame and increments it 
                
                // NOTE: REPLACE THIS WITH FUNCTION THAT PULLS THE ENTIRE FRAME WITHOUT LOOP 
                // then grab every pixel of frame and put it into the display buffer
                for(let i = 0; i < collisionAnimation.pixels; i++) {
                    display.setPixel(i,collisionAnimation.animation[frameToShow][i]);
                    //print(frameToShow);
                    
                }

                //check if animation is done and we should move on to another state
                if (frameToShow == collisionAnimation.animation.length-1)  {
                    
                    // We've hit score max, this player wins
                    if (playerOne.score >= score.max) {
                        score.winner = playerOne.playerColor;
                        this.gameState = "SCORE";
                    
                    // We've hit score max, this player wins
                    } else if (playerTwo.score >= score.max) {
                        score.winner = playerTwo.playerColor;
                        this.gameState = "SCORE";

                    // We haven't hit the max score yet, keep playing    
                    } else {
                        target.position = parseInt(random(0,displaySize));
                        this.gameState = "PLAY";
                    }
                } 

                break;

            // Game is over. Show winner and clean everything up so we can start a new game
            case "SCORE":       
            
                // reset everyone
                playerOne.score = 0;
                playerTwo.score = 0;

                // put the target somewhere else, so we don't restart the game with player and target in the same place
                target.position = parseInt(random(1,displaySize));

                //light up w winner color by populating all pixels in buffer with their color
                display.setAllPixels(score.winner);                    

                break;

            // Not used, it's here just for code compliance
            default:
                break;
        }
    }
}


function keyPressed() {

    if (key == 'A' || key == 'a') {
        playerOne.move(-1);
      }
    
      if (key == 'D' || key == 'd') {
        playerOne.move(1);
      }    

      if (key == 'J' || key == 'j') {
        playerTwo.move(-1);
      }
    
      if (key == 'L' || key == 'l') {
        playerTwo.move(1);
      }
    
      if (key == 'R' || key == 'r') {
        controller.gameState = "PLAY";
        
      }

  }