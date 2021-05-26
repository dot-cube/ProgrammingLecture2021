function setup() {
  createCanvas(500, 500);
  background(225);
}

function draw() {
  if (mouseIsPressed) {
　　strokeWeight(5)
    stroke(0)
    
    if (keyIsPressed) {
      if (key === "e") {
        stroke(225)
        strokeWeight(20)
      }
     
    
    }
   
    if (key === "r") {
      stroke(225, 0, 0)
    }
    if (key === "g") {
      stroke(0, 225, 0)
    }
    if (key === "b") {
      stroke(0, 0, 225)
    }
    if (key === "k") {
      stroke(0) }
    
  line(pmouseX, pmouseY, mouseX, mouseY)
  }
  if (keyIsPressed){ 
  if (key === "c") {
      background(225)
    }
  }

}