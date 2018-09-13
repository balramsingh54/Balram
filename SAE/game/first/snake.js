var cvs=document.getElementById('canvas');
var ctx=cvs.getContext('2d');
var snakeW=10;
var snakeH=10;
var dir="right";

	function drawSnake(x,y){
		///  ctx.clearRect(0,0,cvs.width,cvs.height);
		ctx.fillStyle='white';
		ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH)
		ctx.fillStyle='black';
		ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH)
		}
	// create snake 
	var len=5;
	snake=[];
	for (i=len-1;i>=0;i--){
		snake.push({
			x:i,
			y:0
			})
		}

	// control direction 

		document.addEventListener("keydown",dirControlar)
	function dirControlar(e){
		if(e.keyCode==37){
			dir="left";
		}
		else if(e.keyCode==38){
			dir="up";
		}
		else if(e.keyCode==39){
			dir="right";
		}
		else if(e.keyCode==40){
			dir="down";
		}
	}

	var food={
		x:Math.round(Math.random()*(cvs.width/snakeW)+1),
		y:Math.round(Math.random()*(cvs.height/snakeH)+1)
	}

	function drawFood(x,y){
		ctx.fillStyle='green';
		ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH)
		ctx.fillStyle='black';
		ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH)	
	}

		//draw function
	function draw(){
		ctx.clearRect(0,0,cvs.width,cvs.height);
		for(var i=0;i<snake.length;i++){
			var X=snake[i].x;
			var Y=snake[i].y;
			drawSnake(X,Y)
		} 
		drawFood(food.x,food.y);
	//snake Head 
	var snakeX=snake[0].x;
	var snakeY=snake[0].y;

	if(snakeX<0||snakeY<0||snakeX>=cvs.width/snakeW || snakeY>=cvs.height/snakeH){
		alert('Game Over');
	}

	if(dir=="right"){snakeX++}
	else if(dir=="left"){snakeX--}
	else if(dir=="up"){snakeY--}
	else if(dir=="down"){snakeY++}

	if(snakeX==food.x && snake.Y==food.y){
		food={
			x:Math.round(Math.random()*(cvs.width/snakeW-1)+1),
			y:Math.round(Math.random()*(cvs.height/snakeH-1)+1)
			}
	var newHead = {
		x:snakeX,
		y: snakeY
			}
	}
	else{
		snake.pop();
			var newHead ={
				x:snakeX,
				y:snakeY
			}
		}
	snake.unshift(newHead);
	}
	setInterval(draw,100)


