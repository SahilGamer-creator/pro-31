
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ground;
var division1,division2,division3,division4,division5,division6,division7;
var particles = [];
var plinkos = [];
var divisions = [];
var width;
var divisionHeight = 300;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,790,800,20);
	//division1 = new Divisions(240,670,5,300);
	//division2 = new Divisions(320,670,5,300);
	//division3 = new Divisions(400,670,5,300);
	//division4 = new Divisions(480,670,5,300);
	//division5 = new Divisions(160,670,5,300);
	//division6 = new Divisions(80,670,5,300);
	//division7 = new Divisions(0,670,5,300);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
 // drawSprites();
 
 // division1.display();
  //division2.display();
  //division3.display();
  //division4.display();
  //division5.display();
  //division6.display();
  //division7.display();
 
  for(var k = 0; k<=width;k=k+80){
	divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));

}


// for(var j =40;j<=width;j=j+50)
// {
 //plinkos.push(new Plinko(j,75));
  //}
 //for(var j=15;j<=width-10;j=j+50)
 //{plinkos.push(new Plinkos(j,175));}
}

