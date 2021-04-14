//Declaring the CONSTANTS
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//Declaring the VARIABLES
var engine,world;
var ground;
var back;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  //Creating the GROUND
  ground=new Ground(240,750,480,20);
  
  //Creating the DIVISIONS
  for(var i=0;i<=width;i=i+80){
  divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }
  
  //Creating the PLINKOS
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375));
  }
}


function draw() {
  background(0);
  Engine.update(engine);
    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    }
  drawSprites();
  ground.display();

  //Displaying the DIVISIONS
  for(var i=0;i<divisions.length;i++){
  divisions[i].display();
  }

  //Displaying the PLINKOS
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }

  //Displaying the PARTICLES
  for(var b=0;b<particles.length;b++){
   particles[b].display();
  }
}



