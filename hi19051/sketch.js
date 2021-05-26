let leftSketch = function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth / 2, p.windowHeight);
    setUpCanvas(p);
  }
};

let rightSketch = function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth / 2, p.windowHeight);
    setUpCanvas(p);
  }
};

function setUpCanvas(p) {
  p.background(0);

  p.rect(0, 0, p.windowWidth / 2, p.windowHeight);
};

function sync(h, c) {
  h.line(h.pmouseX, h.pmouseY, h.mouseX, h.mouseY);
  c.line(h.windowWidth / 2 - h.pmouseX, h.pmouseY, h.windowWidth / 2 - h.mouseX, h.mouseY);
}


let l = new p5(leftSketch, 'left_container');
let r = new p5(rightSketch, 'right_container');

l.draw = function () {
  if (l.mouseIsPressed) {
    sync(l, r);
  }
}
r.draw = function () {
  if (r.mouseIsPressed) {
    sync(r, l);
  }
}