class Monster{
    constructor(x,y){
        var options={
            isStatic:false,
            friction:1.0,
            density:0.04,

        }
        this.x=x;
        this.y=y;
        this.width=350;
        this.height=350;
        this.monster=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.image=loadImage("Images/Monster-01.png");
        World.add(world,this.monster);
    }
    display(){
        var posMonster=this.monster.position;
        var posAngle=this.monster.angle;
        push();
        rotate(posAngle);
        rectMode(CENTER);
        translate(posMonster.x,posMonster.y)
        fill("yellow");
        //rect(this.x,this.y,this.width,this.height);
        image(this.image,0,0,this.width,this.height);
        pop();
    }

}
    