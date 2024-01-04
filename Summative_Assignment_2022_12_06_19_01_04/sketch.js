//Pareesh Madan
//3/30/2022
//Summative Mt. Everest Landscape

//INSTRUCTIONS
//Left click on sun to change from day to night (and vise versa)
//Move character with left/right arrow keys
//Jump with spacebar
//Move and jump on platforms to reach the flag!
//The character can ride clouds (but seeps through)
//Jump on eagle for a suprise.

//SELF ASSESEMENT

//Knowledge: 8/8
//4 different shapes: circle, square, triangle, quadralateral (trapezoid)
//8 different colours: Yellow, White, Grey, Pink, Black, Purple, Red, Blue
//2 custom shape: star & star trail (at night)

//Application: 12/12
//12 different elements: snow, mountain, mountain design, platforms, sun, character, clouds, eagle, flag, timer, background, "win" message
//Nice apperance

//Thinking: 8/8
//2 elements are alive: eagle, cloud
//User mouse control (click on sun)
//User keyboard control (move & jump with character), (r to restart)

//Communication: 8/8
//Many comments on draw command
//Comments on all loops ands if's
//Prompts/Easy to use: (Instructions & "Reach the Flag", "r to restart")
//Has header

//image variables
let img1;
let imgX1 = 40;
let imgY1 = 500;
let ysp = 0;
let img2;
let imgX2 = 500;
let imgY2 = 600;

let img3;
let imgX3 = 295;
let imgY3 = 20;

let img4;
let imgX4 = 600;
let imgY4 = 50;

//sun variables
let sunX = 50;
let sunY = 400;

let winning = false;

let Peng;

//player variables
x = 50;
y = 580;

function setup() {
  //load canvas
  createCanvas(600, 600);
  //load images
  // img1 = loadImage("cloud.png");
  // img2 = loadImage("cloud.png");
  // img3 = loadImage("flag.png");
  // img4 = loadImage("eagle.png");
  peng = loadImage("/Users/pareeshmadan/Documents/Penguin-Climb/Summative_Assignment_2022_12_06_19_01_04/peng.png");
}

function draw() {
  //create pink (sunset) background
  background(227, 154, 151);

  //if the sun's Y cord is at 100, change the background to black (night)
  if (sunY == 100) {
    fill("white");
    background(0);
    fill(255,255,0)
    //star shape
    
    stroke(0)
    beginShape()
  vertex(600,300)
  vertex(605,270)

  vertex(70,260)
  vertex(70,250)
  vertex(90,290)
  endShape()
  beginShape()
  vertex(50,300)
  vertex(55,270)
  vertex(40, 250)
  vertex(60, 250)
  vertex(70, 230)
  vertex(80, 250)
  vertex(100, 250)
  vertex(90,270)
  vertex(100,300)
  vertex(70,280)
  endShape()
    
  }
  //create yellow sun
  fill(255, 255, 0);
  circle(sunX, sunY, 50);
  //draw mountain
  fill(200);
  stroke(255);
  triangle(0, 600, 300, 50, 600, 600);
  //draw 150 lines from base of mountain to peak (for design)
  for (let j = 1; j <= 600; j += 4) {
    stroke(0);
    line(j, 600, 300, 50);
  }
  //triangle (snowy peak) coords
  x1 = 270;
  x2 = 280;
  x3 = 290;

  y1 = 105;
  y2 = 125;
  y3 = 105;
  //draw 5 triangles
  for (let i = 1; i <= 5; i++) {
    fill(255);
    stroke(255);
    triangle(x1, y1, x2, y2, x3, y3);
    x1 += 10;
    x2 += 10;
    x3 += 10;
  }
  //draw triangle to fill gap in peak
  triangle(270, 105, 300, 50, 330, 105);

  //platforms for player

  fill(255);
  quad(220, 550, 250, 550, 240, 540, 230, 540);
  fill(0, 0, 255);
  quad(360, 460, 320, 460, 320, 460, 320, 480);
  fill(255);
  rect(175, 390, 20, 20);
  fill(255, 0, 0);
  circle(230, 300, 20);
  fill(255);
  quad(360, 270, 370, 260, 380, 260, 390, 270);
  fill(255, 0, 255);
  circle(340, 150, 20);

  //cloud animation
  image(img3, imgX3, imgY3);
  image(img1, imgX1, imgY1);
  imgX1++;
  imgY1 -= 2;
  //if cloud reaches top
  if (imgY1 == 0) {
    //move cloud back down
    imgX1 = 40;
    imgY1 = 600;
  }

  //cloud animation
  image(img2, imgX2, imgY2);
  imgX2--;
  imgY2 -= 2;
  //if cloud reaches top
  if (imgY2 == 0) {
    //move cloud back down
    imgX2 = 500;
    imgY2 = 600;
  }

  //eagle animation

  image(img4, imgX4, imgY4);
  //move eagle left
  imgX4 -= 2;
  //if eagle reaches left of screen
  if (imgX4 == 0) {
    //teleport eagle to right of screen
    imgX4 = 600;
    imgY4 = 50;
  }

  fill(255);
  //snow animation
  circle(random(0, 600), random(0, 600), 5);
  //player variables
  push();
  fill(0, 0, 255);
  image(peng, x, y);
  pop();
  player();

  //get distance from player to platform
  let dP1 = dist(x + 10, y + 10, 230, 545);
  //if distance is less than or equal to 20, change accleration (gravity)
  if (dP1 <= 20) {
    ysp = -0.000000000000000000000000000000001;
  }
  //get distance from player to platform
  let dP2 = dist(x + 10, y + 10, 340, 460);
  //if distance is less than or equal to 20, change accleration (gravity)
  if (dP2 <= 20) {
    ysp = -0.000000000000000000000000000000001;
  }
  //get distance from player to platform
  let dP3 = dist(x + 10, y + 10, 185, 400);
  //if distance is less than or equal to 20, change accleration (gravity)
  if (dP3 <= 20) {
    ysp = -0.000000000000000000000000000000001;
  }
  //get distance from player to platform
  let dP4 = dist(x + 10, y + 10, 230, 300);
  //if distance is less than or equal to 20, change accleration (gravity)
  if (dP4 <= 20) {
    ysp = -0.000000000000000000000000000000001;
  }
  //get distance from player to platform
  let dP5 = dist(x + 10, y + 10, 370, 270);
  //if distance is less than or equal to 20, change accleration (gravity)
  if (dP5 <= 20) {
    ysp = -0.000000000000000000000000000000001;
  }
  //get distance from player to platform
  let dP6 = dist(x + 10, y + 10, 340, 150);
  //if distance is less than or equal to 20, change accleration (gravity)
  if (dP6 <= 20) {
    ysp = -0.000000000000000000000000000000001;
  }
  //get distance from player to cloud
  let dP8 = dist(x + 10, y + 10, imgX1 + 20, imgY1 + 20);
  //if distance from player to cloud is less than or equal to 40
  if (dP8 <= 40) {
    //slightly rise
    ysp = -1;
  }
  //get distance from player to cloud
  let dP9 = dist(x + 10, y + 10, imgX2 + 20, imgY2 + 20);
  //if distance from player to cloud is less than or equal to 40
  if (dP9 <= 40) {
    //slightly rise
    ysp = -1;
  }
  //get distance from player to eagle
  let dP10 = dist(x + 10, y + 10, imgX4 + 20, imgY4 + 20);
  //if distance from player to eagle is less than or equal to 50
  if (dP10 <= 50) {
    //Launch up
    ysp = -50;
  }
  //get distance from player to flag

  let dP7 = dist(x + 10, y + 10, 295, 20);
  
  
  

  let win = text("", 10, 10);
  //if distance from player to flag is less than or equal to 40, winning is true
  if (dP7 <= 40) {
    winning = true;
  }
  
//if winning is true send player to start, give "you win" message
  if (winning == true) {
    textSize(100);
    win = text("You Win!", 100, 300);
    textSize(20);
    text("Press 'r' to restart", 225, 350);
    x = 50;
    y = 580;
  }
  textSize(20);
  text("Time: " + round(millis() / 1000), 10, 60);
  text("Reach Flag!", 10, 40);
}

function mousePressed() {
  //get distance from player mouse to sun
  let distance = dist(mouseX, mouseY, sunX, sunY);
  //if the distance is less or equal to 25, the user left clicks, and the suns y-cord is 400, move the sun 300 pixels up
  if (distance <= 25 && mouseButton == LEFT && sunY == 400) {
    sunY -= 300;
    //if the distance is less or equal to 25, the user left clicks, and the suns y-cord is 100, move the sun 300 pixels down
  } else if (distance <= 25 && mouseButton == LEFT && sunY == 100) {
    sunY += 300;
  }
}

function mouseReleased() {}

function player() {
  //if the user presses "r"
  if (keyIsDown(82)) {
    //winning is false
    winning = false;
  }
  //if user presses left arrow
  if (keyIsDown(LEFT_ARROW)) {
    //if the x-cord is greater than 0, move player left
    if (x > 0) x -= 4;
  }
  //if user presses right arrow
  if (keyIsDown(RIGHT_ARROW)) {
    //if the x-cord is less than 580, move player right
    if (x < 580) x += 4;
  }
  //if y-cord is less than 580
  if (y < 580) {
    //add acceleration count to player (gravity)
    y += ysp;
    //add 0.5 to acceleration count
    ysp += 0.5;
    //otherwise
  } else {
    //acceleration count is 0
  
    ysp = 0;
    
  }
  //if user presses spacebar
  if (keyIsDown(32)) {
    //move player up (jump)
    y -= 10;
  }
}
