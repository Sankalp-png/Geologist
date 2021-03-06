class Stone {
    constructor(x, y, width, height) {

        var options = {
            'restitution' : 0.8,
			'friction' : 0.9,
            'density' : 12
         }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(myWorld, this.body)
        this.width = width;
        this.height = height;
    }

    //functions
    display() {
        var pos = this.body.position;
        var angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER);
        fill("black");
        strokeWeight(2);
        stroke("black")
        rect(0, 0, this.width, this.height);
        pop()
    }
}