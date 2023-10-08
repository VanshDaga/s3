
var bgimg,splash
var gameState="wait"
var goteggimg,eggimg,eggmissedimg,playbutton,nextbutton

function preload(){

splash=loadImage("assets/BigWings!!.gif")
goteggimg=loadImage("assets/gotegg.png")
eggimg=loadImage("assets/egg.png")
eggmissedimg=loadImage("assets/eggmissed.png")
bgimg=loadImage("assets/bg.jpg")
basketimg=loadImage("assets/basket.png")
birdimg=loadImage("assets/bird.gif")

}

function setup(){
createCanvas(windowWidth,windowHeight)

playbutton=createImg("assets/start.png")
playbutton.position(width/2-120,height-230)
playbutton.size(300,300)

// move ground horizontally
ground=createSprite(10,10)
// ground.x = ground.width /2;
ground.addImage("ground",bgimg)
ground.scale=2
ground.visible=false


// invisible ground to collide the player
invisibleGround =createSprite(width/2,height-10,width,20)
invisibleGround.visible=false

basket=createSprite(70,height-40)
basket.addImage("basket",basketimg)
// basket.debug=true
basket.setCollider("circle",0,-2,40)
basket.visible=false


bird=createSprite(width/2,70)
bird.addImage(birdimg)
bird.visible=false


}

function draw(){

   if (gameState=="wait"){
      playbutton.show()
background(splash)
}

basket.collide(invisibleGround)
playbutton.mousePressed(()=>{
   playbutton.hide()
   gameState="about"
})

if (gameState=="about"){

   popabout()
}


if (gameState=="level1"){
   background(0)
   ground.visible=true
   basket.visible=true
   bird.visible=true

   movememt()
}



drawSprites()
}

function popabout(){
swal({
   title: "Enter the World of EGGs!! \n Aim of the Game is to Collect the GOLDEN EGG!!",
   text:"To win!! collect eggs and move a level UP!!",
   imageUrl:"assets/gotegg.png",
   imageSize:"200x200",
   confirmButtonText:"START ", 
    confirmButtonColor:"green"

},
function(){
   gameState="level1"
})


}


// movememt
function movememt(){

   if (keyDown("RIGHT_ARROW")){
      basket.x +=2
   }
   if (keyDown("LEFT_ARROW")){
      basket.x -=2
   }

   if (basket.x<10){
      basket.x=70
   }
   
   if (basket.x>width){
      basket.x=width-70
   }
}


// function keyPressed(){
//    if(keyCode==37){
//       basket.x -=5
//    }

//    if(keyCode==39){
//       basket.x +=5
//    }
// }
