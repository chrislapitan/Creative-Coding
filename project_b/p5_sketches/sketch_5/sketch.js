let angle = 0;
let rotationSpeed = 0;
let circles = [];
let numCircles = 30;
function setup() {
    createCanvas(windowWidth, windowHeight);
    // cnv.parent("canvasContainer");
    for(let i = 0; i < numCircles; i++){
        let newCircle = new Circle(random(width), random(height));
        circles.push(newCircle);
      }
}

function draw() {
    background(125);
    for(let i = 0; i < circles.length; i++){
        circles[i].update();
        circles[i].display();
      }
    
    push();
    translate(width/2, height/2);
    rotate(angle);
    
    // BLACK HALF
    // large black arc
    fill(0);
    noStroke();
    arc(0, 0, 200, 200, -PI / 2, PI / 2);
    
    //top small black arc
    fill(255);
    noStroke();
    arc(0, -50, 100, 100, -PI/2, PI/2);
    
    // bottom small black arc
    fill(0);
    noStroke();
    arc(0, 50, 100, 100, PI/2, 0);
    
    //WHITE HALF
    // large arc
    fill(255);
    noStroke();
    arc(0, 0, 200, 200, PI / 2, 3 * PI / 2);
  
    // top small arc
    fill(255);
    stroke(0)
    strokeWeight(1);
    arc(0, -50, 100, 100, -PI/2, PI/2);
    
    // bottom small arc
    fill(0);
    noStroke();
    arc(0, 50, 100, 100, PI/2, 3*PI/2);
    
    // SMALL CIRCLES WITHIN
    // black circle within white
    push();
    translate(0, -50);
    fill(0);
    circle(0, 0, 25);
    pop();
    // white circle within black
    push();
    translate(0, 50);
    fill(255);
    circle(0, 0, 25);
    pop();
    
    
    pop();
    
    angle += rotationSpeed;
  }
  
  function mouseMoved() {
    rotationSpeed = map(mouseX, 0, width, 0, 1);
  }
  class Circle{
    constructor(startX, startY){
      this.x = startX;
      this.y = startY;
      this.xSpeed = random(-1, 1);
      this.ySpeed = random(-1, 1);
      this.fill = random(0, 255);
      this.speedFactor = random(0.1, 5);
      this.dia = random(10, 50);
    }
    update(){
      this.x += this.xSpeed * (1.5 + rotationSpeed * this.speedFactor);
      this.y += this.ySpeed * (1.5 + rotationSpeed * this.speedFactor);
      if(this.x > width || this.x < 0){
        this.xSpeed *= -1
      }
      if(this.y > height || this.y < 0){
        this.ySpeed *= -1;
      }
    }
    display(){
      push();
      translate(this.x, this.y);
      noStroke();
      fill(this.fill);
      circle(0, 0, this.dia);
      pop();
    }
  }
  