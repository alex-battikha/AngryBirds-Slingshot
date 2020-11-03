class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingshot = Constraint.create(options);

        this.pointB = pointB;

        World.add(world, this.slingshot);
    }

    fly() {
        this.slingshot.bodyA = null;
    }

    display(){
        if(this.slingshot.bodyA) {
            var positionA = this.slingshot.bodyA.position;
            var positionB = this.pointB;
            strokeWeight(4);
        }
    }
    
}