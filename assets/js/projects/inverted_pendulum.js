var init=function(){var e=Matter.Events,t=Matter.Engine,n=Matter.Body,r=Matter.Render,a=Matter.World,i=Matter.Bodies,o=Matter.Constraint,d=t.create(),c=r.create({element:document.getElementById("animation-container"),engine:d,options:{width:800,height:500}}),l=i.circle(200,200,50,{density:.04,frictionAir:.05}),y=i.rectangle(200,450,100,50),s=i.rectangle(400,500,810,60,{isStatic:!0});a.add(d.world,o.create({bodyA:y,bodyB:l})),a.add(d.world,[l,y,s]),e.on(d,"beforeUpdate",function(e){console.log("beforeUpdate"),e.timestamp<1e3?n.applyForce(y,{x:0,y:0},{x:5e-4,y:0}):n.applyForce(y,{x:0,y:0},{x:.001,y:0})}),t.run(d),r.run(c)};window.addEventListener("load",init);