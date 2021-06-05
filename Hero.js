class Hero {
  constructor(x,y,r)
	{
		var options = { 
			density: 1.5, 
			frictionAir: 0.5
		};
		//this.x=x;
		//this.y=y;
		this.r=r;
		this.image=loadImage("superhero.png");
		this.body=Bodies.circle(x,y,this.r/2, options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-100);
			ellipseMode(RADIUS);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r+150, this.r)
			pop()
			
	}
}