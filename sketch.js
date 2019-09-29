var fixrect,movingrect;
function setup() {

  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);
rect1=createSprite(100,200,50,80);
rect2=createSprite(600,200,50,80);
  fixrect=createSprite(400, 200, 50, 50);
  rect1.velocityX=4;
  rect2.velocityX=-4;
}

function draw() {
  background(0);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
 if (istouching(fixrect,movingrect)){
  movingrect.shapeColor="teal";
  fixrect.shapeColor="teal";

 }
 else{
  movingrect.shapeColor="pink";
  fixrect.shapeColor="pink";
  
 }
  bounceOff(rect1,rect2);
  drawSprites();
}
