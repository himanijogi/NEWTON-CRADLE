class Bob {
    constructor(x,y) {
      var options = {
          isStatic:false,
         restitution:1.5,
          friction:3,
          density:0.8
      }
      this.body = Bodies.circle(x,y,20,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(CENTER);
      fill(9,8,10);
      ellipse(0, 0, this.width );
      pop();
    }
  };
