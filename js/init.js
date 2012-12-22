/**********************************************************
初始化模块
**********************************************************/


//页面加载完毕
window.onload=function(){
	BODY=document.body;
	CVS=document.getElementById('canvas');
	CTX=CVS.getContext('2d');

	CVS.width=320;
	CVS.height=480;
	CVS.style.position='absolute';
	mEvt.onResize();
	
	eBODY.width=BODY.clientWidth;
	eBODY.height=BODY.clientHeight;

	//监听事件
	BODY.onresize=mEvt.onResize;
	BODY.onkeydown=mEvt.onKeydown;
	BODY.oncontextmenu=function(){return false;};//屏蔽系统右键菜单
	CVS.addEventListener("click", mEvt.onClick, false);
	CVS.addEventListener("mousemove", mEvt.onMousemove, false);
	CVS.addEventListener("contextmenu", mEvt.onContextmenu, false);
	
	

/* 	oLoadingBar=new clsLoadingBar();
	mObj.add(oLoadingBar);
*/	
	LOAD.callback=function(){
		oTetris=new clsTetris();
		mObj.add(oTetris);
		oGrid=new clsGrid();
		mObj.add(oGrid);
	};
	LOAD.load([
		'rect.jpg',
	]); 
	
 	//oFps=new clsFps();
	//mObj.add(oFps);
}
