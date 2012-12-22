/**********************************************************
当前方块类
**********************************************************/



function clsTetris(){
	this.left=10;
	this.top=40;
	this.z=2;
}

clsTetris.prototype.draw=function(){
	mDraw.tetris(1,this.left,this.top);
};

clsTetris.prototype.movedown=function(){
	
	this.top+=22;
};

clsTetris.prototype.moveleft=function(){
	this.left=this.left-22;
};

clsTetris.prototype.moveright=function(){
	this.left+=22;
};


