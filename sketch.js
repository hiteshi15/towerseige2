const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var engine, world;

var polygon1,polygon;

var score = 0;

var backgroundImg;
var bg3 = "bg.png";

function preload(){
  polygon1 = loadImage('polygon.png');

  getBackgroundImage();
}

function setup(){
  createCanvas(900,400); 
  engine = Engine.create();
  world = engine.world; 
  Engine.run(engine);

  polygon = Bodies.circle(130,225,20);
  World.add(world, polygon);

  slingshot = new SlingShot(this.polygon, {
    x: 100,
    y:150
   })

  // creating ground, sling, polygon;
  ground = new Ground();

  //level two 
  block8 = new Block(330,265,30,40); 
  block9 = new Block(360,265,30,40); 
  block10 = new Block(390,265,30,40); 
  block11 = new Block(420,265,30,40); 
  block12 = new Block(450,265,30,40); 
  //level three 
  block13 = new Block(360,225,30,40); 
  block14 = new Block(390,225,30,40); 
  block15 = new Block(420,225,30,40); 
  //top 
  block16 = new Block(390,185,30,40);

}

function draw(){
  if(backgroundImg){
    background(backgroundImg);
  }
  else{
    background(bg3);
  }

  ground.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  imageMode(CENTER);
  image(polygon1, polygon.position.x, polygon.position.y, 40, 40);

  slingshot.display();

  text("SCORE :"+ score, 750, 40);

  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();  

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {
    x: mouseX,
    y:mouseY
  })
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon);
  }
}

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var responseJSON = await response.json();
  //console.log(responseJSON);
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  //console.log(hour);
  if(hour >= 06 && hour <= 19){
      bg = ("bg.png");
  }
  else{
      bg = ("bg2.jpg");
  }
  backgroundImg = loadImage(bg);
}
