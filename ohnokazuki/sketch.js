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
  //Rを押した時、赤色の線が描けるようにする。
  if (key === "r") {
    //line(pmouseX, pmouseY, mouseX, mouseY);
    stroke(255, 0, 0);
    //strokeWeight(2);
  }
　//Bを押した時、青色の線が描けるようにする。
  if (key === "b") {
    //line(pmouseX, pmouseY, mouseX, mouseY);
    stroke(0, 0, 255);
    //strokeWeight(2);
  }
　//Gを押した時、緑色の線が描けるようにする。
  if (key === "g") {
    //line(pmouseX, pmouseY, mouseX, mouseY);
    stroke(0, 255, 0);
    //strokeWeight(2);
  }
　//Yを押した時、黄色の線が描けるようにする。
  if (key === "y") {
    //line(pmouseX, pmouseY, mouseX, mouseY);
    stroke(255, 170, 0);
    //strokeWeight(2);
  }
　//Pを押した時、紫色の線が描けるようにする。
  if (key === "p") {
    //line(pmouseX, pmouseY, mouseX, mouseY);
    stroke(255, 0, 255);
    //strokeWeight(2);
  }
　//Kを押した時、黒色の線が描けるようにする。
  if (key === "k") {
    //line(pmouseX, pmouseY, mouseX, mouseY);
    stroke(0);
    strokeWeight(2);
  }
　//Eを押している時、消しゴムの機能になるようにする。
  if (keyIsPressed) {
    if (key === "e") {
      line(pmouseX, pmouseY, mouseX, mouseY);
      stroke(255);
      strokeWeight(20);
    }
  }
  //Cを押している時、全消しの機能になるようにする。
  if (keyIsPressed) {
    if (key === "c") {
      background(255);
    }
  }
  //Sを押した時、色がランダムな円を描けるようにする。
  if (key === "s") {
    ellipse(mouseX, mouseY, 30, 30);
    fill(random(0, 255), random(0, 255), random(0, 255));
  }
　//Wを押した時、太さ10の黒色の線が描けるようにする。
  if (key === "w") {
    strokeWeight(10);
  }
　//Ａを押した時、太さ2の黒色の線が描けるようにする。
  if (key === "a") {
    strokeWeight(2);
  }
　//Ｈを押した時、ランダムに色が出てくる線を描けるようにする。
  if (key === "h") {
    //line(pmouseX, pmouseY, mouseX, mouseY);
    stroke(random(100, 255), random(100, 255), random(100, 255));
  }
}