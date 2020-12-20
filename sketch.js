
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const body=Matter.body
const Constraint=   Matter.Constraint

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12;
var p1;
var ground;
var chain;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;
ground=Bodies.rectangle(600,475,1200,10,{isStatic:true})
World.add(world,ground)


	//Create the Bodies Here.
b1=new Box(900,450)
b2=new Box(860,450)
b3=new Box(820,450)
b4=new Box(940,450)
b5=new Box(980,450)
b6=new Box(940,410)
b7=new Box(860,410)
b8=new Box(820,410)
b9=new Box(900,410)
b10=new Box(780,450)
b11=new Box(860,370)
b12= new Box(900,370)
p1=new Bo(200,200)
chain= new Co(p1.body,{x:200,y:250})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,1200,20)

  b1.display()
b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()
b8.display()
b9.display()
b10.display()
b11.display()
b12.display()
p1.display()
chain.display()
  drawSprites();
 
}

function mouseDragged(){
Body.setPosition(p1.body, {x: mouseX , y: mouseY});


}
function mouseReleased(){
   chain.fly();
}
