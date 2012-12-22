/**********************************************************
对象处理模块
**********************************************************/
var mObj={};

mObj.add=function(obj){
	if (eOBJ.length==0){
		eOBJ.push(obj);
	}else{
		for (var i in eOBJ){	
			if (obj.z<=eOBJ[i].z){
				return eOBJ.splice(i,0,obj);
			}
		}
		eOBJ.push(obj);
	}
};

mObj.del=function(obj){
	for (var i in eOBJ){
		if (obj===eOBJ[i]){
			return eOBJ.splice(i,1);
		}
	}
};

mObj.resize=function(){
	for (var i in eOBJ){
		eOBJ[i].resize();
	}
};

mObj.draw=function(){
	for (var i in eOBJ){
		eOBJ[i].draw();
	}
};

mObj.click=function(x,y){
	for (var i in eOBJ){
		if (typeof(eOBJ[i].click)=='function'){
			if (x>=eOBJ[i].l && y>=eOBJ[i].t && x<=eOBJ[i].r && y<=eOBJ[i].b){
				eOBJ[i].click(x,y);
			}
		}
	}
};

mObj.mousemove=function(x,y){
	//console.log(x,y);
	for (var i in eOBJ){
		if (typeof(eOBJ[i].mousemove)=='function'){
			if (x>=eOBJ[i].l && y>=eOBJ[i].t && x<=eOBJ[i].r && y<=eOBJ[i].b){
				eOBJ[i].mousemove(x,y);
			}else if (typeof(eOBJ[i].mouseout)=='function'){
				eOBJ[i].mouseout();
			}
		}
	}
};