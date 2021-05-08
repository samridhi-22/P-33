const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var bgImage;
var snow=[]
var engine,world
function preload(){
  bgImage=loadImage("snow3.jpg");
}


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
var max=80
for(var i=0;i<max;i++){
snow.push(new Snow(random(0,800),random(0,800),10))
}
}

function draw() {
  background(bgImage); 
  Engine.update(engine); 
  for(var i=0;i<snow.length;i++){
snow[i].display();
snow[i].update();
  }
  drawSprites();
}