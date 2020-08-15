class Fruit{
  constructor(){
  this.x = 0;
  this.y = 0;
}
  pickLocation(){
    this.x = (Math.floor(Math.random() * row -1)+1) * scale;
    this.y = (Math.floor(Math.random() * column -1)+1) * scale;
  }
  draw(){
    ctx.clearRect(0,0,scale,scale)
    ctx.fillStyle = "red";
    ctx.fillRect(this.x,this.y,scale,scale);
  }
}