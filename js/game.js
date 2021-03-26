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
}