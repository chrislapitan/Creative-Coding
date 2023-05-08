function setup() {
    createCanvas(windowWidth, windowHeight);
    // cnv.parent("canvasContainer");
}

function draw() {
    background(0);

    push()
    translate(width / 2, height / 2);


    // large arc
    fill(255);
    noStroke();
    arc(0, 0, 200, 200, PI / 2, 3 * PI / 2);

    // top small arc
    fill(255);
    noStroke();
    arc(0, -50, 100, 100, -PI / 2, PI / 2);

    // bottom small arc
    fill(0);
    noStroke();
    arc(0, 50, 100, 100, PI / 2, 3 * PI / 2);

    // black circle within white
    push();
    translate(0, -50);
    fill(0);
    circle(0, 0, 25);
    pop();

    
    pop();
}