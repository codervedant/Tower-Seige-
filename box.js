//CLASS FOR THE BOXES
class Box {
  constructor(x, y, width, height){
   var options = {
     'restitution': 0,
     'friction': 1
}
     this.width = width;
     this.height = height;
     this.body = Bodies.rectangle(x, y, this.width, this.height, options);
     World.add(world, this.body);
}


 display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    fill("orange");
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop(); 
}
}