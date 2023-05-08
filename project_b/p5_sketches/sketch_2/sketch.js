let dia = 100;
let distance; 
function setup(){
    createCanvas(windowWidth, windowHeight);
    // cnv.parent("canvasContainer");
}

function draw(){
    background(0);
    let distance = dist(mouseX, mouseY, width/2, height/2);

    push();
    translate(width/2, height/2);

    if (distance < 50) {
        dia = map(distance, 0, 50, 200, 150);
    }

    fill(255);
    ellipse(0, 0, dia, dia);
    fill(105);
    noStroke();
    ellipse(0, 125, dia, 25);


    pop();
}