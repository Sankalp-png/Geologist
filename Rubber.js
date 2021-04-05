class rubber {
	constructor(x,y,r)
	{

		var options = {
			restitution : 0.3,
			friction : 5,
			density : 1
		}
		console.log("inside constructor of rubber")
		this.body=Bodies.circle(x, y, r, options)
		World.add(myWorld, this.body);
        // assign options to the rubber ball
		this.x=x;
	    this.y=y;
		this.r=r	

	}
	display()
	{ 
		console.log("inside display of rubber")
			var rubberpos=this.body.position;	
			var angle = this.body.angle	
			push()
			translate(rubberpos.x, rubberpos.y);
			rotate(angle);
			strokeWeight(4);
			stroke("black");
			fill("green");
			//draw the ellipse here to display the rubber ball
			ellipseMode(RADIUS)
			ellipse(rubberpos.x, rubberpos.y, this.r, this.r)
			pop()
	}

}