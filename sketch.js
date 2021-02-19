var fixedRect;
var movingRect;
var mother;
var games;
var sleeping;
var horse;




function setup() {
  //created the canvas/base for the game
  createCanvas(1200, 400);

  //created a fixed rect sprite
  fixedRect =createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="pink";
  fixedRect.debug = true;
 

  //created a moving rect sprite
  movingRect = createSprite(350,150,30,30);
  movingRect.shapeColor="blue";
  movingRect.debug= true;

  mother= createSprite(350,250,50,50);
  mother.shapeColor= "orange";

  games= createSprite(500,300,50,50);
  games.shapeColor= "purple";

  sleeping= createSprite(250,50,50,50);
  sleeping.shapeColor= "green";

  horse= createSprite(250,300,30,30);
  horse.shapeColor= "red";


}

function draw() {

  //gave color to the background and to clear the screen
  background("cyan");  

  //to move the moving rect along with the mouse
  movingRect.x= mouseX;
  movingRect.y=mouseY;

  if(isTouching(movingRect,games)){
    movingRect.shapeColor= "white"
    games.shapeColor= "white"
  }
  else{
    movingRect.shapeColor= "blue"
    games.shapeColor="purple"

    
  }
 
  if(isTouching(movingRect,horse)){
    movingRect.shapeColor= "white"
    horse.shapeColor= "white"

  }
  else{
    movingRect.shapeColor= "blue"
    horse.shapeColor= "red"
  }

  //display the sprites
  drawSprites();
}


//Arguments are the ones that you pass in the round brackets () of the function
//Arguments can be replaced by any values
