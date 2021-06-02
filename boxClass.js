class Box{
    //inside the contructors we write the parameters who catches the argument
    constructor(x,y,width,height){

        var boxOptions = {
            restitution:0.4
          }
        this.body = Bodies.rectangle(x,y,width,height,boxOptions)
        
        this.width=width;
        this.height = height;
        World.add(myworld, this.body)
        
    }

    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        strokeWeight(3)
        stroke("brown")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}