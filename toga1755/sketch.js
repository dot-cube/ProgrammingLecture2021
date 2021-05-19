function setup() {
  createCanvas(600, 300);
  background(255);
}

function draw() {
  stroke(0,0,0);
  strokeWeight(3)
  line(0,0,600,0);
  line(0,0,0,300);
  line(0,300,600,300);
  line(600,0,600,300);
  
  strokeWeight(10);
  noFill();
  stroke(random(0,255),random(0,255),random(0,255));
  ellipse(random(0,600),random(0,300),random(10,100),random(10,100));
}