var background2,ironman,robo1,robo2,robo3,robo7,birdrobo,dogrobo,robo4,bullet,SCORE
var backgroundImage,ironmanImage,bulletImage,robo1Image,robo2Image,robo3Image,robo4Image,birdroboImage,dogroboImage
SCORE=0
function preload(){
  backgroundImage=loadImage("background 2.jpg")
  ironmanImage=loadImage("ironman.png")
  bulletImage=loadImage("bullet.png")
  robo1=loadImage("robo1.png")
  robo2=loadImage("robo2.png")
  robo3=loadImage("robo3.png")
  robo7=loadImage("robo7.png")
  birdrobo=loadImage("birdrobo.png")
  dogrobo=loadImage("dogrobo.png")
  
}
function setup() {
  createCanvas(1200,900);
  background1=createSprite(600,450,1200,900)
  background1.addImage(backgroundImage)
  background1.velocityX=-3
  background.scale=1
  
  ironman=createSprite(100,100,20,20)
  ironman.addImage(ironmanImage)
  ironman.scale=0.23
  
 roboGroup = new Group()
 bulletGroup = new Group() 
}

function draw() {
  background(220);
  
  if(background1.x<250){
    background1.x=700
  }
 
  if(keyDown(UP_ARROW)){
    ironman.y=ironman.y-7
  }
  
  if(keyDown(DOWN_ARROW)){
    ironman.y=ironman.y+7
  }
  
                                            
  if(keyDown("space")){
      bullet ()
 
    
  }
  
  if(bulletGroup.isTouching(roboGroup)){
    roboGroup.destroyEach()
    bulletGroup.destroyEach()
    SCORE=SCORE+10
  }
  robo();
  
  drawSprites()
  fill("black")
  textSize(25) 
  text("SCORE: "+SCORE,1000,50)

}

function bullet(){
  var bullet=createSprite(130,80,20,20)
  bullet.addImage(bulletImage)
  bullet.scale=0.1
  bullet.velocityX=7
  bullet.y=ironman.y
  bulletGroup.add(bullet)

}

function robo(){
  if(World.frameCount % 150===0){
    var robo = createSprite(1200,Math.round(random(50,550)),20,20)
    rand=Math.round(random(1,6))
    switch(rand){
      case 1:robo.addImage(robo1)
        break
        case 2:robo.addImage(robo2)
        break
        case 3:robo.addImage(robo3)
        break
        case 4:robo.addImage(robo7)
        break
        case 5:robo.addImage(birdrobo)
        break
        case 6:robo.addImage(dogrobo)
        break
    }
    robo.velocityX=-3
        robo.scale=0.3
        robo.lifetime=400
       roboGroup.add(robo) 
      }
}