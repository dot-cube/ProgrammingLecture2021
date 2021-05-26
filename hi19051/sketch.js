var clearButton;
function setup() {
  clearButton = createButton('Clear');
  clearButton.mousePressed(reset);
  
  createCanvas(windowWidth, windowHeight-clearButton.size().height);
  
  setUpCanvas();
}

function draw() {
  if(mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function setUpCanvas() {
  background(255);
  
  rect(0, 0, windowWidth, windowHeight-clearButton.size().height);
}

function reset() {
  clear();
  setUpCanvas();
}