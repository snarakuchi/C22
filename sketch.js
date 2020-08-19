const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,bubble,box,ball;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var bubble_options = {
        restitution : 1
    }

    var box_options = {
        restitution : 2
    }

    var ball_options = {
        restitution : 2
    }

    ground = Bodies.rectangle(400,700,800,20,ground_options);
    World.add(world,ground);
    bubble = Bodies.circle(200,100,40,bubble_options);
    World.add(world,bubble);
    box = Bodies.rectangle(400,200,80,100,box_options);
    World.add(world,box);
    ball = Bodies.circle(600,200,80,ball_options);
    World.add(world,ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("yellow");
    rect(ground.position.x,ground.position.y,800,20);
    ellipseMode(RADIUS);
    fill("blue");
    ellipse(bubble.position.x,bubble.position.y,40,40);
    fill("red");
    rect(box.position.x,box.position.y,box.width,box.height);
    fill("green");
    ellipse(ball.position.x,ball.position.y,20,20);
}