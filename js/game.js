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
        car1=createSprite(100,200)
        car2=createSprite(300,200)
        car3=createSprite(500,200)
        car4=createSprite(700,200)
        cars=[car1,car2,car3,car4]
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
            console.log(allPlayers)
            for(var p in allPlayers){
                if(p === "player" + player.index)
                {
                    fill("Red")
                }else
                {
                    fill("Black")
                }
                text(allPlayers[p].name+" : "+allPlayers[p].distance,120,y)
                y=y+50
            }
        }
        if(keyDown(UP_ARROW)&&player.index!==null)
        {
            player.distance+=10;
            player.update()
        }
    }
}