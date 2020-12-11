const Engine = Matter.Engine;
const World= Matter.World
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
function preload(){

}

function setup(){
var canvas = createCanvas(800,400)
engine = Engine.create();
world = engine.world;

block1 = new Block(330,235)
block2 =new Block(360,235)
block3 = new Block(390,235)
block4 =new Block(420,235)
block5 = new Block(450,235)
block6 =new Block(360,195)
block7 = new Block(390,195)
block8 =new Block(420,195)
block9 = new Block(390,155)

block11 = new Block(300,275)
block12 = new Block(330,275)
block13 = new Block(360,275)
block14 = new Block(390,275)
block15 = new Block(420,275)
block16 = new Block(450,275)
block17 = new Block(480,275)
ground = new Ground(400,370,800,30)
polygon=new Polygon(50,200,30)
slingshot1= new SlingShot(polygon.body,{x:70,y:200})
}

function draw(){
background(255,255,230)

Engine.update(engine);

block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
//block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()
block17.display()
polygon.display()



ground.display()
slingshot1.display()
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot1.attach(polygon.body)
    }
}