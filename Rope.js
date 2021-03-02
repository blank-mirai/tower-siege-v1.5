class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.1
        }

        this.pointB = pointB;
        this.rope = Constraint.create(options);
        
        World.add(world, this.rope);
    }

    attach(body){
        this.rope.bodyA = body;
    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){
        if(this.rope.bodyA !== null){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            stroke(48, 22, 8);
            strokeWeight(3);
            line(pointB.x, pointB.y, pointA.x, pointA.y);
        }
    }
}