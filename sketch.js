
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin; 

function preload()
{
	dustbin=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 660, width, 10 , {isStatic:true} );
	World.add(world, ground);
	

paper = new Paper (50,380,40); 
	
box1 = new Box (800,648,140,20);
box2 = new Box (740,600,20,120);
box3 = new Box (860,600,20,120);





Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
 box1.display();
 box2.display();
 box3.display();

paper.display();
image(dustbin,725,510,150,150);
rectMode(CENTER)
 fill("yellow")
 rect(ground.position.x,ground.position.y,width,10);
 drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		
	Matter.Body.applyForce(paper.body,paper.body.position,{x:390,y:-390});
}
}
