let dia = 100;
let distance; 
function setup(){
    createCanvas(windowWidth, windowHeight);
    // cnv.parent("canvasContainer");
}

function draw(){
    background(255, 255, 255);
    let distance = dist(mouseX, mouseY, width/2, height/2);
  
    push();
    translate(width/2, height/2);
  
    if (distance < 50) {
      dia = map(distance, 0, 50, 200, 150);
    }
  
  
    fill(0);
    ellipse(0, 0, dia, dia);
    fill(150);
    noStroke();
    ellipse(0, 125, dia, 25);


    pop();
}
