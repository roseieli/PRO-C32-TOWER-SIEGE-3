const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;

var block17,block18,block19,block20,block21,block22,block23,block24,block25;

var stand1,stand2;

var polygon,polygon_img;
var ground;
var score = 0;
var bGround;
var bg = "violet"
function preload(){
    polygon_img=loadImage("polygon.png");

    getTime();
}

function setup(){
    var canvas = createCanvas(950,350);
    engine = Engine.create();
    world = engine.world;

    ground= new Ground(width/2,height-20,width,10);
    
    stand1= new Ground(450,300,250,10);
    stand2=new Ground(770,200,200,10);

    //bottomStage of stand1
    block1= new Box(360,280,30,40);
    block2= new Box(390,280,30,40);
    block3= new Box(420,280,30,40);
    block4= new Box(450,280,30,40);
    block5= new Box(480,280,30,40);
    block6= new Box(510,280,30,40);
    block7= new Box(540,280,30,40);

    //second bottomStage of stand1
    block8= new Box(390,240,30,40);
    block9= new Box(420,240,30,40);
    block10= new Box(450,240,30,40);
    block11= new Box(480,240,30,40);
    block12= new Box(510,240,30,40);

    //secondStage of stand1
    block13= new Box(420,200,30,40);
    block14= new Box(450,200,30,40);
    block15= new Box(480,200,30,40);

    //topStage of stand1
    block16= new Box(450,160,30,40);

    //bottomStage of stand2
    block17= new Box(710,170,30,40);
    block18= new Box(740,170,30,40);
    block19= new Box(770,170,30,40);
    block20= new Box(800,170,30,40);
    block21= new Box(830,170,30,40);

    //secondStage of stand2
    block22= new Box(740,130,30,40);
    block23= new Box(770,130,30,40);
    block24= new Box(800,130,30,40);

    //topStage of stand2
    block25= new Box(770,90,30,40);

    //Creating the polygon and sling


    polygon= Bodies.circle(100,200,20);
    World.add(world,polygon);

    slingshot= new SlingShot(this.polygon,{x:150,y:200});

}

function draw(){
    if(bGround){
        background(bg);
    }

    else{
        background("indigo");
    }

    Engine.update(engine);

    
    textSize(20);
    fill("cyan");
    stroke("red");
    strokeWeight(5);
    text("Score : "+score,450,100);

    textSize(15);
    fill("black");
    text("Press Space Key for Moving back the Polygon ",250,50);

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);

    ground.display();
    
    stand1.display();
    stand2.display();

    fill("red");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("lightblue");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("lightgreen");
    block13.display();
    block14.display();
    block15.display();

    fill("cyan");
    block16.display();

    fill("cyan");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    fill("lightgreen");
    block22.display();
    block23.display();
    block24.display();

    fill("red");
    block25.display();
    
    slingshot.display();

    //scoring of bottomStand of stage1
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();

    //scoring of second bottomStage of stand1
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();

    //scoring of second Stage of stand1
    block13.score();
    block14.score();
    block15.score();

    //scoring of topStage of stand1
    block16.score();

    //scoring of bottomStage of stand2
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();

    //scoring of secondStage of stand2
    block22.score();
    block23.score();
    block24.score();

    //scoring of topStage of stand2
    block25.score();
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(polygon);
    }
}

async function getTime(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();
    var dateTime = responseJSON.currentDateTime;
    var hour = dateTime.slice(11,13);
    console.log(hour);

    if(hour<=06&&hour>=18){
        bg="indigo";
    }
    else {
        bg="violet";
    }

    bGround = loadImage(bg);
    console.log(bGround);
}