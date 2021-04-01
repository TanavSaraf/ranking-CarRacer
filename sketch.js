var db,gameState=0,playerCount;
var player,game,form;
var allPlayers;

var cars,car1,car2,car3,car4
var car1Img,car2Img,car3Img,car4Img,trackImg,groundImg

function preload()
{
    car1Img=loadImage("images/car1.png");
    car2Img=loadImage("images/car2.png");
    car3Img=loadImage("images/car3.png");
    car4Img=loadImage("images/car4.png");
    trackImg=loadImage("images/track.jpg");
    groundImg=loadImage("images/ground.png");
}

function setup(){
    createCanvas(displayWidth-30,displayHeight -120);
    db=firebase.database()
   game=new Game();
   game.getState();
   game.start();

}

function draw(){
    if(playerCount===4)
    {
       game.update(1) 
    }
    if(gameState===1)
    {
        clear()
        game.play();
    }
    if(gameState===2)
    {
        game.end();
    }
   
    
}