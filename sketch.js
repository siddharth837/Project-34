const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world
var bgImage;
var ground;
var man;
var slingshot;
var blocks,blocks1,blocks2;
var blocks3,blocks4;
var blocks5,blocks6;
var blocks7,blocks8,blocks9,blocks10,blocks11;
var blocks13,blocks14,blocks15,blocks16,blocks17;
var blocks18,blocks19,blocks20,blocks21,blocks22,blocks23,blocks24;
function preload() {
//preload the images here
bgImage=loadImage("Images/GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine=Engine.create();
  world=engine.world;
  ground =new Ground(930,390,2500,20);
  man=new SuperMan(296,183,350,350);
  slingshot=new Slingshot(man.body,{x:296,y:183})
  monster=new Monster(1210,8);

  blocks=new Blocks(732,240);
  blocks22=new Blocks(732,300);
  blocks23=new Blocks(672,300);

  blocks1=new Blocks(792,240);
  blocks7=new Blocks(792,180);
  blocks16=new Blocks(792,300);

  blocks2=new Blocks(852,240);
  blocks8=new Blocks(852,180);
  blocks12=new Blocks(852,120);
  blocks17=new Blocks(852,300);
  
  blocks3=new Blocks(912,240);
  blocks9=new Blocks(912,180);
  blocks13=new Blocks(912,120);
  blocks15=new Blocks(912,60);
  blocks18=new Blocks(912,300);

  blocks4=new Blocks(972,240);
  blocks10=new Blocks(972,180);
  blocks14=new Blocks(972,120);
  blocks19=new Blocks(972,300);

  blocks5=new Blocks(1032,240);
  blocks11=new Blocks(1032,180);
  blocks20=new Blocks(1032,300);

  blocks6=new Blocks(1092,240);
  blocks21=new Blocks(1092,300);
  blocks24=new Blocks(1152,300);
  //blocks2=new Blocks(700,345);
}

function draw() {
  background(bgImage);
 Engine.update(engine)
  textSize(40);
  text(mouseX+","+mouseY,mouseX,mouseY);
  fill("black");
  textSize(50)
  
  man.display();
  ground.display();
  slingshot.display();
  monster.display();
  blocks.display();
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();
  blocks7.display();
  blocks8.display();
  blocks9.display();
  blocks10.display();
  blocks11.display();
  blocks12.display();
  blocks13.display();
  blocks14.display();
  blocks15.display();
  blocks16.display();
  blocks17.display(); 
  blocks18.display();
  blocks19.display();
  blocks20.display();
  blocks21.display();
  blocks22.display();
  blocks23.display();
  blocks24.display();
  mouseDragged();
  
//drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(man.body,{x:mouseX,y:mouseY})
}
