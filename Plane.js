class Plane
{
    constructor(x,y)
    {
        var option={
            'restitution' : 0.8,
            'friction': 0.3,
            'density': 0.1,
            'isStatic':true
        }
        this.body=Bodies.rectangle(x,y,800,20,option);
        World.add(world,this.body);
        
        this.width=800;
        this.height=20;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();     
    }
}

