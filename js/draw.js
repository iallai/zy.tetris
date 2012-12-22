/**********************************************************
绘制模块
**********************************************************/

var mDraw={};

//清除矩形区域
mDraw.clear=function(l,t,w,h){
	CTX.clearRect(l,t,w,h);
};

//绘制一个图像
mDraw.image=function(s,l,t,w,h){
	CTX.drawImage(eSRC.img[s],l,t,w,h);
};

//绘制一个文本
mDraw.text=function(t,x,y){
	CTX.fillText(t,x,y);
};

//绘制一个矩形
mDraw.rect=function(l,t,w,h,c){
	CTX.fillStyle='rgb('+c+')';
	CTX.fillRect(l,t,w,h);
};

//绘制一个俄罗斯方块
mDraw.tetris=function(n,l,t){
	var s=22;
	var img=eSRC.img['rect.jpg'];
	
	switch (n){
	case 0:
		CTX.drawImage(img,30*n,0,30,30,l,t,s,s);
		CTX.drawImage(img,30*n,0,30,30,l+s*1,t,s,s);
		CTX.drawImage(img,30*n,0,30,30,l+s*2,t,s,s);
		CTX.drawImage(img,30*n,0,30,30,l+s*3,t,s,s);
		break;
	case 1:
		CTX.drawImage(img,30*n,0,30,30,l+s,t,s,s);
		CTX.drawImage(img,30*n,0,30,30,l,t+s,s,s);
		CTX.drawImage(img,30*n,0,30,30,l+s,t+s,s,s);
		CTX.drawImage(img,30*n,0,30,30,l,t+s*2,s,s);
		break;
	case 2:
		break;
	case 3:
		break;
	case 4:
		break;
	case 5:
		break;
	case 6:
		break;
	}
};

mDraw.grid=function(n,l,t){
	var s=22;
	var img=eSRC.img['rect.jpg'];
	
	//console.log(t);
	CTX.drawImage(img,30*n,0,30,30,l,t,s,s);
};






