class Snake{
  constructor(){
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;
  
  this.total = 0;
  this.snakeTail = [];
}
  
  
  draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    ctx.fillStyle = '#fff';
    
    for(let i=0;i<this.snakeTail.length;i++){
      ctx.fillRect(this.snakeTail[i].x,this.snakeTail[i].y,scale,scale);
    }
    
    ctx.fillRect(this.x,this.y,scale,scale);
  };
  
  
  update(){
    
    for(let i=0;i<this.snakeTail.length - 1;i++){
      this.snakeTail[i] = this.snakeTail[i+1];
    }
   
   this.snakeTail[this.total - 1] = { x: this.x, y: this.y};
    
    
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
  if(this.x >= canvas.width){
    this.x = 0;
   }
  if(this.x < 0){
    this.x = canvas.width;
  }
  if(this.y >= canvas.height){
    this.y = 0;
  }
  if(this.y < 0){
    this.y = canvas.height;
   }
  };
  
  changeDirection(direction){
    switch (direction) {
      case 'top':
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;
      case 'bottom':
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
       case 'left':
         this.xSpeed = -scale * 1;
         this.ySpeed = 0;
         break;
       case 'right':
         this.xSpeed = scale * 1;
         this.ySpeed = 0;
    }
  };
  
  eating(fruit){
    if(this.x === fruit.x && this.y === fruit.y){
      effects.play();
      this.total++;
      return true;
    }
    return false;
  }
  
  eatSelf(){
    for(let i=0;i<this.snakeTail.length;i++){
      if(this.x === this.snakeTail[i].x && this.y === this.snakeTail[i].y){
        alert('Game Over');
        document.querySelector('#score').textContent = 0;
        this.total = 0;
        this.snakeTail = [];
     }
    }
  }
}