const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var myground, box1;

var box2;
var pig1;
var Log1;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    myground = new ground(600,height,1200,20);

    box1= new box(700,320,70,70);
    box2 = new box(920,320,70,70);

    pig1 = new pig(810, 350);
  // angle PI = 180 degrees, 
  
    Log1 = new Log(810,260,300, PI/2);
  /*
    box3= new box(700,320,70,70);
    box4 = new box(920,320,70,70);

    pig2 = new pig(810, 350);
  // angle PI = 180 degrees, 
    Log2= new Log(810,260,300, PI/2);
    */


    bird = new Bird(100,100)

  console.log(box1);
}

function draw(){
    background("white");
    Engine.update(engine);   
   
    myground.display();
     box1.display();
     box2.display();
    pig1.display();  
    Log1.display();
    bird.display();
    
}