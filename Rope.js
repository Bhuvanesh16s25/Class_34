class Rope {
    constructor(bodyA, pointB) {
        var option = {
            bodyA: bodyA,
            pointB: pointB,
            Stiffness: 1.2,
            length: 100
        }
        this.pointB = pointB;
        this.rope = Constraint.create(option)
        World.add(world, this.rope);
    }

    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }

}