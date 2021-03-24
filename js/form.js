class Form
{
    constructor(){


    }
    display(){
        var title = createElement("h1","Car Racing Game")
        title.position(130,0);
        var input=createInput("name");
        input.position(130,100);
        var button=createButton("Start");
        button.position(130,150);
    }
}