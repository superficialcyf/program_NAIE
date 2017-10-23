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
		$(".rowlist > img")[i].src="../img/ladyperfumeproduct/perfume"+i+".jpg"
	}
	
	//获取点击目标位置
	var geturl=(window.location.search).substr(9);
	var domtop;
	if(geturl==1){
		domtop=(document.getElementById("FivePerfume").offsetTop)-160;
	}else if(geturl==2){
		domtop=(document.getElementById("kekeladyPerfume").offsetTop)-160;
	}else if(geturl==3){
		domtop=(document.getElementById("GAEncounterBRIELLEPerfume").offsetTop)-160;
	}else if(geturl==4){
		domtop=(document.getElementById("EncounterPerfume").offsetTop)-160;
	}else if(geturl==5){
		domtop=(document.getElementById("EncounterEnuPerfume").offsetTop)-160;
	}else if(geturl==6){
		domtop=(document.getElementById("EncountertendernessPerfume").offsetTop)-160;
	}else if(geturl==7){
		domtop=(document.getElementById("EncountervitalityPerfume").offsetTop)-160;
	}else if(geturl==8){
		domtop=(document.getElementById("kekeblackperfume").offsetTop)-160;
	}else if(geturl==9){
		domtop=(document.getElementById("kekeperfume").offsetTop)-160;
	}else if(geturl==10){
		domtop=(document.getElementById("charmperfume").offsetTop)-160;
	}else if(geturl==11){
		domtop=(document.getElementById("morecharmperfume").offsetTop)-160;
	}else if(geturl==12){
		domtop=(document.getElementById("nineteenperfume").offsetTop)-160;
	}else if(geturl==13){
		domtop=(document.getElementById("crystalperfume").offsetTop)-160;
	}
	console.log(geturl);
	console.log(domtop);
	$(window).scrollTop(domtop);
})
