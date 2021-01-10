class Box2 {
  constructor(x, y, width, height) {
    var options = {
        isStatic:true
    }
   
    this.width = width;
    this.height = height;
    this.x=x;
    this.y=y;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.image=loadImage("dustbin.png");
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    
    image(this.image,0, 0, this.width, this.height+200);
    pop();
  }
}
