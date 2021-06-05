class Rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.5,
      length: 450,
    };

    this.pointB = pointB
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }

  display() {
    if (this.rope.bodyA) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.pointB
      strokeWeight(0);
      line(pointB.x, pointB.y, pointA.x, pointA.y);

    }
  }
  fly() {
    this.rope.bodyA = null;
  }
  
  /*attach(body) {
    this.rope.bodyA = body;
  }*/

}