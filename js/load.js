/**********************************************************
加载类
**********************************************************/
var LOAD=new clsLoad();

function clsLoad(){
	this.src=[];
	this.callback;
}

//加载回调
clsLoad.prototype.loaded=function(o){
	o.src.pop();
	if (o.src.length==0){//加载完成
		o.callback();
	}
};

//加载资源
clsLoad.prototype.load=function(s){
	this.src=s;
	for (var i in s){
		switch (s[i].slice(-4)){
		case '.jpg':
		case '.png':
			this.loadimg(s[i]);break;
		case '.mp3':
			this.loadaud(s[i]);break;
		} 
	}
};

clsLoad.prototype.loadimg=function(s){
	var o=this;
	eSRC.img[s]=new Image();
	eSRC.img[s].onload=function(){
		o.loaded(o);
	};
	eSRC.img[s].src='img/'+s;
}

clsLoad.prototype.loadaud=function(s){
	var o=this;
	eSRC.aud[s]=new Audio();
	eSRC.aud[s].addEventListener("canplaythrough", function(){
		if (typeof(oTrailer)=='undefined'){
			o.loaded(o);
		}
	});
	eSRC.aud[s].src='aud/'+s;
}







