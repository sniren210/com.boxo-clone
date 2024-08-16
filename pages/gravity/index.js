import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import AssetContants from "@/utils/assetConstant";
import { FaAd } from "react-icons/fa";

var Example = Example || {};

Example.gravity = function () {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies;

  // create engine
  var engine = Engine.create(),
    world = engine.world;

  // create renderer
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 800,
      height: 600,
      background: "#141414",
      wireframes: false,
      
      showVelocity: true,
      showAngleIndicator: false,
    },
  });

  Render.run(render);

  // create runner
  var runner = Runner.create();
  Runner.run(runner, engine);

  // add bodies
  Composite.add(world, [
    Bodies.rectangle(400, 0, 800, 50, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    }),
    Bodies.rectangle(400, 600, 800, 50.5, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    }),
    Bodies.rectangle(800, 300, 50, 600, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    }),
    Bodies.rectangle(0, 300, 50, 600, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    }),
  ]);

  engine.gravity.y = 1;

  var stack = Composites.stack(50, 120, 11, 5, 0, 0, function (x, y) {
    return Bodies.circle(x, y, 30, {
      render: {
        fillStyle: "#87ea5c",
        sprite: {
          texture: AssetContants.circle1,
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    });
  });

  Composite.add(world, stack);

  // add mouse control
  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

  Composite.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  // fit the render viewport to the scene
  Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: 800, y: 600 },
  });

  // context for MatterTools.Demo
  return {
    engine: engine,
    runner: runner,
    render: render,
    canvas: render.canvas,
    stop: function () {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
    },
  };
};

Example.gravity.title = "Reverse Gravity";
Example.gravity.for = ">0.16.1";

const Gravity = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = Example.gravity();
    sceneRef.current = scene;

    return () => {
      if (sceneRef.current) {
        sceneRef.current.stop();
      }
    };
  }, []);

  return <div ref={sceneRef} style={{ width: "800px", height: "600px" }} />;
};

export default Gravity;
