class Bo{
constructor(x,y){
var options={

restitution:0,
friction:1,
density:1.2,

}
this.body=Bodies.rectangle(x,y,40,40,options)
this.height=height
this.width= width
this.image=loadImage("polygon.png")
World.add(world,this.body)

}
display(){
var pos=this.body.position
fill("red")
imageMode(CENTER)
image(this.image,pos.x,pos.y,40,40)


}









}