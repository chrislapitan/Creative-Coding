// Global Variables
let r; // Random Fill
let s = 97.14;
let randomXmargin; // Inner Circle X
let randomYmargin; // Inner Circle Y
function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasContainer")
  background(110);

  // rect(17.14, 17.14, 80, 80)
  // rect(114.28, 17.14, 80, 80)
  // rect(211.42, 17.14, 80, 80)
  // rect(308.56, 17.14, 80, 80)
  // rect(405.70, 17.14, 80, 80)
  // rect(502.84, 17.14, 80, 80)

  //Grid - 80 by 80; 17.14 Pixel Spacing In-Between
  for (let x = 17.14; x < width; x += s) {
    for (let y = 17.14; y < height; y += s) {
      r = random(20, 90);
      noStroke();
      fill(r);
      rect(x, y, 80, 80);
      
      // Inner Squares (how can I make these random for each box?)
      noStroke();
      fill(r * 0.9);
      randomXmargin = random(7, 30);
      randomYmargin = random(7, 30);
      rect(x + randomXmargin, y + randomYmargin, 40, 40);
      stroke(r * 0.9);
      line(x, y, x + randomXmargin, y + randomYmargin); // Top Left
      line(x + 80, y, x + randomXmargin + 40, y + randomYmargin); // Top Right
      line(x, y + 80, x + randomXmargin, y + randomYmargin + 40); // Bottom Left
      line(x + 80, y + 80, x + randomXmargin + 40, y + randomYmargin + 40); // Bottom Right
      
    }
  }
  // AFTER YOUR CODE HAS RUN:
  // saveCanvas('Christian Lapitan', 'png');   // saves the canvas as a png image
}
