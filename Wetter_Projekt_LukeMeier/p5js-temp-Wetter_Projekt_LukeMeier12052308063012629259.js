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
}
