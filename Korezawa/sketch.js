function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  if(mouseIsPressed){
    strokeWeight(5);
     line(pmouseX,pmouseY,mouseX,mouseY);

    if(key === "r"){
       stroke(255,0,0);
       }
    
    if(key === "g"){
      stroke(0,255,0);
    }
    
    if(key === "b"){
       stroke(0,0,255);
    }
    
    if(key === "k"){
      stroke(0,0,0);
    }
    if(keyIsPressed){
       if(key === "e"){
        strokeWeight(20);
         stroke(255,255,255);
          }}
    if(key === "c"){
       background(255);
       }
}
}