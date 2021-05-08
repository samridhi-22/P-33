class Snow{
    constructor(x,y,r){
        var options={
            restitution:0,
            friction:1.0,

        }
        this.body=Bodies.circle(x,y,r,options);
        this.r=r;
        this.image=loadImage("snow4.webp");
        World.add(world,this.body)
    }display(){
push();
translate(this.body.position.x,this.body.position.y)
imageMode(CENTER);
image(this.image,0,0,this.r,this.r);
pop();
    }
update(){
    if(this.body.position.y>height){
Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,800)})
    }
}
}