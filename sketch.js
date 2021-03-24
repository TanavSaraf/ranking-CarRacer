var db,gameState=0,playerCount=0;
var player,game,form;
function setup(){
    createCanvas(500,500);
    db=firebase.database()
   game=new Game();
   game.getState();
   game.start();
}

function draw(){

}