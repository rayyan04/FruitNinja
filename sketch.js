// Creating Variables
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score
var sword
var monster1,monster2
var fruitGroup, enemyGroup

function preload(){
// Loading Images
swordImage=loadImage("sword.png")
fruit1=loadImage("fruit1.png")
fruit2=loadImage("fruit2.png")
fruit3=loadImage("fruit3.png")
fruit4=loadImage("fruit4.png")
gameOverImg=loadImage("gameover.png")
monster1=loadImage("alien1.png")
monster2=loadImage("alien2.png")
knifeSound=loadSound("knifeSwooshSound.mp3")
gameOversound=loadSound("gameover.mp3")
}

function setup() {
createCanvas(500, 500);
//creationg sprite and giving animation and scale to it
sword1= createSprite(250,455);
sword1.addImage("sword",swordImage);
sword1.scale=0.7
//score
  score=0
  
  gameOver=createSprite(250,250)
  gameOver.addImage(gameOverImg)
  gameOver.scale=1.8
  gameOver.visible=false
  
 fruitGroup=new Group() 
 enemyGroup=new Group() 
}

function draw() {
background("lightblue");
//displaying score

 //sorting commands based on the gameState 
if (gameState===PLAY){
sword1.y= World.mouseY
sword1.x= World.mouseX
 
  

if (sword1.isTouching(fruitGroup)){
fruitGroup.destroyEach()
  score=score+2  
knifeSound.play()
}
if (sword1.isTouching(enemyGroup)){
gameOversound.play()
  gameState=END

}
}
else if (gameState === END) {
gameOver.visible=true
fruitGroup.destroyEach()
enemyGroup.destroyEach()
}
  
drawSprites();
text("Score: "+ score, 400,30);
fruits ();
monsters ();
}

//Function for the fruits
function fruits() {
if (World.frameCount%80===0){
fruit=createSprite(400,200,20,20)
fruit.scale=0.2
r=Math.round(random(1,4))
  if (r==1) {
    fruit.addImage(fruit1)
} else if (r==2){
  fruit.addImage(fruit2) 
} else if (r==3){
  fruit.addImage(fruit3) 
} else if (r==4){
  fruit.addImage(fruit4) 
}
position=Math.round(random(1,2))
if (position==1)  
{
  fruit.x=400
  fruit.velocityX=-(7+(score/4))
}  
 else
{
  if(position==2){
    fruit.x=0
    fruit.velocityX=(7+(score/4))
  }
}   
fruit.y=Math.round(random(50,340))

fruit.setLifetime=100
  
fruitGroup.add(fruit)
  
}
}
//creating function for monsters
function monsters() {
if (World.frameCount%200===0){
monster=createSprite(400,200,20,20)
monster.addImage(monster1)
r=Math.round(random(1,2))
  if (r==1) {
    monster.addImage(monster1)
} else if (r==2){
  monster.addImage(monster2)
}
monster.y=Math.round(random(100,300))
monster.velocityX=-(8+(score/10))
monster.setLifetime=50 
  
enemyGroup.add(monster)
}
}
