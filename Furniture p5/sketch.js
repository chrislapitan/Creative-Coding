function setup() {
  createCanvas(400, 600);
}

function draw() {
  //         r    g    b
  background(255, 255, 255);

//floor
  fill(21, 94, 150);
  rect(0, 400, 600, 400);

//side table
  fill(252, 215, 177);
  quad(290, 425, 400, 380, 400, 300, 400, 600);

//lamp shade
  //base
  fill(129, 138, 145);
  ellipse(200, 450, 75, 65);
  //pole one
  fill(135, 132, 130);
  rect(195, 300, 10, 150, 5);
  //top base
  fill(252, 186, 141);
  ellipse(200, 300, 98, 65);
  //pole two
  fill(135, 132, 130);
  rect(195, 150, 10, 150, 5);
  //shade
  fill(240, 233, 228);
  quad(160,60, 240, 60, 250, 160, 150, 160);
  
//left chair
  //top half
  strokeWeight(5);
  point(140, 340); //bottom right
  point(120, 250); //top right
  point(50, 260); //top left
  point(45, 350); //bottom left
  strokeWeight(1);

  fill(230, 106, 11);
  beginShape();
  curveVertex(200, 400); //bottom right
  curveVertex(140, 340);
  curveVertex(120, 250); //top right
  curveVertex(50, 260); //top left
  curveVertex(45, 350); //bottom left
  curveVertex(32, 91);
  endShape();
  
  //feet
  fill(135, 132, 130);
  rect(32, 425, 10, 100, 5);
  
  fill(135, 132, 130);
  rect(150, 400, 10, 100, 5);
  
  
  //bottom half
  strokeWeight(5);
  point(45, 350); //top left
  point(160, 420); //bottom right
  point(32, 450); //bottom left
  point(140, 340); //top right
  strokeWeight(1);

  fill(230, 106, 11);
  beginShape();
  curveVertex(140, 340); //bottom right
  curveVertex(140, 340); //top right
  curveVertex(160, 420);
  curveVertex(32, 450); //bottom left`
  curveVertex(45, 350); //top left
  curveVertex(32, 91);
  endShape();
  
  noFill();
  stroke;
  bezier(50, 260, 50, 250, 10, 260, 45, 350);
  
  noFill();
  stroke;
  bezier(120, 250, 140, 250, 150, 250, 140, 340);
}
