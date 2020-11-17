const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ground

var particles=[]
var plinkos=[]
var divisions=[]

var divsionHeight=300

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;


        
ground=new Ground(240,795,800,10)


}

function draw(){
  background(0)

  Engine.update(engine)

  for(var k=0; k <=width;k-k+80)
  {
divisions.push(new Divisions(k,height-divsionHeight/2,10,divsionHeight))



  }

  for(var i=40; i<=width;i=i+50)
  {

plinkos.push(new Plinko(i,75))


  }

  
  ground.display()
  

}