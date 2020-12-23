class Block {
  constructor(x,y,width,height) {
    var options = {
        'restitution': 0.4,
        'friction': 0
    }
    this.visibility = 255;
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){
      console.log("speed of the body", this.body.speed);
      var angle = this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
      console.log("going inside if");
    }
    else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility-5;
      pop();
      console.log("going inside else");
    }
  }

  score(){
    if(this.visibility<0 && this.visibility> -105){
      score++;
    }
  }
};
