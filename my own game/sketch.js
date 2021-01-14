const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var striker,board,boardImg;
var whitePic1,whitePic2,whitePic3,whitePic4,whitePic5,whitePic6,whitePic7,whitePic8,whitePic9;
var blackPic1,blackPic2,blackPic3,blackPic4,blackPic5,blackPic6,blackPic7,blackPic8,blackPic9;
var redPic;
var gameState=0
var database;
var form;

function preload() {
   
    boardImg = loadImage("sprites/carrom board img.png");
}

function setup(){
    var canvas = createCanvas(1000,1000);
    database = firebase.database();
    engine = Engine.create();
   
    world = engine.world;

striker= new Striker(200,200)
  


blackPic1=new BlackPieces(20,20)
blackPic2=new BlackPieces(20,20)
blackPic3=new BlackPieces(20,20)
blackPic4=new BlackPieces(20,20)
blackPic5=new BlackPieces(20,20)
blackPic6=new BlackPieces(20,20)
blackPic7=new BlackPieces(20,20)
blackPic8=new BlackPieces(20,20)
blackPic9=new BlackPieces(20,20)

whitePic1=new WhitePieces(20,20)
whitePic2=new WhitePieces(20,20)
whitePic3=new WhitePieces(20,20)
whitePic4=new WhitePieces(20,20)
whitePic5=new WhitePieces(20,20)
whitePic6=new WhitePieces(20,20)
whitePic7=new WhitePieces(20,20)
whitePic8=new WhitePieces(20,20)
whitePic9=new WhitePieces(20,20)

redPic1= new RedPieces(20,20)
   // slingshot = new SlingShot(bird.body,{x:200, y:100});
}

function draw(){
    background(boardImg);
    database=firebase.database();
    Engine.update(engine);
  
//if(){}




if(gameState=0){

  form= new Form();
  form.display();  


}

if(gameState=1){

  form.hide();
redPic1.x=200
redPic1.y=200

}

//if(gameState=2){



//}
    striker.display();

    blackPic1.display();
    blackPic2.display();
    blackPic3.display();
    blackPic9.display();
    blackPic4.display();
    blackPic5.display();
    blackPic6.display();
    blackPic7.display();
    blackPic8.display();

    whitePic1.display();
    whitePic2.display();
    whitePic3.display();
    whitePic9.display();
    whitePic4.display();
    whitePic5.display();
    whitePic6.display();
    whitePic7.display();
    whitePic8.display();
    
    redPic1.display();

}

//function mouseDragged(){
  //  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
//}


//function mouseReleased(){
  //  slingshot.fly();
//}