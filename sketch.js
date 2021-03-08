const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400, 700, 800, 10);
    box1 = new Box(600, 200, 50, 50);
    box2 = new Box(600, 100, 50, 50);
    box3 = new Box(600, 50, 50, 50);
    box4 = new Box(600, 200, 50, 50);
    box5 = new Box(600, 200, 50, 50);
    box6 = new Box(600, 200, 50, 50);
    box7 = new Box(600, 50, 50, 50);

    ball = new Ball(400, 500, 50, 50);
    rope = new Rope(ball.body, { x: 500, y: 250 })

}

function draw() {
    background(255, 255, 255);

    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    ball.display();
    rope.display();
}