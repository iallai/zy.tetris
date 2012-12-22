/**********************************************************
启动主定时器
浏览器最快支持4ms
**********************************************************/
eTIMER=setInterval(timFrame,400);

/**********************************************************
主时间帧
背景层(优先于对象层绘制，必须覆盖整个canvas区域)
对象层(按Z序从小到大绘制，同Z序则按位置顺序绘制)
**********************************************************/
function timFrame(){
	if (typeof(oLoadingBar)=='object'){
		oLoadingBar.files=3800;
		oLoadingBar.loaded++;
	}
	if (typeof(oTetris)=='object'){
		oTetris.movedown();
	}
	
	
	//oFps.frame++;
	
	mObj.draw();
}
