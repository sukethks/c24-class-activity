class Bird{


    constructor(x, y, width, height){
    
    
        var options ={
            'restitution': 0.5,
            'friction' : 1.0,
            'density' : 1.5
        }
    
        this.body = Bodies.rectangle(x, y, 50,50, options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    
    
    }
    
    display(){
    
        var position = this.body.position;
        position.x = mouseX;
        position.y = mouseY;
        var angle= this.body.angle;
    
        push();
        translate(position.x, position.y)
        rotate(angle);
        fill("red");
        angleMode(RADIANS);
        rectMode(CENTER);
        rect(0,0, this.width,this.height);
        pop();
    }
    
    
    
    
    }