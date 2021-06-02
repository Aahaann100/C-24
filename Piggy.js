class Pig{
    //inside the contructors we write the parameters who catches the argument
    constructor(x,y){

        var boxOptions = {
            restitution:1
          }
        this.body = Bodies.rectangle(x,y,50,50,boxOptions)
        
        this.width=50;
        this.height = 50;
        World.add(myworld, this.body)
        
    }

    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
      fill("green")
        
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}