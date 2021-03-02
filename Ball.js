class Ball{
    constructor(x, y, r){
        var options = {
            density : 1,
            frictionAir : 0.005
        }

        this.image = loadImage("polygon.png")
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("black");
        ellipse(0, 0, this.r, this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, 60, 60);
        pop();
    }
}