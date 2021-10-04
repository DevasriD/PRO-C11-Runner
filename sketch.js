var track, track_img
var boy, boy_img
var leftblock
var rightblock
function preload(){
  //pre-load images
  track_img = loadImage("path.png")
  boy_img = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200)
  track.addImage(track_img)
  track.velocityY=3;
  boy = createSprite(200,200)
  boy.addAnimation("boyanimation", boy_img)
  boy.scale = 0.05
  leftblock = createSprite(50,200,10,400)
  leftblock.visible = false
  rightblock = createSprite(350,200,10,400)
  rightblock.visible = false
}

function draw() {
  background(0);
  if (track.y>400){
    track.y = track.height/8
  }
  boy.x = mouseX
  boy.collide(leftblock)
  boy.collide(rightblock)
  drawSprites();
}
