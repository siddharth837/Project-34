class Blocks{
    constructor(x,y){
        var options={
       
        friction:1.0,
        density:0.04,
        isStatic:false
        }
        this.x=x;
        this.y=y;
        this.width=60;
        this.height=60;
        this.blocks=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.color=color(random(0,255),random(0,250),random(0,250));
        World.add(world,this.blocks);
    }
    display(){
        var posBlocks=this.blocks.position;
        var angle =this.blocks.angle;
        push();
        rotate(angle)
        translate(posBlocks.x,posBlocks.y);
        rectMode(CENTER);
        stroke("black");
        fill(this.color);
        rect(0,0,this.width,this.height);
        pop();
    }
}