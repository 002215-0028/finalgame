var player1, player1image, background1, backgroundimage, ball, ballimage, player2, edges
var gameState = "start"
var score1, score2
score1 = 0
score2 = 0
function preload(){
  backgroundimage = loadImage("images/background.png")
  ballimage = loadImage("images/ball.png")
  player1image = loadAnimation("images/players/tile000.png", "images/players/tile001.png", "images/players/tile002.png", "images/players/tile003.png", "images/players/tile004.png", "images/players/tile005.png")
}


function setup() {
  createCanvas(580,384);
  background1 = createSprite(290, 192, 800, 400)
  background1.scale = 1.2
  background1.addImage("backgroundimage", backgroundimage)
  player1 = createSprite(480, 192, 50, 50);
  player1.scale = 0.2
  player1.addAnimation("player1image", player1image);
  player1.mirrorX(player1.mirrorX() * -1);
  player2 = createSprite(100, 192, 50, 50);
  player2.scale = 0.2
  player2.addAnimation("player1image", player1image);
  ball = createSprite(290, 192, 20, 20)
  ball.scale = 0.05
  ball.addImage("ballimage", ballimage)

}

function draw() {
  background(180,255,255); 
  edges = createEdgeSprites();
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])
  ball.bounceOff(player1)
  ball.bounceOff(player2)
  player1.bounceOff(edges[2])
  player1.bounceOff(edges[3])
  player1.bounceOff(edges[0])
  player1.bounceOff(edges[1])
  player2.bounceOff(edges[2])
  player2.bounceOff(edges[3])
  player2.bounceOff(edges[0])
  player2.bounceOff(edges[1])

  if (keyDown("space")){
    ball.velocityX = random(1, 3)
    ball.velocityY = random(1, 4)
    gameState = "play"
  }
  if (keyDown(UP_ARROW)){
    player1.y = player1.y-5;
  }
  if (keyDown(DOWN_ARROW)){
    player1.y = player1.y+5;
  }
  if (keyDown(RIGHT_ARROW)){
    player1.x = player1.x+5;
  }
  if (keyDown(LEFT_ARROW)){
    player1.x = player1.x-5;
  }
  if (keyDown("W")){
    player2.y = player2.y-5;
  }
  if (keyDown("S")){
    player2.y = player2.y+5;
  }
  if (keyDown("D")){
    player2.x = player2.x+5;
  }
  if (keyDown("A")){
    player2.x = player2.x-5;
  }
  if (ball.x<0 || ball.x>580){
    gameState = "play"
    if (ball.x<0){
      score1 = score1+1
    }
    if (ball.x>580){
      score2 = score2+1
    }
    reset();
  }
  
 
  drawSprites();
  fill("black")
  text(score1, 500, 212);
  text(score2, 120, 212)

}
function reset(){
  ball.x = 192
  ball.y = 290


}