
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane1;
var hammer1;
var stone1;
var rubber1;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8;
var iron1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  plane1= new Plane(400,690);
  hammer1=new Hammer(400,350,150,50);
  stone1=new Stone(600,685,70,70,PI/7);
  rubber1=new Rubber(210,685,50);
  sand1=new Sand(250,675,10);
  sand2=new Sand(265,675,15);
  sand3=new Sand(355,675,15);
  sand4=new Sand(370,675,14);
  sand5=new Sand(385,675,10);
  sand6=new Sand(155,675,15);
  sand7=new Sand(170,675,14);
  sand8=new Sand(185,675,10);
  iron1=new Iron(75,655,90,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  plane1.display();
  hammer1.display();
  stone1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  iron1.display();
  drawSprites();
 
}



