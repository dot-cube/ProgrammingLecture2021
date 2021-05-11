function setup(){
    createCanvas(600,600)
  background(255)
}
function draw(){
  strokeWeight(5);
  stroke(0); 
  if(keyIsPressed){
  if(key === "c"){
          background(255);
  }
  }
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
          stroke(0);
        }

   if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY); 
    if(keyIsPressed){
      if(key === "e"){
        stroke(255);
        strokeWeight(20);
  line(pmouseX,pmouseY,mouseX,mouseY);      
      }
    }
   }
    
  }