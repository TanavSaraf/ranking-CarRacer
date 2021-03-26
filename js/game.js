class Game
{
    constructor()
    {
        
    }
    getState()
    {
         var gameRef=db.ref("gameState");
         gameRef.on("value",function(data){
            gameState = data.val();
         })
        
    }
    update(state)
    {
        db.ref("gameState").set(state)
    }
    start()
    {
        if(gameState===0)
        {
            player=new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
    play()
    {
        form.hide();
        textSize(30)
        text("game Started",100,130);
        Player.getPlayersInfo()
        if(allPlayers !== undefined )
        {
            var y = 250;
            for(var p in allPlayers){
                text(allPlayers[p].name+" : "+allPlayers[p].distance,120,y)
                y=y+50
            }
        }
    }
}