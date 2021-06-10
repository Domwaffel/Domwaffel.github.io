//declaring game variables
const fps = 30;
const canvasX = 800;
const canvasY = 600;
let gameEnded = false;

//declaring Ball variables
let bX = 400;
let bY = 300;
let bSpeedX = 10;
let bSpeedY = 0;
let pongs = 0;

//declaring Player variables
const pOffset = 30;
const p1x = pOffset;
let p1y = 300;
let p1score = 0;
const p2x = canvasX - pOffset;
let p2y = 300;
let p2score = 0;

function setup(){
  // declaring canvas size
  createCanvas(canvasX, canvasY);
  //declaring Frames per Second
  frameRate(fps);
}

function draw(){
  //resetting canvas
  background(0);

  //calling game functions
  checkKeys();
  //checking if somebody won
  if(!gameEnded){
    calculateBall();
  }
  //drawing all objects
  drawObjects();
}

function drawObjects(){
  //drawing main screen if not playing
  if(gameEnded){
    setTimeout(function(){
      resetVariables();
    }, 3000);
  }

  // draw ball
  fill(255, 0, 0);
  ellipse(bX, bY, 10, 10);;

  //draw Players
  rectMode(CENTER);
  fill(0, 255, 0);

  // draw Player1
  rect(p1x, p1y, 20, 100);

  // draw Player2
  rect(p2x, p2y, 20, 100);

  //draw Score
  fill(255, 255, 255);
  textSize(32);
  text(p1score, canvasX/2 - 50, 50);
  text(":", canvasX/2 + 3, 50);
  text(p2score, canvasX/2 + 50, 50);
  text(pongs, canvasX/2, 100);
}

function resetVariables(){
  //resetting Ball variables
  bX = 400;
  bY = 300;
  bSpeedX = 10;
  bSpeedY = 0;
  pongs = 0;

  //resetting Player variables
  p1y = 300;
  p2y = 300;

  //game will start again
  gameEnded = false;
}

function checkKeys() {
  if(keyIsDown(UP_ARROW)){
    if(p2y > 50 && p2y <= 550){
      p2y = p2y - 10;
    }
  }
  if(keyIsDown(DOWN_ARROW)){
    if(p2y >= 50 && p2y < 550){
      p2y = p2y + 10;
    }
  }
  if(keyIsDown(87)){
    if(p1y > 50 && p1y <= 550){
      p1y = p1y - 10;
    }
  }
  if(keyIsDown(83)){
    if(p1y >= 50 && p1y < 550){
      p1y = p1y + 10;
    }
  }
}

function calculateBall(){
  //collision Player 1
  //detect if the ball cold hit the player plank
  if(bX <= pOffset + 10){
    //detect if ball hits the player plank
    if(bY <= p1y + 50 && bY >= p1y -50){
      //inversing ball speed on hit
      bSpeedX = bSpeedX * -1;
      pongs = pongs +1;
    }
  }

  //collision Player 2
  //detect if the ball cold hit the player plank
  if(bX >= (canvasX - pOffset) - 10){
    //detect if ball hits the player plank
    if(bY <= p2y + 50 && bY >= p2y -50){
      //inversing ball speed on hit
      bSpeedX = bSpeedX * -1;
      pongs = pongs + 1;
    }
  }

  //Win detection
  //Player 1 lost
  if(bX <= 10){
    p2score = p2score + 1;
    gameEnded = true;
  }
  //Player 2 lost
  if(bX >= canvasX - 10){
    p1score = p1score +1;
    gameEnded = true;
  }

  //moving ball
  bX = bX + bSpeedX;
  bY = bY + bSpeedY;
}
