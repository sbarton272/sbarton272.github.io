/**
 * The inversted pendulum is a basic control theory example
 *
 * Working from matter.js
 */

var init = function() {
    // module aliases
    var Events = Matter.Events,
      Engine = Matter.Engine,
      Body = Matter.Body,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Constraint = Matter.Constraint;

    // create an engine
    var engine = Engine.create();

    // create a renderer
    var render = Render.create({
        element: document.getElementById('animation-container'),
        engine: engine,
        options: {
            // TODO proper widths
            width: 800,
            height: 500,
        },
    });

    // create two boxes and a ground
    var pendulum_weight = Bodies.circle(200, 200, 50, { density: 0.04, frictionAir: 0.05});
    var car = Bodies.rectangle(200, 450, 100, 50);
    var ground = Bodies.rectangle(400, 500, 810, 60, { isStatic: true });

    World.add(engine.world, Constraint.create({
        bodyA: car,
        bodyB: pendulum_weight,
    }));

    // add all of the bodies to the world
    World.add(engine.world, [pendulum_weight, car, ground]);

    // Setup keyboard interaction
    Events.on(engine, 'beforeUpdate', function(event) {
        console.log('beforeUpdate')
        if (event.timestamp < 1000) {
            Body.applyForce(car, { x: 0, y: 0 }, {x: 0.0005, y: 0});
        } else {
            Body.applyForce(car, { x: 0, y: 0 }, {x: 0.001, y: 0});
        }
    });

    // run the engine
    Engine.run(engine);

    // run the renderer
    Render.run(render);
}

window.addEventListener('load', init)
