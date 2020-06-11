var ball,img,paddle;
function preload() {
  ballImg = loadImage("ball.png");
  paddleImg = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   ball = createSprite(200,200,10,10);
   ball.addImage(ballImg);
   ball.velocityX = 9;
   //ball.velocityY = 5;
  
   paddle = createSprite(380,200,10,10);
   paddle.addImage(paddleImg);

}

function draw() {
  background(205,153,0);
  
  if(ball.x < 0){
    ball.velocityX = ball.velocityX*-1;
  }
    
  if(ball.y < 0){
    ball.velocityY = ball.velocityX*-1;
  }
  
  if(ball.y > 400){
    ball.velocityY = ball.velocityX*-1;
  }
  
  if(ball.x===paddle.x&&ball.y===paddle.y){
    ball.velocityY = ball.velocityX*-1;
    ball.velocityX = ball.velocityX*-1;
  }
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
    paddle.y = paddle.y-5;
  {
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
    paddle.y = paddle.y+5;
  {
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

