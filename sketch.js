
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var ball_options;
var top_wall;
var ball;
var button;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
 
  button = createImg("up.png");
  button.position(20,30);
  button.size(50,50);
  button.mouseClicked(verticalForce);

  ground =new Ground(200,390,400,20);
 
 top_wall = new Ground(350,370,200,50);
  top_wall1 = new Ground(380,350,40,200);
  
  

  ball_options={ 
  restitution : 0.7
  } 

  ball = Bodies.circle(380,200,25,ball_options);
  World.add(world,ball) ;
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
  ground.show();
  top_wall.show();
  top_wall1.show();
  
  Engine.update(engine);
}

function verticalForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
