class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:45
        }
        this.sling=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.sling);
    }
    display(){
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(4);
            line(pointA.x , pointA.y , pointB.x , pointB.y);
            pop()
            }
        
        
}
