 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies =Matter.Bodies;//namespace

var myengine ,myworld;
var ground;
var box1,pig1,plank1,box3,box4,box5,plank2,plank3,plank4,pig2,bird1


function setup() {
  createCanvas(1200,400);

  myengine = Engine.create();
  myworld = myengine.world

  
  
//arguments are written here in the round bracket
box1 = new Box(700,320,70,70)

box2 = new Box(920,320,70,70)
console.log(box1)

box3 = new Box(700,240,70,70)

box4 = new Box(920,240,70,70)

box5 = new Box(810,160,70,70)

ground = new Ground(600,390,1200,20)

pig1=new Pig(810,350)
pig2=new Pig(810,230)
console.log(pig1)

plank1= new Plank(810,260,300,PI/2)

plank2= new Plank(810,180,300,PI/2)
plank3= new Plank(760,120,150,PI/7)
plank4= new Plank(870,120,150,-PI/7)

console.log(plank1)

bird1=new Bird(100,100)
console.log(bird1)
  
}

function draw() {
  background(180); 
  Engine.update(myengine) 

  
box1.display()
box2.display()
ground.display()
pig1.display()
pig2.display()
plank1.display()
plank2.display()
plank3.display()
plank4.display()
box3.display()
box4.display()
box5.display()
bird1.display()
 

}