function setup() {
  createCanvas(400, 400);
  background(255);
  fill(0);
  strokeWeight(10);
  colorMode(HSB, 100)
}

function draw() {
  if (keyIsPressed && key === "c") {
    background(255);
  }
  
  if (mouseIsPressed) {
    stroke(frameCount % 100, 100, 100);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}