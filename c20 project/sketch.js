var car,wall,speed,weight,deform;
function setup() {
  speed = random(55,90);
  weight = random(400,1500);
  createCanvas(800,400);
  car = createSprite(200,200,20,20);
  wall = createSprite(500,200,10,100);
  
}

function draw() {
  background(0);
  car.velocityX = speed;
  
  if(wall.x - car.x < car.width /2 + wall.width /2)
  {
    car.velocityX = 0;
    deform= 0.5*weight*speed*speed/22500;
    if(deform > 180)
    {
      car.shapeColor = "red";
    }else if(deform< 180 && deform > 100 )
    {
      car.shapeColor = "yellow";
    }  
    else if(deform<100)
    {
      car.shapeColor = "green";
    } 
  }
  drawSprites();
}