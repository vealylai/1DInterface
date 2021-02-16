

// Processing version is here:
// https://github.com/marcelocoelho/Interface1D

// Try to implement serial port like this: 
// http://mactech.sheridanc.on.ca/team/mark-galaszkiewicz/using-p5serialserver/




let displaySize = 30;
let pixelSize = 20;

let playerOne;
let playerTwo;

let target;

let display;
let controller;

let collisionAnimation;

let score;



function setup() {

  createCanvas((displaySize*pixelSize), pixelSize);

  display = new Display(displaySize, pixelSize);  // aggregates our final visual output

  playerOne = new Player(color(255,0,0), parseInt(random(0,displaySize)), displaySize);  // Adding 2 players to the game
  playerTwo = new Player(color(0,0,255), parseInt(random(0,displaySize)), displaySize);

  target = new Player(color(255,255,0), parseInt(random(0,displaySize)), displaySize);              // and one target for players to catch.

  collisionAnimation = new Animation();

  controller = new Controller();

  score = {max:3, winner:color(0,0,0)};

}

function draw() {
  background(0, 0, 0);

  controller.update();
  display.show();

}


