var lionGroup, bulletGroup, treeGroup;
var gameState = "start";


function preload(){

  bgImg = loadImage("images/bg.png")
  rabbitImg = loadImage("images/rabbit.png")
  treeImg = loadImage("images/tree.png")
  lionImg = loadImage("images/lion.png")
  bulletImg = loadImage("images/bullet.png")
}

function setup() {

  createCanvas(1200,700);
  rabbit=createSprite(200, 200, 50, 50);
  rabbit.addImage("rabbit",rabbitImg)
  rabbit.scale=0.5
//rabbit.debug=true
 rabbit.setCollider("rectangle",0,50,250,300) 

 lionGroup=new Group();
 bulletGroup=new Group();
 treeGroup=new Group();
}

function draw() {

  background(bgImg);  

  if(gameState==="start"){

  
  
  if(keyDown("space")){
    rabbit.velocityY=-10
  }
  rabbit.velocityY=rabbit.velocityY+0.8

  
  spawnTrees();
  spawnLions();
  spawnbullet();

  if(treeGroup.isTouching(rabbit)||bulletGroup.isTouching(rabbit)||lionGroup.isTouching(rabbit))
gameState="end"
  }
else if(gameState==="end"){
  reset()
}
  drawSprites();
}
function spawnTrees (){
  if(frameCount%60===0){
    var tree= createSprite(1200,680,20,20)
    tree.addImage(treeImg)
  tree.scale=0.5
    tree.velocityX= -4

    tree.lifetime=300;


    treeGroup.add(tree);
    //tree.debug=true
  }
  
}
function spawnLions (){
  if(frameCount%100===0){
    var lion= createSprite(1200,200,20,20)
    lion.y=random(50,500)
    lion.addImage(lionImg)
  lion.scale=0.3
    lion.velocityX= -4
    
lion.lifetime=300;

    //lion.debug=true
    lion.setCollider("rectangle",0,50,200,300)
    lionGroup.add(lion);
  }
  
}
function spawnbullet (){
  if(frameCount%150===0){
    var bullet= createSprite(1200,200,20,20)
    bullet.y=random(5,500)
    bullet.addImage(bulletImg)
  bullet.scale=0.3
    bullet.velocityX= -5

    bullet.lifetime=300;

    //bullet.debug=true
    bullet.setCollider("circle",-130,20,35)
bulletGroup.add(bullet);

  }
  
}
function reset(){
  treeGroup.setVelocityXEach(0)
  bulletGroup.setVelocityXEach(0)
  lionGroup.setVelocityXEach(0)
  rabbit.velocityY=0

 fill ("purple")
  textSize(100)
  text("GaMe OvEr!!",width/2,height/2)
  

}