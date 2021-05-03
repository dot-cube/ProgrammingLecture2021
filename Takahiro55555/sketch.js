function setup() {
  createCanvas(500, 500);
  background(255);
  stroke(0, 0, 0);
  strokeWeight(5);
}

function draw() {
  if (keyIsPressed) {
    stroke(0);
    strokeWeight(5);
    if (mouseIsPressed) {
      if (key === "e") {
        stroke(255);
        strokeWeight(20);
      }
    }
    if (key === "c") {
      background(255);
    }
    if (key === "r") {
      stroke(255, 0, 0);
      strokeWeight(5);
    }
    if (key === "g") {
      stroke(0, 255, 0);
      strokeWeight(5);
    }
    if (key === "b") {
      stroke(0, 0, 255);
      strokeWeight(5);
    }
    if (key === "k") {
      stroke(0);
      strokeWeight(5);
    }
  }

  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }

}