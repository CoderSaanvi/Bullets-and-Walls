var bullet,speed,weight;

var wall,thickness;

var deformation;

var damage;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 200, 40, 10);
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);

  speed=random(223,321);
  bullet.velocityX = speed;

  weight=random(30,52);

  thickness=random(22,83);

  deformation = 0;

  damage = 0;
}

function draw() {
  background(255,255,255);
  
  deformation = (0.5*weight*speed*speed)/22500;

  damage = (0.5*weight*speed*speed)/thickness*thickness*thickness;

  if(isTouching(bullet,wall) && deformation<100){
    bullet.shapeColor = "green";
    bullet.velocityX = 0;
  }

  else if(isTouching(bullet,wall) && deformation>100 && deformation<180){
    bullet.shapeColor = "yellow";
    bullet.velocityX = 0;
  }

  else if(isTouching(bullet,wall) && deformation>180){
    bullet.shapeColor = "red";
    bullet.velocityX = 0;
  }

  else if(isTouching(bullet,wall) && damage>10){
    wall.shapeColor = "red";
    bullet.velocityX = 0;
  }

  else if(isTouching(bullet,wall) && damage<10){
    wall.shapeColor = "green";
    bullet.velocityX = 0;
  }

  drawSprites();
}

function isTouching(o1,o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2 &&
    o1.y - o2.y < o2.height/2 + o1.height/2
  && o2.y - o1.y < o2.height/2 + o1.height/2){ 
    return true;
  }

  else {
    return false;
  }
}