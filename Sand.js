class Sand{
constructor(x,y,r) { 
    var options={ 
         restitution:1.3,
         friction:5,
         density:1 } 
    this.x=x;
    this.y=y; 
    this.r=r; 
    this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options) 
    World.add(world, this.body); }
    display()
    {   var angle=this.body.angle;
        push();
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        circle(this.x,this.y,this.r);
        pop();     
    }
}

