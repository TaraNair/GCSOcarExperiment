var car, wall;
var speed, weight
var deformation

/*function preload() {
  ball_img = loadImage("ball.png");
  paddle_img = loadImage("paddle.png");
}*/
function setup() {
  createCanvas(1300, 400);
  
  speed = random(55, 90)
  weight = random(400, 1500)

  car = createSprite(50, 200, 50, 50);
  //car.addImage("ball", ball_img);
  
  wall = createSprite(1200, 200, 60, 200);
  //wall.addImage("paddle", paddle_img);
   
  car.velocityX = speed;
}

function draw() {
  background(0,0,0);
  
 /*deformation = (0.5*weight*speed*speed)/22500
 
  if(car.x - wall.x < car.width/2 + wall.width/2
  && wall.x - car.x < car.width/2 + wall.width/2
  && car.y - wall.y < car.height/2 + wall.height/2
  && wall.x - car.x < car.height/2 + wall.height/2
    )  
  {
    car.velocityX = 0;
    car.x = wall.x - wall.width/2 - car.width/2;
  } */
  
  if (wall.x - car.x < (car.width + wall.width)/2) {
    car.velocityX = 0;
    car.x = wall.x - wall.width/2 - car.width/2;

    var deformation = 0.5 * weight * speed * speed / 22509

    if (deformation > 180) {
      car.shapeColor = color(255, 0, 0);
    }

    if (deformation < 180 && deformation > 100) {
      car.shapeColor = color(230, 230, 0);
    }

    if (deformation < 100) {
      car.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}

