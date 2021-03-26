class Form
{
    constructor(){
        this.button=createButton("Start");
       this.input=createInput("name");
        this.greeting = createElement("h2");
    }
    hide()
    {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement("h1","Car Racing Game")
        title.position(130,0);
       
        this.input.position(130,100);
        
        this.button.position(130,150);

        this.button.mousePressed(()=>
        {
            this.input.hide();
            this.button.hide();
            player.name= this.input.value();
            playerCount+=1
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.greeting.html("Hello " + player.name);
            this.greeting.position(250,200);
        })
    }
}