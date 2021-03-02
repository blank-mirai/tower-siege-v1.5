const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25;
var rope, ball;

function setup(){
    createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 680, 1200, 20);
    box1 = new Box(425, 420, 25, 40);
    box2 = new Box(450, 420, 25, 40);
    box3 = new Box(475, 420, 25, 40);
    box4 = new Box(500, 420, 25, 40);
    box5 = new Box(525, 420, 25, 40);
    box6 = new Box(550, 420, 25, 40);
    box7 = new Box(575, 420, 25, 40);
    box8 = new Box(450, 390, 25, 40);
    box9 = new Box(475, 390, 25, 40);
    box10 = new Box(500, 390, 25, 40);
    box11 = new Box(525, 390, 25, 40);
    box12 = new Box(550, 390, 25, 40);
    box13 = new Box(475, 360, 25, 40);
    box14 = new Box(500, 360, 25, 40);
    box15 = new Box(525, 360, 25, 40);
    box16 = new Box(500, 330, 25, 40);
    box17 = new Box(750, 290, 25, 40);
    box18 = new Box(775, 290, 25, 40);
    box19 = new Box(800, 290, 25, 40);
    box20 = new Box(825, 290, 25, 40);
    box21 = new Box(850, 290, 25, 40);
    box22 = new Box(775, 260, 25, 40);
    box23 = new Box(800, 260, 25, 40);
    box24 = new Box(825, 260, 25, 40);
    box25 = new Box(800, 230, 25, 40);
    stand1 = new Stand(500, 450, 190, 20);
    stand2 = new Stand(800, 300, 140, 20);
    ball = new Ball(200, 420, 20);
    rope = new Rope(ball.body, {x : 200, y : 400});
}

function draw(){
    background(120);
    Engine.update(engine);

    ground.display();
    ball.display();
    rope.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    stand1.display();
    stand2.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}

function keyPressed(){
    if(keyCode === 32){
        ball.trajectory = [];
        Matter.Body.setPosition(ball.body, {x : 200, y : 400});
        rope.attach(ball.body);
    }
}
