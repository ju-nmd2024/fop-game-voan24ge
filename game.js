let state = "start";
let birdY;
let velocityY;
let acceleration = 0.2;
let lift = -0.6;
const nestY = 422;
const nestWidth = 160;
const safeLandingSpeed = 5;
let resultMessage = "";
let birdX;
let nestContent = "eggs";
let gameIsRunning = false;

//Initialization or reset of the game
function resetGame() {
  birdY = 100;
  velocityY = 0;
  birdX = 500;
  resultMessage = "";
  state = "start";
  nestContent = "eggs";
  //The game can run again
  gameIsRunning = true;
}

function setup() {
  createCanvas(700, 500);
  resetGame();
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    if (gameIsRunning) {
      gameScreen();
      gravity();
      checkLanding();
    }
  } else if (state === "result") {
    resultScreen();
  }
}

const rectWidth = 250;
const rectHeight = 65;
const rectX = (700 - rectWidth) / 2;
const rectY = (500 - rectHeight) / 2;

//Start screen
function startScreen() {
  background(66, 242, 245);
  stroke(0, 0, 0);
  strokeWeight(1);
  fill(66, 173, 245);
  rect(rectX, rectY, rectWidth, rectHeight, 10);
  noStroke();
  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(32);
  text("AvianRise", 700 / 2, 500 / 2 + 10);
  stroke(0, 0, 0);
  strokeWeight(1);
  fill(25, 83, 230);
  textSize(20);
  text("Click to Start", 700 / 2, 500 / 2 + 60);
  fill(0, 0, 0);
  textSize(16);
  text(
    "When the game starts, press SPACE to control the bird",
    700 / 2,
    500 / 2 + 200
  );

  //Clouds for the start screen
  function clouds(x, m, w, h) {
    noStroke();
    fill(255, 255, 255);
    ellipse(550, 50, 80, 50);
    ellipse(600, 190, 80, 50);
    ellipse(170, 105, 80, 50);
    ellipse(90, 295, 80, 50);
    ellipse(x + 5, m, w, h);
    ellipse(x + 25, m, w, h);
    ellipse(x + 50, m, w, h);
    ellipse(x + 70, m, w, h);
    ellipse(x + 95, m, w, h);
  }
  clouds(500, 77, 40, 40);
  clouds(550, 220, 40, 40);
  clouds(120, 130, 40, 40);
  clouds(40, 320, 40, 40);
}

//Game screen
function gameScreen() {
  background(164, 242, 252);

  //Clouds
  function clouds(x, m, w, h) {
    noStroke();
    fill(255, 255, 255);
    ellipse(550, 50, 80, 50);
    ellipse(600, 190, 80, 50);
    ellipse(x + 5, m, w, h);
    ellipse(x + 25, m, w, h);
    ellipse(x + 50, m, w, h);
    ellipse(x + 70, m, w, h);
    ellipse(x + 95, m, w, h);
  }
  clouds(500, 77, 40, 40);
  clouds(550, 220, 40, 40);

  //Tree
  //Tree trunk
  noStroke();
  fill(135, 68, 39);
  rect(0, 170, 55, 500);
  rect(10, 450, 470, 40);
  fill(78, 135, 39);
  ellipse(20, 140, 250, 250);
  strokeWeight(2);
  stroke(161, 110, 22);
  //Decor of the trunk
  function decor(x, d, x1, d1) {
    line(x, d, x1, d1);
    line(x + 35, d + 5, x1 + 28, d1);
    line(x, d + 50, x1 + 2, d1 + 45);
    line(x + 35, d + 35, x1 + 28, d1 + 30);
    line(x + 35, d + 70, x1 + 28, d1 + 65);
    line(x, d + 85, x1 + 3, d1 + 80);
    line(x + 35, d + 110, x1 + 28, d1 + 105);
    line(x, d + 130, x1 + 2, d1 + 125);
    line(x + 35, d + 140, x1 + 28, d1 + 135);
    line(x, d + 160, x1 + 2, d1 + 155);
    line(x + 35, d + 170, x1 + 28, d1 + 165);
    line(x, d + 190, x1 + 3, d1 + 185);
    line(x + 35, d + 200, x + 28, d1 + 195);
    line(x, d + 220, x1 + 2, d1 + 215);
    line(x + 35, d + 220, x1 + 28, d1 + 215);
  }
  decor(5, 290, 6, 300);

  //Tree branch
  function branch(x, e, w, h) {
    noStroke();
    fill(78, 135, 39);
    ellipse(x, e, w, h);
    ellipse(x + 30, e, w, h);
    ellipse(x + 55, e, w, h);
    ellipse(x + 80, e + 10, w, h);
    ellipse(x + 105, e + 20, w, h);
    ellipse(x + 130, e + 35, w, h);
    ellipse(x + 140, e + 55, w, h);
    ellipse(x + 150, e + 75, w, h);
    ellipse(x + 160, e + 95, w, h);
    ellipse(x + 160, e + 115, w, h);
    ellipse(x + 160, e + 135, w, h);
    ellipse(x + 150, e + 155, w, h);
    ellipse(x + 140, e + 175, w, h);
    ellipse(x + 120, e + 195, w, h);
    ellipse(x + 100, e + 210, w, h);
    ellipse(x + 80, e + 215, w, h);
    ellipse(x + 60, e + 220, w, h);
    ellipse(x + 40, e + 220, w, h);
    ellipse(x + 10, e + 220, w, h);
  }
  branch(0, 30, 50, 50);

  //Nest
  noStroke();
  fill(230, 164, 41);
  ellipse(310, 430, 200, 95);
  fill(168, 120, 30);
  ellipse(310, nestY, nestWidth, 55);
  //Decor of the nest
  stroke(128, 90, 22);
  line(235, 395, 240, 402);
  line(375, 402, 381, 395);
  line(210, 420, 218, 425);
  line(210, 445, 220, 440);
  line(405, 425, 413, 420);
  line(400, 440, 413, 445);
  noStroke();

  //Nest content updates dynamically
  if (nestContent === "eggs") {
    drawEggs();
  } else if (nestContent === "chicks") {
    drawChicks();
  } else if (nestContent === "white and yolk") {
    drawBrokenEggs();
  }
  //Bird drawing
  push();
  translate(0, 0);
  scale(0.6);
  bird(birdX, birdY);
  pop();
}

//Result screen
function resultScreen() {
  background(250, 218, 137);
  stroke(0, 0, 0);
  strokeWeight(1);
  fill(150, 115, 50);
  rect(rectX, rectY, rectWidth, rectHeight, 10);
  noStroke();
  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(32);
  text(resultMessage, 700 / 2, 500 / 2 + 10);
  stroke(0, 0, 0);
  strokeWeight(1);
  fill(120, 84, 17);
  textSize(20);
  text("Click to Restart", 700 / 2, 500 / 2 + 60);

  //Eggs for the result screen
  stroke(214, 158, 90);
  strokeWeight(1);
  fill(250, 247, 242);
  push();
  translate(0, 0);
  rotate(-0.2);
  ellipse(250, 190, 65, 85);
  rotate(+0.2);
  ellipse(350, 135, 65, 85);
  rotate(+0.3);
  ellipse(440, 8, 65, 85);
  pop();
  //Spots on the eggs for result screen
  noStroke();
  fill(184, 149, 84);
  ellipse(268, 120, 8, 10);
  ellipse(300, 155, 8, 10);
  ellipse(332, 120, 8, 10);
  ellipse(365, 155, 8, 10);
  ellipse(405, 120, 8, 10);
  ellipse(425, 160, 8, 10);
}

//Gravity and movement
function gravity() {
  velocityY += acceleration;

  //Lift the bird with the spacebar
  if (keyIsDown(32)) {
    velocityY += lift;
  }

  //Bird position update
  birdY += velocityY;

  //Keeping the bird within the screen
  birdY = constrain(birdY, 0, height);
}

function checkLanding() {
  if (birdY >= nestY - 20 && birdY <= nestY + 10) {
    if (velocityY <= safeLandingSpeed) {
      //Change eggs to chicks
      nestContent = "chicks";
      resultMessage = "Great Job!";
      //Help from Liudmyla
      setTimeout(() => {
        state = "result";
        //Stop the game after showing the result
        gameIsRunning = false;
      }, 450);
      // Crash landing
    } else {
      // Change eggs to broken eggs
      nestContent = "white and yolk";
      resultMessage = "Try again!";
      setTimeout(() => {
        state = "result";
        //Stop the game after showing the result
        gameIsRunning = false;
      }, 450);
    }
  }
}

//Draw eggs
function drawEggs() {
  fill(250, 247, 242);
  ellipse(270, 405, 45, 65);
  ellipse(310, 405, 45, 65);
  ellipse(350, 405, 45, 65);
  //Spots on the eggs
  noStroke();
  fill(168, 156, 133);
  ellipse(255, 392, 8, 10);
  ellipse(280, 422, 8, 10);
  ellipse(298, 390, 8, 10);
  ellipse(323, 420, 8, 10);
  ellipse(338, 392, 8, 10);
  ellipse(363, 422, 8, 10);
}

//Draw chicks
function chicks(x, y) {
  noStroke();
  fill(117, 163, 186);
  //Head
  ellipse(x, y + 5, 40, 40);
  //Body
  ellipse(x, y + 35, 45, 50);
  //Legs
  //The first leg
  stroke(89, 71, 51);
  line(x - 10, y + 57, x - 15, y + 70);
  line(x - 17, y + 67, x - 12, y + 62);
  line(x - 12, y + 62, x - 11, y + 68);
  //The second leg
  line(x + 5, y + 59, x + 10, y + 70);
  line(x + 5, y + 68, x + 6, y + 62);
  line(x + 7, y + 62, x + 13, y + 67);
  //Wings
  noStroke();
  fill(117, 163, 186);
  triangle(x + 19, y + 25, x + 45, y + 35, x + 19, y + 45);
  triangle(x - 19, y + 25, x - 45, y + 35, x - 19, y + 45);
  //Face
  //Eye
  noStroke();
  fill(0);
  ellipse(x + 12, y, 4, 4);
  //Nose
  noStroke();
  fill(201, 157, 36);
  triangle(x + 19, y + 5, x + 30, y, x + 19, y);
}

function drawChicks() {
  chicks(310, 380);
  chicks(260, 380);
  chicks(360, 380);
}

//Draw broken eggs
function drawBrokenEggs() {
  noStroke();
  fill(255);
  ellipse(310, 410, 130, 50);
  //White
  beginShape();
  vertex(245, 410);
  bezierVertex(245, 380, 265, 380, 290, 390);
  bezierVertex(330, 380, 360, 375, 375, 410);
  bezierVertex(230, 430, 310, 450, 340, 430);
  endShape();
  //Yolk
  noStroke();
  fill(237, 186, 17);
  ellipse(310, 410, 35, 20);
  ellipse(280, 410, 35, 20);
  ellipse(340, 410, 35, 20);
}

//Bird
function bird(x, y) {
  //Rear wing
  noStroke();
  fill(255, 255, 255);
  push();
  translate(x + 57, y - 5);
  rotate(2.2);
  arc(0, 0, 150, 100, 0, PI);
  pop();
  //Body
  fill(0, 150, 255);
  noStroke();
  arc(x, y, 250, 150, 0, PI);
  //Head
  fill(0, 150, 255);
  noStroke();
  push();
  translate(x + 87, y + 9);
  rotate(3.14);
  arc(0, 0, 75, 75, 0, PI);
  pop();
  //Front wing
  noStroke();
  fill(20, 52, 164);
  push();
  translate(x - 14, y - 35);
  rotate(0.5);
  arc(0, 0, 150, 100, 0, PI);
  pop();
  //Belly
  fill(255);
  noStroke();
  beginShape();
  vertex(x - 50, y + 69);
  bezierVertex(x - 50, y + 69, x + 10, y, x + 80, y + 58);
  vertex(x - 50, y + 69);
  bezierVertex(x - 50, y + 69, x + 10, y + 90, x + 80, y + 58);
  endShape();
  //Eye
  fill(0, 0, 0);
  noStroke();
  push();
  translate(x + 105, y - 10);
  scale(9);
  ellipse(0, 0, 1, 1);
  pop();
  //Worm
  noFill();
  stroke(222, 49, 99);
  strokeWeight(1);
  beginShape();
  vertex(x + 160, y - 20);
  bezierVertex(x + 160, y - 20, x + 138, y, x + 160, y + 15);
  endShape();
  //Nose
  fill(54, 69, 79);
  noStroke();
  triangle(x + 122, y - 5, x + 150, y, x + 124, y + 10);
  //Tail
  fill(0, 150, 255);
  noStroke();
  triangle(x - 175, y - 30, x - 123, y, x - 180, y);
  //Legs
  noFill();
  stroke(54, 69, 79);
  strokeWeight(1);
  //Left leg
  line(x - 40, y + 72, x - 20, y + 105);
  line(x - 20, y + 105, x, y + 100);
  line(x - 20, y + 105, x, y + 105);
  line(x - 20, y + 105, x, y + 110);
  //Right leg
  line(x + 45, y + 71, x + 65, y + 105);
  line(x + 65, y + 105, x + 85, y + 100);
  line(x + 65, y + 105, x + 85, y + 105);
  line(x + 65, y + 105, x + 85, y + 110);
}

//Start or restart the game
function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "result" && gameIsRunning === false) {
    resetGame();
  }
}
