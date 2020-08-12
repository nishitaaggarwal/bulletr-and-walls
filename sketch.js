var bullet,wall,speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
bullet=createSprite(60, 200, 100, 20);
  wall=createSprite(1400, 200, thickness, height/2);
speed=random(200,331)
weight=random(30,52)
thickness=random(22,83)
}

function draw() {
  background(0,0,0);  
  wall.shapeColor=color(80,80,80)
  bullet.velocityX=speed;
  bullet.shapeColor="white"
  if(hascollided(bullet,wall)){
bullet.velocityX=0
  var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness)
  if(damage>10){
wall.shapeColor=color(255,0,0)
  }
  if(damage<10){
  wall.shapeColor=color(230,230,0)
      }
  
         

}
hascollided(bullet,wall);
drawSprites();
}
function hascollided (bullet,wall){
bulletRightEdge=bullet.x +bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){
return true;
}
return false;
}