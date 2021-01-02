
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,obstacle;
var score,ground,survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey=createSprite(80,290,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.2;
  
 
 obstacleGroup=createGroup();
foodGroup=createGroup();
  
  score=0;
  survivalTime=0;
}

function draw() {
  
background("lightBlue");
   
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  monkey.velocityY = monkey.velocityY+0.9;
  monkey.collide(ground);
  
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  
   spawnObstacle();
   Banana();

  
 drawSprites();
stroke(30);
text("Score:",score,10,400);
text("survivalTime:",survivalTime,20,400);
}
function spawnObstacle(){
  if(frameCount%100===0){
    obstacle=createSprite(400,310,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    
    obstacle.velocityX=-8;
    obstacle.lifetime=50;
    
    obstacleGroup.add(obstacle);
  }
}
function Banana(){
  if(frameCount%60===0){

  banana=createSprite(250,150);
  banana.addImage(bananaImage);
  banana.scale=0.1;
    
  banana.velocityX=-8;
  banana.lifetime=50;
 
    
    foodGroup.add(banana);
  }
}






