
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var p1;
var p2;
var p3;
var p4;
var p5;
var block1;
var block2;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
    var plane_options={
		isStatic: true
	  }
	  plane = Bodies.rectangle(600,height,1200,20,plane_options);
	  World.add(world,plane);
	  block1=Bodies.rectangle(100,400,150,20,plane_options);
	  World.add(world,block1);
	  block2=Bodies.rectangle(400,400,150,20,plane_options);
	  World.add(world,block2);
  
	  //crie múltiplos de corpos de partículas
	  var particle_options = {
		restitution:0.4,
		friction:0.02
	  }
  
	  p1 = Bodies.circle(220,10,10,particle_options);
	  World.add(world,p1);
	  p2 = Bodies.circle(220,10,10,particle_options);
	  World.add(world,p2);
	  p3 = Bodies.circle(225,10,10,particle_options);
	  World.add(world,p3);
	  p4 = Bodies.circle(230,10,10,particle_options);
	  World.add(world,p4);
	  p5 =Bodies.circle(230,10,10,particle_options);
	  World.add(world,p5);
	  

	Engine.run(engine);
  
}
    fill("brown");
    rectMode(CENTER);
    ellipseMode(RADIUS);

function draw() {
  rectMode(CENTER);
  background("lightgreen");
  
  rect(plane.position.x,plane.position.y,1200,20);
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);
  
  ellipse(p1.position.x,p1.position.y,10);
  ellipse(p2.position.x,p2.position.y,10);
  ellipse(p3.position.x,p3.position.y,10);
  ellipse(p4.position.x,p4.position.y,10);
  ellipse(p5.position.x,p5.position.y,10);

  drawSprites();
 
}



