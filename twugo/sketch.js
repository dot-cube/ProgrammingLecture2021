let colorPicker;
let strokeWeightSlider;
let undoArray = [];
let redoArray = [];

function setup() {
  createCanvas(400, 500);
  background(255);

  // カラーピッカーの実装
  colorPicker = createColorPicker('black');
  colorPicker.position(10, height - 50);

  // 全消しボタンの実装
  let deleteButton = createButton('全消し');
  deleteButton.position(100, height - 50);
  deleteButton.mousePressed(() => {
    mySaveCanvas(undoArray);
    redoArray = [];
    background(255);
  });

  // 線の太さを変えるスライダーの実装
  strokeWeightSlider = createSlider(1, 50, 5);
  strokeWeightSlider.position(200, height - 50);

  // 戻るボタンの実装
  let backButton = createButton('undo');
  backButton.position(100, height);
  backButton.mousePressed(() => {
    if(undoArray.length < 1){
      return;
    }
    
    mySaveCanvas(redoArray);
    
    loadPixels();
    let pixelArray = undoArray.pop();
    let d = pixelDensity();
    let iSize = width*d * height*d * 4;
    for (let i = 0; i < iSize; ++i) {
      pixels[i] = pixelArray[i];
    }
    updatePixels();
  });
  
  // redoButtonの実装
  let redoButton = createButton('redo');
  redoButton.position(150, height);
  redoButton.mousePressed(() => {
    if(redoArray.length < 1){
      return;
    }
    
    mySaveCanvas(undoArray);
    
    loadPixels();
    let pixelArray = redoArray.pop();
    let d = pixelDensity();
    let iSize = width*d * height*d * 4;
    for (let i = 0; i < iSize; ++i) {
      pixels[i] = pixelArray[i];
    }
    updatePixels();
    // undoArray.push(pixelArray);
  });
}

function draw() {
  // 線の太さのサンプルを描く
  strokeWeight(55);
  stroke(255);
  line(180, height - 40, 195, height - 40);
  strokeWeight(strokeWeightSlider.value());
  stroke(colorPicker.color());
  line(185, height - 38, 185, height - 38);

  // カラーピッカーの色を適用させる,ただしeを押されていたら白にする
  stroke(colorPicker.color());
  if (keyIsPressed) {
    if (key === 'e') {
      stroke(255);
    }
  }
  
  // スライダーの線の太さを適用させる
  strokeWeight(strokeWeightSlider.value());

  // 線を引く
  if (mouseIsPressed) {
    if (pmouseY < height - 100 && mouseY < height - 100) {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }

}

function mySaveCanvas(array) {
  let pixelArray = [];
  loadPixels();
  let d = pixelDensity();
  
  for (i = 0; i < width * d * height * d * 4; ++i) {
    pixelArray[i] = pixels[i];
  }
  array.push(pixelArray);
  updatePixels();
}

function mousePressed() {
  if (mouseX < width && mouseY < height - 100) {
    mySaveCanvas(undoArray);
    redoArray = [];
  }
}