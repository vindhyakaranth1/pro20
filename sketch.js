 var bg
 var mou,mou1,mou2
 var cat

function preload() {
    bg = loadImage("images/garden.png")
    mou1 = loadImage("images/mouse1.png")
    mou2 = loadAnimation("images/mouse2.png","images/mouse3.png","images/mouse4.png")
    cat1 = loadImage("images/cat1.png")
    cat2 = loadAnimation("images/cat2.png","images/cat3.png","images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  mou = createSprite (200,600);
  mou.addImage(mou1)
 mou.scale = 0.2
  cat = createSprite (870,600);
 cat.addImage(cat1)
 cat.scale = 0.15

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if (cat.isTouching(mou)){
cat.velocityX = 0
cat.addImage(cat1)

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode===LEFT_ARROW){
    cat.velocityX=-5
    cat.addAnimation(cat2)
    mou.addAnimation(mou2)
}



}
