class Form 
{
  constructor() 
  {
    this.input=createInput("name");
    this.button=createButton("PLAY")
  }

  display()
  {
    this.input.position(width/2,height/2);
    this.input.class("customInput");
    this.button.position(width/2+40,height/2+50)
    this.button.class("customButton");
    this.button.size(100,30)
  }





  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

}
