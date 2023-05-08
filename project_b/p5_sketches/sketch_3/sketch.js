function setup() {
    createCanvas(windowWidth, windowHeight);
    // cnv.parent("canvasContainer");
}

function draw() {
    background(255);

    push();
    translate(width / 2, height / 2);

    
    // large black arc
    fill(0);
    noStroke();
    arc(0, 0, 200, 200, -PI / 2, PI / 2);

    //top small black arc
    fill(255);
    noStroke();
    arc(0, -50, 100, 100, -PI / 2, PI / 2);

    // bottom small black arc
    fill(0);
    noStroke();
    arc(0, 50, 100, 100, PI / 2, 0);

    // white circle within black
    push();
    translate(0, 50);
    fill(255);
    circle(0, 0, 25);
    pop();


    pop();
}