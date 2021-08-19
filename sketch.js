var spacecraft;
var hasDocked = false;
var iss;

function preload(){

  spacebg = loadImage("spacebg.jpg"); 
  spacecraft1 = loadImage("spacecraft1.png"); //none
  spacecraft2 = loadImage("spacecraft2.png"); //both
  spacecraft3 = loadImage("spacecraft3.png"); //left
  spacecraft4 = loadImage("spacecraft4.png"); //right
  issImg = loadImage("iss.png");
}

function setup() {
  createCanvas(800,600);

  spacecraft = createSprite(400, 500, 50, 50);
  spacecraft.scale = 0.2;

  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.9;

}

function draw() {
  background(spacebg);  

  spacecraft.addImage(spacecraft1);

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1, 1);

    if(keyDown(UP_ARROW)){
      spacecraft.addImage(spacecraft2);
      spacecraft.y = spacecraft.y -1;
    }

    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraft3);
      spacecraft.x = spacecraft.x -1;
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraft4);
      spacecraft.x = spacecraft.x +1;
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraft1);
    }
  }

  console.log(spacecraft.x);
  console.log(spacecraft.y);

  if(spacecraft.y <= (iss.y +75) && spacecraft.x <= (iss.x -10)){
    hasDocked = true;
    textSize(35);
    fill("white");
    text("Docking Successful!", 300, 500);
  }

  drawSprites();
}