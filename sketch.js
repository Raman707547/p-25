
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	dust= loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
d1= new Dustbin(1300,665,170,20);
d2=new Dustbin(1205,615,20,120);
d3=new Dustbin(1395,615,20,120);
ground= new Ground(850,680,1700,20);
paper= new Paper(500,360,70);
	
  
}


function draw() {
	Engine.update(engine);
	background("white");
	d1.display();
	d2.display();
	d3.display();
	ground.display();
  paper.display();
  image(dust,1185,560,230,130)
  
  
 
 
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:350,y:-200});
	}
}



