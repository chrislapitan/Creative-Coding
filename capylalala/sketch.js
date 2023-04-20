// Final - Simple Creation of Class Cell
let seq = 0;
let cells = [];
let numCells = 5; // Change Starting # of Cells
let radius = 250; // Radius of gray circle for location purposes

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < numCells; i++) {
    let x = random(140, 460); // Account for this.speed
    let y = random(155, 445);
    if (i == 0) {
      cells.push(new Cell(x, y, true, random(25, 75), random(25, 75))); // First loop create bacteria cell (special cell)
    } else cells.push(new Cell(x, y, false, random(25, 50), random(25, 50)));
  }
}

function draw() {
  background(0, 0, 10, 10);
  // Conditional Statement to draw scenes
    if (seq == 0) {
      drawScene0();
    }else if (seq == 1) {
         drawScene1();
  }
}
function drawScene0() {
  // Draw Opening Scene
  background(0, 0, 10, 10);
  fill(20, 20, 20, 100)
  ellipse(width / 2, height / 2, 500, 500);
  fill(255);
  textSize(20);
  text("LIFE ON CANVAS",220, height / 2);
  textSize(10);
  text("CHRISTIAN LAPITAN", 250, 315)
  text("CLICK 'E' TO BEGIN", 425, 550);
  text("CLICK TO GENERATE NEW CELLS", 425, 575)
}
function drawScene1() {
  background(0, 0, 20, 20);
  fill(100, 100, 100, 100);
  ellipse(width / 2, height / 2, 500, 500);
  // Reference for placing cells
  // rect(140, 155, 335, 305);
  for (let i = 0; i < cells.length; i++) {
    cells[i].update();
    cells[i].display();
    cells[i].checkLifeEvents();
}
    for (let i = cells.length - 1; i >= 0; i--) {
    if (cells[i].readyToSplit == true) {
      let x = cells[i].x;
      let y = cells[i].y;
      let sp = cells[i].special;
      let w = cells[i].width;
      let h = cells[i].height;
      cells.splice(i, 1);
      cells.push(new Cell(x + random(-5, -15), y + random(-20, 20), sp, w/1.01, h/1.01));
      cells.push(new Cell(x + random(5, 15), y + random(-20, 20), sp, w, h));
    }
  }
  for (let i = cells.length - 1; i >= 0; i--) {
    if (cells[i].readyToDie == true) {
      cells.splace(i, 1);
    }
  }
}
function keyPressed() {
  if (key == "e" || key == "E") {
    proceedSequence();
  }
}
function proceedSequence() {
  seq++;
  if (seq == 2) {
    seq = 0; // Reset sequence after last phase
  }
}
// Click to add new cell
function mousePressed() {
  let ellipseX = width / 2;
  let ellipseY = height / 2;
  let ellipseWH = 250;
  let distFromMouseToOrigin = dist(mouseX, mouseY, ellipseX, ellipseY);
  if (distFromMouseToOrigin <= ellipseWH - 25) {
    cells.push(new Cell(mouseX, mouseY, false, random(20, 50), random(20, 50)));
  }
}

class Cell {
  constructor(startX, startY, special, width, height) {
    this.x = startX;
    this.y = startY;
    this.r = random(20, 50);
    this.g = random(20, 50);
    this.b = random(20, 50);
    this.o = random(20, 50);
    this.movingPos = 0;
    this.angle = random(0, 2 * PI); // Random value on sine curve (not in sync)
    this.speed = random(0.01, 0.07); // Randomized speed for Cell movement
    this.width = width;
    this.height = height;
    this.age = 0;
    this.ageToDie = random(50, 100); // Generates random value for when cell will die
    this.mitosis = random(75, 100); // Generate random value for when cell can go through mitosis
    this.readyToSplit = false; // Determine cell will go through mitosis
    this.readyToDie = false; // Determine cell will die :/
    this.special = special; // For bacteria cell
  }
  update() {
    this.movingPos = map(sin(this.angle), -0.5, 0.5, -3, 2);
    this.angle += this.speed;
    this.age += 0.1;
  }
  display() {
    push();
    translate(this.x + this.movingPos, this.y);
    stroke(224, 224, 222, 10);
    if (this.special == false) {
      fill(this.r, this.g, this.b, this.o);
      ellipse(0, 0, this.width, this.height);
    } else if (this.special == true) {
      fill(196, 36, 6, 50);
      ellipse(0, 0, this.width, this.height);
    }
    pop();
    // console.log(this.alive);
    // console.log(this.age);
  }
  checkLifeEvents() {
    // Determine whether age to split or die comes first
    if (this.age >= this.mitosis) {
      this.readyToSplit = true;
      if (this.age >= this.ageToDie) {
        this.readyToDie = true;
      }
    }
  }
}