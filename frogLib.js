
function Ball(){
	ball = new Sprite(scene, "smile.png", 100,100);
	ball.setSpeed(13);
	//ball.setPosition(width/2);
	
	ball.reset = function(){
	newX = Math.random() * this.cWidth;
	newY = Math.random() * this.cHeight;
	this.setPosition(newX, newY);
	}
	
	return ball;
}

function Frog(){
    tFrog = new Sprite(scene, "frog.png", 50, 50);
    tFrog.maxSpeed = 10;
    tFrog.minSpeed = -3;
    tFrog.setSpeed(0);
    tFrog.setAngle(0);
    tFrog.checkKeys = function(){
        if (keysDown[K_LEFT]){
            this.changeAngleBy(-5);
        } // end if
        if (keysDown[K_RIGHT]){
            this.changeAngleBy(5);
        } // end if
        if (keysDown[K_UP]){
            this.changeSpeedBy(1);
            if (this.speed > this.maxSpeed){
                this.setSpeed(this.maxSpeed);
            } // end if
        } // end if
        if (keysDown[K_DOWN]){
            this.changeSpeedBy(-1);
            if (this.speed < this.minSpeed){
                this.setSpeed(this.minSpeed);
            } // end if
        } // end if
    } // end checkKeys
    return tFrog;
} // end setupFrog

function Paddle1(){
	paddle1 = new Sprite(scene, "green3.jpg", 150, 20);
	//paddle1.setSize(10,100)
	//paddle1.setSize(10,100);
	//paddle1.x = 350;
	//paddle1.dy = 200;
	//paddle1.dx = 200;
	//paddle1.width = 1;
	
	//paddle1.dx = 1000;
    paddle1.maxSpeed = 20;
    paddle1.minSpeed = -20;
    paddle1.setSpeed(0);
    paddle1.setAngle(0);
    paddle1.checkKeys = function(){
 
        if (keysDown[K_W]){
            this.changeSpeedBy(1);
            if (this.speed > this.maxSpeed){
                this.setSpeed(this.maxSpeed);
            } // end if
        } // end if
        if (keysDown[K_S]){
            this.changeSpeedBy(-1);
            if (this.speed < this.minSpeed){
                this.setSpeed(this.minSpeed);
            } // end if
        } // end if
    } // end checkKeys
    return paddle1;
	
}
function Paddle2(){
	paddle2 = new Sprite(scene, "green3.jpg", 150, 20);
	paddle2.x = 1000;
	//paddle2.dy = 500;
	//paddle2.dx = 1000;
    paddle2.maxSpeed = 20;
    paddle2.minSpeed = -20;
    paddle2.setSpeed(0);
    paddle2.setAngle(0);
    paddle2.checkKeys = function(){
 
        if (keysDown[K_UP]){
            this.changeSpeedBy(1);
            if (this.speed > this.maxSpeed){
                this.setSpeed(this.maxSpeed);
            } // end if
        } // end if
        if (keysDown[K_DOWN]){
            this.changeSpeedBy(-1);
            if (this.speed < this.minSpeed){
                this.setSpeed(this.minSpeed);
            } // end if
        } // end if
    } // end checkKeys
    return paddle2;
	
}
function topWall(){
	 topwal = new Sprite(scene, "green3.jpg", 100,1000);
	 topwal.setSpeed(0);
	 topwal.setAngle(0);
		
		return topwal;
}
		 