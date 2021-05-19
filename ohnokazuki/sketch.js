function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
    stroke(0);
    strokeWeight(2);
  }
  if (key === "r") {
    //line(pmouseX, pmouseY, mouseX, mouseY);
    stroke(255, 0, 0);
    //strokeWeight(2);
  }


  if (key === "b") {
    //line(pmouseX, pmouseY, mouseX, mouseY);
    stroke(0, 0, 255);
    //strokeWeight(2);
  }

  if (key === "g") {
    //line(pmouseX, pmouseY, mouseX, mouseY);
    stroke(0, 255, 0);
    //strokeWeight(2);
  }

  if (key === "y") {
    //line(pmouseX, pmouseY, mouseX, mouseY);
    stroke(255, 170, 0);
    //strokeWeight(2);
  }


  if (key === "p") {
    //line(pmouseX, pmouseY, mouseX, mouseY);
    stroke(255, 0, 255);
    //strokeWeight(2);
  }

  if (key === "k") {
    //line(pmouseX, pmouseY, mouseX, mouseY);
    stroke(0);
    strokeWeight(2);
  }


  if (keyIsPressed) {
    if (key === "e") {
      line(pmouseX, pmouseY, mouseX, mouseY);
      stroke(255);
      strokeWeight(20);
    }
  }
  if (keyIsPressed) {
    if (key === "c") {
      background(255);
    }
  }
  if (key === "s") {
    ellipse(mouseX, mouseY, 30, 30);
    fill(random(0, 255), random(0, 255), random(0, 255));
  }

  if (key === "w") {
    strokeWeight(10);
  }

  if (key === "a") {
    strokeWeight(2);
  }

  if (key === "h") {
    //line(pmouseX, pmouseY, mouseX, mouseY);
    stroke(random(100, 255), random(100, 255), random(100, 255));
  }
}