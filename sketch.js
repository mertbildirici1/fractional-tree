let angle = 0;
let slider;

function setup() {
  createCanvas(640, 360);
  slider = select('#angleSlider');
  slider.input(updateAngle);
}

function updateAngle() {
  angle = slider.value();
}

function draw() {
  background(0);
  stroke(255);
  translate(width * 0.5, height);
  branch(100);
}

function branch(len) {
  strokeWeight(map(len, 10, 100, 1, 8)); // Varying stroke weight
  stroke(map(len, 10, 100, 255, 100), map(len, 10, 100, 200, 50), map(len, 10, 100, 150, 50)); // Color gradient
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 10) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  } else {
    // Draw simple leaves
    fill(34, 139, 34, 200); // Forest green with some transparency
    noStroke();
    ellipse(0, 0, 10, 20);
  }
}
