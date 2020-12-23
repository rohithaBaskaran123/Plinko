const Constraint=Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function setup() {
  createCanvas(480,800);
  
  ground = new Ground (240,400,50000,9)
}

function draw() {
  background("black");  
  ground.display ();
  drawSprites();
}