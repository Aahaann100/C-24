class Plank{
    //inside the contructors we write the parameters who catches the argument
    constructor(x,y,height,angle){

        var boxOptions = {
            restitution : 0.4,
            friction : 100,
            density : 50
          }
        this.body = Bodies.rectangle(x,y,20,height,angle,boxOptions)
        
        this.width= 20;
        this.height = height;
        Matter.Body.setAngle(this.body,angle)
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