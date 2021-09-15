
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ball_options,ground,wall1,wall2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ball_options = {
		restitution : 0.3,
		density:1.2,
		friction:0,
		isStatic : false

	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ball = Bodies.circle(50,350,35,ball_options);
	World.add(world,ball);

	ground = new Ground(400,700,800,10);
	wall1 = new Ground(500,640,10,110);
	wall2 = new Ground(690,640,10,110);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,35);

  ground.show();
  wall1.show();
  wall2.show();
  
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball,ball.position,{x:200,y:-200});
  
	}
}



