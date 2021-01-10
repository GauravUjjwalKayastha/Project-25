
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject,wall1,wall1Sprite;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,50,70);
	groundObject=new Ground(width/2,600,width,20);
	box1 = new Box(1300-20,450+10,30,200);
	box2 = new Box(1000+20,450+10,30,200);
	box3 = new Box2(1150,480-5,300,30);
	//Create a Ground


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGrey");
  Engine.update(engine);
 
  
  paperObject.display();
  groundObject.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW&&paperObject.body.position.y>550) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:22*5,y:-25*7});

  
	}
}


