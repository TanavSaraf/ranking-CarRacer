var db,gameState=0,playerCount=0;
var player,game,form;
var allPlayers;

var cars,car1,car2,car3,car4
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
}