<<<<<<< HEAD
﻿/**********************************************************
事件模块
**********************************************************/

var mEvt={};

mEvt.onResize=function(){
	if (eBODY.width!=BODY.clientWidth || eBODY.height!=BODY.clientHeight){
		eBODY.width=BODY.clientWidth;
		eBODY.height=BODY.clientHeight;
		CVS.style.left=Math.round((eBODY.width-CVS.width)/2);
		CVS.style.top=Math.round((eBODY.height-CVS.height)/2);
	}
}

mEvt.onClick=function(evt){
	//console.log('左击');

	mObj.click(evt.offsetX,evt.offsetY);
	//var xy=CDT.MPtoXY(evt.offsetX,evt.offsetY);
	//CHR.move(xy[0],xy[1]);
}

mEvt.onMousemove=function(evt){
	mObj.mousemove(evt.offsetX,evt.offsetY);
}

mEvt.onKeypress=function(evt){

}

mEvt.onKeydown=function(evt){
	console.log(evt.keyCode);
	switch (evt.keyCode){
	case 37:
		oTetris.moveleft();break;
	case 38:
		//oTetris.moveup();break;
	case 39:
		oTetris.moveright();break;
	case 40:
		oTetris.movedown();break;
	};
}

=======
﻿/**********************************************************
事件模块
**********************************************************/

var mEvt={};

mEvt.onResize=function(){
	if (eBODY.width!=BODY.clientWidth || eBODY.height!=BODY.clientHeight){
		eBODY.width=BODY.clientWidth;
		eBODY.height=BODY.clientHeight;
		CVS.style.left=Math.round((eBODY.width-CVS.width)/2);
		CVS.style.top=Math.round((eBODY.height-CVS.height)/2);
	}
}

mEvt.onClick=function(evt){
	//console.log('左击');

	mObj.click(evt.offsetX,evt.offsetY);
	//var xy=CDT.MPtoXY(evt.offsetX,evt.offsetY);
	//CHR.move(xy[0],xy[1]);
}

mEvt.onMousemove=function(evt){
	mObj.mousemove(evt.offsetX,evt.offsetY);
}

mEvt.onKeypress=function(evt){

}

mEvt.onKeydown=function(evt){
	console.log(evt.keyCode);
	switch (evt.keyCode){
	case 37:
		oTetris.moveleft();break;
	case 38:
		//oTetris.moveup();break;
	case 39:
		oTetris.moveright();break;
	case 40:
		oTetris.movedown();break;
	};
}

>>>>>>> frame
