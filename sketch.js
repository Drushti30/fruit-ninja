var PLAY = 1;
var END = 0;
var gameState = 1;

var fruit,enemy,sword,fruitGroup,enemyGroup;
var swordImage,virusImage,fruit1,fruit2,fruit3,fruit4,
    gameOverImage;


function preload(){
  
  swordImage = loadImage("sword.png");
  virusImage = loadAnimation("alien1.png","alien2.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  gameOverImage = loadImage("gameover.png");
 
}


function setup() {
  createCanvas(400,400);
  
  
  sword = createSprite(20,400,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.7;
  sword.setCollider("rectangle",0,0,40,40);
  sword.debug = true;
  
  
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  
  
  score = 0;

}

function draw(){
  background("black");
  
  if(gameState === PLAY) {
    sword.x=mouseX
    sword.y=mouseY
    fruits();
    virus();
    
   
  }
  
  drawSprites()

}

function fruits(){
  if(frameCount%100===0){
    fruit=createSprite(400,random(10,350),10,10)
    var a = Math.round(random(1,4))
    switch(a){
      case 1 :fruit.addImage(fruit1);break;
      case 2 :fruit.addImage(fruit2);break;
      case 3 :fruit.addImage(fruit3);break;
      case 4 :fruit.addImage(fruit4);break;
      default:break
      
    }
  
   fruit.velocityX=-4
   fruit.scale=0.3   
      
  }
    
  
}


function virus(){
  if(frameCount%70===0){
    enemy=createSprite(400,random(10,350),10,10)
    enemy.addAnimation("enemy",virusImage)
      
  
   enemy.velocityX=-4
   enemy.scale=0.3   
      
  }
    
  
}



