class pig{


    constructor(x, y){    
    
        var options ={
            'restitution': 0.8,
            'friction' : 0.3,
            'density' : 1.0
        }
    
        this.body = Bodies.rectangle(x, y, 40, 40, options);
        this.width = 40;
        this.height = 40;
    
        World.add(world,this.body);
    
    
    }
    
    display(){
    
        var position = this.body.position;
        var angle= this.body.angle;
    
        push();
        translate(position.x, position.y);
        rotate(angle);       
        strokeWeight(3);
        stroke("green");
        fill("green");
        angleMode(RADIANS);
        rectMode(CENTER);
        rect(0,0, this.width,this.height);
        pop();
    }
} 