var jungle,jungleImage;
var tom,tomImage,tomAnimation;
var jerry,jerryAnimaton,jerryImage;

function preload() {
    //load the images here
  
  jungleImage = loadImage("garden.png");
  
  tomImage = loadImage("tomOne.png")
  
  tomImage2 = loadImage("tomFour.png")
  
  jerryImage=loadImage("jerryThree.png")
  
  tomAnimation = loadAnimation("tomTwo.png","tomThree.png")
  
  jerryAnimation = loadAnimation("jerryOne.png","jerryTwo.png")

}

function setup(){
    createCanvas(1000,800);
  
  jungle=createSprite(500,400);
  jungle.addImage("JUNGLE",jungleImage);
  
  tom=createSprite(800,600);
  tom.addImage("TOM",tomImage);
  tom.scale=0.2;
  tom.addImage("TOM2",tomImage2);
  
  tom.setCollider("rectangle",0,0,1000,800);
  tom.debug=true;
  
  jerry=createSprite(150,600);
  jerry.addAnimation("JERRY",jerryAnimation);
  jerry.scale=0.2;
  jerry.debug=true;
  jerry.setCollider("rectangle",0,0,500,1000);
  jerry.addImage("jerryPoint",jerryImage);
  
}

function draw() {

    background(255);
  
  keyPressed();
  
  if(tom.isTouching(jerry)){
    tom.velocityX=0;
    jerry.changeImage("jerryPoint");
    tom.changeImage("TOM2")
  }


    drawSprites();
}


function keyPressed(){

    if (keyCode ===LEFT_ARROW){
      tom.velocityX=-5;
      tom.addAnimation("tomRunning",tomAnimation);
      tom.changeAnimation("tomRunning")
    }

}
