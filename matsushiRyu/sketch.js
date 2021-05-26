function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 100);
  Sat = 40; //彩度
  Bri = 90; //明度
  player.hue = 100;
  BG = 80; //背景色
  n=0;
  SPEED = 1;
  G = 1/4;
}

class Vec2{
  constructor(_x,_y){
    this.x = _x;
    this.y = _y;
  }
  add(a){
    return new Vec2(this.x + a.x, this.y + a.y);
  }
  sub(a){
    return new Vec2(this.x - a.x, this.y - a.y);
  }
  mul(s){
    return new Vec2(s * this.x, s * this.y);
  }
  mag(a){//ベクトルの大きさ
    return sqrt(this.x**2 + this.y**2);
  }
  norm(){//ベクトルの正規化（大きさを1にする）
    return this.mul(1/this.mag());
  }
}

class Player{
  constructor(_p,_v,_r){
    this.p = _p; //プレイヤーの位置ベクトル
    this.v = _v; //プレイヤーの速度ベクトル
    this.r = _r; //プレイヤーの半径
    this.hue = 0; //色彩
  }
}

class Enemy{
  constructor(_p,_v,_a,_r){
    this.p = _p; //敵の位置ベクトル
    this.v = _v; //敵の速度ベクトル
    this.a = _a; //敵の加速度ベクトル
    this.r = _r; //敵の半径
    this.hue = random(0,100); //色彩
  }
}

let enemy = [];
let player = new Player(new Vec2(100,100),new Vec2(10,10),30);

function draw() {
  background(BG);
  stroke(0,0,0);
  textSize(20);
  text("[D]:ゆっくり  [F]離れる",200,600);
  
  //敵を増やす
  if(frameCount % 180 == 1){
    //console.log(n);
    enemy[n] = new Enemy(new Vec2(50,50),new Vec2(0,0),new Vec2(0,0),10);
    n++;
  }
  
  //プレイヤーの位置更新
  player.v.x = (player.v.x + mouseX-player.p.x)/5;
  player.v.y = (player.v.y + mouseY-player.p.y)/5;
  player.p = player.p.add(player.v);
  
  
  //キーボード入力
  keyboard();
  
  //敵の位置更新
  
  for(let i=0;i<n;i++){
    enemy[i].a = player.p.sub(enemy[i].p).norm().mul(G).mul(1/SPEED);
    enemy[i].v = enemy[i].v.add(enemy[i].a);
    enemy[i].p = enemy[i].p.add(enemy[i].v.mul(1/SPEED));
  }
  
  //衝突したら
  for(let i=0;i<n;i++){
    if(player.p.sub(enemy[i].p).mag() < player.r + enemy[i].r){
      player.hue = 0;
      break;
    }else{player.hue = 80;}
  }
  
  //描写
  fill(player.hue,Sat,Bri);
  ellipse(player.p.x,player.p.y,player.r*2);
  for(let i=0;i<n;i++){
    fill(enemy[i].hue,Sat,Bri);
    ellipse(enemy[i].p.x,enemy[i].p.y,enemy[i].r*2);
  }
  
}

function keyboard(){
  if(keyIsDown(68)){//d
    Sat+=6;
    Bri+=4;
    BG-=5;
    if(Sat>100)Sat=100;
    if(Bri>100)Bri=100;
    if(BG<40)BG=40;
    SPEED = 4;
  }else{
    Sat-=6;
    Bri-=4;
    BG+=5;
    if(Sat<40)Sat=40;
    if(Bri<90)Bri=90;
    if(BG>80)BG=80;
    SPEED = 1;
  }
  
  if(keyIsDown(70)){//f
    for(let i=0;i<n;i++){
      enemy[i].v = enemy[i].p.sub(player.p).norm().mul(1500/enemy[i].p.sub(player.p).mag());
      text(enemy[0].v.mag(),100,100);
    }
  }
}