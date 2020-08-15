const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const scale = 10;
const row = canvas.height / scale;
const column =canvas.width / scale;

const effects = new Audio('./assets/sound/success_task.wav');

const buttons = document.querySelectorAll('.controls button')

let snake,fruit;

(function(){
  snake = new Snake();
  fruit = new Fruit();
  fruit.pickLocation();
  
  window.setInterval(()=>{
    ctx.clearRect(0,0,canvas.height,canvas.width)
    snake.draw();
    snake.update();
    fruit.draw();
    
    if(snake.eating(fruit)){
      document.querySelector('#score').textContent = snake.total;
      fruit.pickLocation();
    }
    
    snake.eatSelf();
    
  },150);
  
  
  
  
}());

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
      const direction = e.currentTarget.dataset.direction;
      snake.changeDirection(direction);
    });
  })

