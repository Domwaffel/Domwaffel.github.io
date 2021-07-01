const width = 1000;
const height = 600;

const px = 50;
let py = height/2;
let pv = 10;

const maxOffset = 150;
const obstV = Math.floor(width/300);
const obstGap = 150;
const obstCount = 7;
let obstX = new Array(obstCount);
let obstY = new Array(obstCount);

let score = 0;

let passiveMode = true;
let botMode = false;

function setup() {
  frameRate(30);
  createCanvas(width, height);
}

function draw() {

  // runs when the game first starts or player dies.
  if(passiveMode){
    background(0);

    //menu message
    fill(0, 255, 0);
    textSize(40);
    text("W drücken um zu starten", width/2 - 200, height / 2 +20);

    //print the Score
    fill(0, 255, 0);
    textSize(50);
    text(score, width/2, 70);

    //quit the menu
    if(keyIsDown(87)){
      initGame();
      passiveMode = false;
    }

  }else{
    background(0);

    updatePlayer();
    updateObstacles();
    updateColisions();

    //drawing the player
    fill(255, 255, 0);
    ellipse(px, py, 20, 20);

    //drawing obstacles
    fill(255, 255, 255);
    for (let i = 0; i <= obstCount; i++){
      rect(obstX[i], obstY[i] - (height + obstGap), 30, height)
      rect(obstX[i], obstY[i], 30, height)
    }

    //print the Score
    fill(0, 255, 0);
    textSize(50);
    text(score, width/2, 70);

    /*
    //grid for testing purposes
    //!slows the game down a lot!

    fill(255, 255, 255);
    for(let i = 0; i < width/10; i ++ ){
    for(let j = 0; j < height/10; j++){
    ellipse(i*10, j*10, 2, 2);
  }
}
*/
}
}

function updatePlayer(){
  if (!botMode){
    if(keyIsDown(87)){
      if(pv >= 10){
        pv = pv + 1;
      }else{
        pv = 10;
      }
    }
  }
  pv = pv - 1;
  py = py - pv;
}

function updateObstacles(){
  for (let i = 0; i <= obstCount; i++){
    if(obstX[i] <= -30){
      obstX[i] = obstX[i] + 1000 + width/obstCount;
    }
    obstX[i] = obstX[i] - obstV;
  }
}

function updateColisions(){
  //loop every obstacle
  for (let i = 0; i <= obstCount; i++){

    //look if players x is nearby
    if(px+10 >= obstX[i] - 15 && px-10 <= obstX[i]+15){

      //look if players y is inside the gap
      if(py + 10 <= obstY[i] && py -10 >= obstY[i]-obstGap){

        //check for a line with the width obstV to only update the score once.
        if(px >= obstX[i] && px < obstX[i] + obstV){

          //updating score
          score = score + 1;
        }
      }else{
        // hit a obstacle, start the menu screen
        passiveMode = true;
      }
    }
  }

  //colision with the floor / celing
  if(py >= height || py <= 0){
    // hit the floor / celing, start the menu screen
    passiveMode = true;
  }
}

function initGame(){
  //reinitiate Obstacles
  for (let i = 0; i <= obstCount; i++){
    obstX[i] = Math.floor(width+(width/obstCount*i));
    obstY[i] = height/2 + Math.floor(Math.random()*(maxOffset*2+1));
  }
  score = 0;
  py = height/2;
  pv = 10;
}


/*

// Der naive versuch das Objektorientiert zu schaffen.
// gescheitert

let width = 600;
let height = 400;

let px = 20;
let py = height/2;
let pv = 10;

let obstCount = 5;
let obst = new Array(obstCount);
console.log(obst.length);
obst.pop();
console.log(obst.length);

function setup() {
frameRate(30);
createCanvas(width, height);

for(let i = 0; i < obstCount; i++){
obst[i] = new Obstacle();
}
obst.forEach((item, i) => {
obst[i].init(width + width / obstCount * (i+1));
});

}

function draw() {
background(0);

//updating gameobjects
updatePlayer();
updateObstacles();

obst.forEach((item, i) => {
obst[i].draw;
});


fill(255, 255, 255);
//rect(50, 100-height/2, 20, height/2);


//drawing the player
fill(255, 255, 0);
ellipse(px, py, 10, 10);

//grid for testing purposes
fill(255, 255, 255);
for(let i = 0; i < width/10; i ++ ){
for(let j = 0; j < height/10; j++){
ellipse(i*10, j*10, 2, 2);
}
}
}

function updateObstacles(){
if (obst[0].X <= 30){
obst.shift();
}
if(obst.length < obstCount){
if(obst[obstCount-1].X <= width/10*9){
obst[obstCount] = Obstacle(height/2);
}
}
obst.forEach((item, i) => {
obst[i].update;
});
}

function updatePlayer(){
pv = pv-1;
py = py - pv;
}

class Obstacle{

init(y_position){
this.ypos = y_position;
this.xpos = width - 20;
}

update(){
this.xpos = this.xpos - 1;
}

get X(){
return this.xpos;
}

draw(){
fill(255, 255, 255);
rect(this.xpos, this.ypos-width/2, 30, width/2);
}
}
*/
