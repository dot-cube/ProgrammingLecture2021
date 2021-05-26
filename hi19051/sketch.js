let leftSketch = function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth/2, p.windowHeight);
    setUpCanvas(p);
  }
  p.draw = function () {
    if (p.mouseIsPressed) {
      p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
    }
  }
};

let rightSketch = function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth/2, p.windowHeight);
    //p.position(leftSketch.size().width,0);
    setUpCanvas(p);
  }
  p.draw = function () {
    if (p.mouseIsPressed) {
      p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
    }
  }
};

function setUpCanvas(p) {
  p.background(0);

  p.rect(0, 0, p.windowWidth/2, p.windowHeight);
};


new p5(leftSketch, 'left_container');
new p5(rightSketch, 'right_container');