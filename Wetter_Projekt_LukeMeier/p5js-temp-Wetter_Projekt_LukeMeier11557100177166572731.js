function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}



function draw() {
 
}

function cloud(x, y){
  fill( 255, 255, 255);
  stroke(255,255,255);
  ellipse(x-30, y+10, 50);
  ellipse(x, y, 70);
  ellipse(x+30, y+2, 65);
  ellipse(x+50, y+10, 50);
  
}

function mouseClicked(){
   cloud(mouseX, mouseY);
   for (let i = 0; i < 50; i++) {
  rain(mouseX, mouseY);
  console.log(i);
}
   
}

function rain(x, y){
fill(0,0,255);
  stroke(0,0,255);
  ellipse(random(x-60,x+70),random(y+40, y+200),10,10);
}
