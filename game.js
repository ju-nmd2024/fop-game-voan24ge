function setup() {
  createCanvas(700, 550);
}

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

let y = -100;
let direction = "downward";

function draw() {
  //Background
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
  noStroke();
  fill(135, 68, 39);
  rect(0, 170, 55, 500);
  rect(10, 450, 470, 40);
  fill(78, 135, 39);
  ellipse(20, 140, 250, 250);
  strokeWeight(2);
  stroke(161, 110, 22);

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

  function tree(x, e, w, h) {
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
  tree(0, 30, 50, 50);

  push();
  translate(0, 0);
  scale(0.5);
  bird(600, y);
  pop();

  if (direction === "downward") {
    if (y < 600) {
      y = y + 10;
    } else {
      direction = "upward";
    }
  } else if (direction === "upward") {
    if (y > 100) {
      y = y - 10;
    } else {
      direction = "downward";
    }
  }
}
