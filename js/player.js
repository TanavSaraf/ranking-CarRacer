class Player 
{
    constructor()
    {
        this.name = ""
        this.distance=0 
        this.index = null 
    }
    getCount()
    {
        var playerCountRef=db.ref("playerCount");
        playerCountRef.on("value",function(data){
         playerCount=data.val();
        })
    }
    updateCount(count)
    {
        db.ref("/").update({
            playerCount:count 
        })
    }
    update()
    {
        var playerIndex="players/player"+this.index;
        db.ref(playerIndex).set({
            name:this.name,
            distance:this.distance 
            

        })
    }

    static getPlayersInfo()
{
    var playersRef = db.ref("players");
    playersRef.on("value",(data)=>{
        allPlayers=data.val();
    })
}
}