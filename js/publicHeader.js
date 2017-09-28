

		$("#lady_perfumelist > li").hover(
			function (){
				let liIndex = $("#lady_perfumelist > li").index(this);
				console.log(liIndex);
				$("#lady_perfumeImg")[0].src="../img/perfume/"+(liIndex+1)+".jpg";
				$("#ladyperfumeimg")[0].style.opacity="1";
				this.style.cssText="color:darkgrey;";
			},
			function (){
				$("#ladyperfumeimg")[0].style.opacity="0";
				this.style.cssText="";
			}
		)
		$("#man_perfumelist > li").hover(
			function (){
				let liIndex = $("#man_perfumelist > li").index(this);
				console.log(liIndex);
				$("#man_perfumeImg")[0].src="../img/perfume/man"+(liIndex+1)+".jpg";
				$("#manperfumeimg")[0].style.opacity="1";
				this.style.cssText="color:darkgrey;";
			},
			function (){
				$("#manperfumeimg")[0].style.opacity="0";
				this.style.cssText="";
			}
		)
		$("#feace_makeuplist > li").hover(
			function (){
				let liIndex = $("#feace_makeuplist > li").index(this);
				console.log(liIndex);
				$("#feace_Img")[0].src="../img/makeup/feace"+(liIndex+1)+".jpg";
				$("#feacemakeupimg")[0].style.opacity="1";
				this.style.cssText="color:darkgrey;";
			},
			function (){
				$("#feacemakeupimg")[0].style.opacity="0";
				this.style.cssText="";
			}
		)
		$("#eyes_makeuplist > li").hover(
			function (){
				let liIndex = $("#eyes_makeuplist > li").index(this);
				console.log(liIndex);
				$("#eyes_Img")[0].src="../img/makeup/eyes"+(liIndex+1)+".jpg";
				$("#eyesmakeupimg")[0].style.opacity="1";
				this.style.cssText="color:darkgrey;";
			},
			function (){
				$("#eyesmakeupimg")[0].style.opacity="0";
				this.style.cssText="";
			}
		)
		$("#mouth_makeuplist > li").hover(
			function (){
				let liIndex = $("#mouth_makeuplist > li").index(this);
				console.log(liIndex);
				$("#mouth_Img")[0].src="../img/makeup/mouth"+(liIndex+1)+".jpg";
				$("#mouthmakeupimg")[0].style.opacity="1";
				this.style.cssText="color:darkgrey;";
			},
			function (){
				$("#mouthmakeupimg")[0].style.opacity="0";
				this.style.cssText="";
			}
		)
		$("#nail_makeuplist > li").hover(
			function (){
				let liIndex = $("#nail_makeuplist > li").index(this);
				console.log(liIndex);
				$("#nail_Img")[0].src="../img/makeup/nail"+(liIndex+1)+".jpg";
				$("#nailmakeupimg")[0].style.opacity="1";
				this.style.cssText="color:darkgrey;";
			},
			function (){
				$("#nailmakeupimg")[0].style.opacity="0";
				this.style.cssText="";
			}
		)
		$("#brush_makeuplist > li").hover(
			function (){
				let liIndex = $("#brush_makeuplist > li").index(this);
				console.log(liIndex);
				$("#brush_Img")[0].src="../img/makeup/brush"+(liIndex+1)+".jpg";
				$("#brushmakeupimg")[0].style.opacity="1";
				this.style.cssText="color:darkgrey;";
			},
			function (){
				$("#brushmakeupimg")[0].style.opacity="0";
				this.style.cssText="";
			}
		)
		$("#season_makeuplist > li").hover(
			function (){
				let liIndex = $("#season_makeuplist > li").index(this);
				console.log(liIndex);
				$("#season_Img")[0].src="../img/makeup/season"+(liIndex+1)+".jpg";
				$("#seasonmakeupimg")[0].style.opacity="1";
				this.style.cssText="color:darkgrey;";
			},
			function (){
				$("#seasonmakeupimg")[0].style.opacity="0";
				this.style.cssText="";
			}
		)
		$("#series_list > li").hover(
			function (){
				let liIndex = $("#series_list > li").index(this);
				console.log(liIndex);
				$("#series_Img")[0].src="../img/careskin/series"+(liIndex+1)+".jpg";
				$("#seriesimg")[0].style.opacity="1";
				this.style.cssText="color:darkgrey;";
			},
			function (){
				$("#seriesimg")[0].style.opacity="0";
				this.style.cssText="";
			}
		)
		$("#careskin_list > li").hover(
			function (){
				let liIndex = $("#careskin_list > li").index(this);
				console.log(liIndex);
				$("#careskin_Img")[0].src="../img/careskin/step"+(liIndex+1)+".jpg";
				$("#careskinimg")[0].style.opacity="1";
				this.style.cssText="color:darkgrey;";
			},
			function (){
				$("#careskinimg")[0].style.opacity="0";
				this.style.cssText="";
			}
		)
		$("#effect_list > li").hover(
			function (){
				let liIndex = $("#effect_list > li").index(this);
				console.log(liIndex);
				$("#effect_Img")[0].src="../img/careskin/effect"+(liIndex+1)+".jpg";
				$("#effectimg")[0].style.opacity="1";
				this.style.cssText="color:darkgrey;";
			},
			function (){
				$("#effectimg")[0].style.opacity="0";
				this.style.cssText="";
			}
		)
		$("#btnclose").click(function (){
			$("#headerMenuBox")[0].style.display="none";
			$("#bac")[0].style.display="none";
		})
		$("#bac").click(function (){
			$("#headerMenuBox")[0].style.display="none";
			$("#bac")[0].style.display="none";
		})
		$("#menu_perfume").hover(
			function (){
				this.style.color="darkgrey";
				$("#headerMenuBox")[0].style.display="block";
				$("#ladyperfume")[0].style.display="block";
				$("#manperfume")[0].style.display="block";
				$("#makeuptop")[0].style.display="none"
				$("#makeupdown")[0].style.display="none";
				$("#careskinleft")[0].style.display="none";
				$("#careskinmiddle")[0].style.display="none";
				$("#careskinright")[0].style.display="none";
				$("#headerMenu")[0].style.cssText="width: 80%;margin: 0 auto;min-width:790px;display: flex;flex-direction: row;justify-content:space-around;padding-bottom: 50px;"
				let bacheight=$(window).height()-$("#headerMenuBox").height()-60;
				let menuheight=$("#headerMenuBox").height()+60;
				$("#bac")[0].style.cssText="display:block;position:fixed;top:"+menuheight+"px;left:0;background-color: rgba(0,0,0,0.3);width: 100%;height:"+bacheight+"px;"
			},
			function (){
				this.style.color="white";
			}
		)
		$("#makeup").hover(
			function (){
				this.style.color="darkgrey";
				$("#headerMenuBox")[0].style.display="block";
				$("#ladyperfume")[0].style.display="none";
				$("#manperfume")[0].style.display="none";
				$("#careskinleft")[0].style.display="none";
				$("#careskinmiddle")[0].style.display="none";
				$("#careskinright")[0].style.display="none";
				$("#makeuptop")[0].style.display="block";
				$("#makeupdown")[0].style.display="block";
				$("#headerMenu")[0].style.cssText="width: 80%;margin: 0 auto;min-width:790px;display: flex;flex-direction: column;justify-content:space-between;padding-bottom: 60px;"
				let bacheight=$(window).height()-$("#headerMenuBox").height()-60;
				let menuheight=$("#headerMenuBox").height()+60;
				$("#bac")[0].style.cssText="display:block;position:fixed;top:"+menuheight+"px;left:0;background-color: rgba(0,0,0,0.3);width: 100%;height:"+bacheight+"px;"
			},
			function (){
				this.style.color="white";
			}
		)
		$("#careskin").hover(
			function (){
				this.style.color="darkgrey";
				$("#headerMenuBox")[0].style.display="block";
				$("#ladyperfume")[0].style.display="none";
				$("#manperfume")[0].style.display="none";
				$("#makeuptop")[0].style.display="none";
				$("#makeupdown")[0].style.display="none";
				$("#careskinleft")[0].style.display="block";
				$("#careskinmiddle")[0].style.display="block";
				$("#careskinright")[0].style.display="block";
				$("#headerMenu")[0].style.cssText="width: 80%;margin: 0 auto;min-width:790px;display: flex;flex-direction: row;justify-content:space-between;padding-bottom: 60px;"
				let bacheight=$(window).height()-$("#headerMenuBox").height()-60;
				let menuheight=$("#headerMenuBox").height()+60;
				$("#bac")[0].style.cssText="display:block;position:fixed;top:"+menuheight+"px;left:0;background-color: rgba(0,0,0,0.3);width: 100%;height:"+bacheight+"px;"
			},
			function (){
				this.style.color="white";
			}
		)
		$("#special").hover(
			function (){
				this.style.color="darkgrey";
			},
			function (){
				this.style.color="white";
			}
		)
		
		var overform=false;
		$("#login_over").mouseover(function (){
			let loginbtn=$("#menu_perfume").offset().right;
			$("#header_login")[0].style.cssText="position:absolute;right:"+loginbtn+"px;top: 67px;";
			$("#header_login")[0].style.display="block";
			$("#header_login")[0].style.opacity="1";
			setTimeout(function(){
				if(overform==false){
						$("#header_login")[0].style.opacity="0";
						$("#header_login")[0].style.display="none";
					}
				},2000)
		})
		$("#login_form").mouseover(function (){
			$("#header_login")[0].style.display="block";
			$("#header_login")[0].style.opacity="1";
			overform=true;
			let timer=setInterval(function (){
				if(overform==false){
					$("#header_login")[0].style.opacity="0";
					$("#header_login")[0].style.display="none";
					window.clearInterval(timer);
				}
			},1000)
		})
		$("#login_form").mouseleave(function (){
			overform=false;
		})
		
		
