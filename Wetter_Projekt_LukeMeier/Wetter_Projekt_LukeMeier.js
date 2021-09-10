let count = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,180,255);
  fill(255,255,0);
  stroke(255,255,0);
  ellipse(200, 200, 150);
}



function draw() {
 
}

function cloud(x, y){
  fill(80);
  stroke(80);
  ellipse(x-30, y+10, 50);
  ellipse(x, y, 70);
  ellipse(x+30, y+2, 65);
  ellipse(x+50, y+10, 50);
  
}

function mouseClicked(){
  if(count == 0){
    background(140,186,212);
  }
  if(mouseY<=300){
   cloud(mouseX, mouseY);
   for (let i = 0; i < 50; i++) {
  rain(mouseX, mouseY);
  console.log(i);
}

  count = count+1;
}
if(count >= 5){
     clear();
     background(0,188,255);
     fill(255,255,0);
  stroke(255,255,0);
  ellipse(200, 200, 150);
     count= 0;
   }
}
   
   

function rain(x, y){
fill(0,0,255);
  stroke(0,0,255);
  ellipse(random(x-60,x+70),random(y+40, y+200),10,10);
}
