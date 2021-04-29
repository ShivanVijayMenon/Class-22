const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var ball;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  var groundOptions = {

    isStatic : true

  }
  
  var ballOptions = {

    restitution : 2.0

  }

  ground = Bodies.rectangle(200, 390, 400, 20, groundOptions);
  World.add(world, ground);

  ball = Bodies.circle(200, 200, 20, ballOptions);
  World.add(world, ball);

}

function draw() {

  background("black");

  Engine.update(engine);

  fill ("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);

  fill ("white");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

}