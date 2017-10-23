$(function(){
	$(window).scroll(function (){
		let scrollTop=$(window).scrollTop();
		if(scrollTop<=60){
			$("header")[0].style.display="block";
			$("#top_nav")[0].style.cssText="top: 60px;z-index: 1000;"
		}
		if(scrollTop>=100){
			$("header")[0].style.display="none";
			$("#top_nav")[0].style.cssText="top: 0px;z-index: 1000;"
		}
	})
	
	var imglength=$(".rowlist > img").length;
	for(let i=0;i<imglength;i++){
		$(".rowlist > img")[i].src="../img/ladyperfumeproduct/manperfume"+i+".jpg"
	}
	
	//获取点击目标位置
	var geturl=(window.location.search).substr(6);
	var domtop;
	if(geturl==1){
		domtop=(document.getElementById("blueManPerfume").offsetTop)-160;
	}else if(geturl==2){
		domtop=(document.getElementById("movementPerfume").offsetTop)-160;
	}else if(geturl==3){
		domtop=(document.getElementById("ManPerfume").offsetTop)-160;
	}else if(geturl==4){
		domtop=(document.getElementById("whitemanperfume").offsetTop)-160;
	}else if(geturl==5){
		domtop=(document.getElementById("whitegoldmanperfume").offsetTop)-160;
	}
	console.log(geturl);
	console.log(domtop);
	$(window).scrollTop(domtop);
	
})
