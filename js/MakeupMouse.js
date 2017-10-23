$(window).scroll(function (){
		let scrollTop=$(window).scrollTop();
		if(scrollTop<=60){
			$("header")[0].style.display="block";
			$("#top_nav")[0].style.cssText="top: 60px;z-index: 100;";
		}
		if(scrollTop>=100){
			$("header")[0].style.display="none";
			$("#top_nav")[0].style.cssText="top: 0px;z-index: 100;";
		}
	})
$(function (){
//	debugger
//连接数据库，获取商品列表(第一种方式)
//	$.get("../php/getGoodsList.php",function (data){
//		let list = eval(data);
//		for(let i=0;i<list.length;i++){
//			$("#Lipstick").append('<div class="lipstickList"><div class="lipstickproductone"><img src="'+list[i].goodsImg+'"alt="" /><div class="lipstickMessage"><p>'+list[i].beiyong2+'</p><p>'+list[i].goodsName+'</p><p class="xianliang" style="background-color: white;">.</p><p class="colormessage colormessagepublic">'+list[i].beiyong1+'</p><p class="money">￥'+list[i].goodsPrice+'</p><button><a>立即够买</a></button></div></div></div>');
//		}
//	})
//	连接数据库，获取商品列表(第二种方式)
	$.ajax({
		type:"get",
		url:"../php/getGoodsList.php",
		async:true,
		data:{
			
		},
		success:function (data){
			var list = eval(data),
				goodsIdArr=[],
				clicknum;
			for(let i=0;i<list.length;i++){
				$("#Lipstick").append('<div class="lipstickList"><div class="lipstickproductone"><img src="'+list[i].goodsImg+'"alt="" /><div class="lipstickMessage"><p>'+list[i].beiyong2+'</p><p>'+list[i].goodsName+'</p><p class="xianliang" style="background-color: white;">.</p><p class="colormessage colormessagepublic">'+list[i].beiyong1+'</p><p class="money">￥'+list[i].goodsPrice+'.00</p><button><a>立即够买</a></button></div></div></div>');
				goodsIdArr.push(list[i].goodsId);
			}
			$(".lipstickMessage button").click(function (event){
			clicknum=$(".lipstickMessage button").index(this);
//			debugger;
			let evt = event || window.event;
			evt.stopPropagation();
			$("body")[0].style.cssText="overflow-y: hidden;";
			$("#mainshopping")[0].style.display="block";
			$("#productnameE").html(this.parentNode.firstElementChild.innerHTML);
			$("#productnameC").html($(this).parent().children().eq(1).html()); 
			$("#productprice").html($(this).parent().children().eq(4).html());
			$("#productmessage").html(list[clicknum].goodsDesc);
			$("#buycolor").html(list[clicknum].beiyong1);
			});
			//点击按钮出现数量
			$("#chosenumberbtn").click(function (event){
				let evt = event || window.event;
				$("#numberlist").slideToggle(500,"linear");
				evt.stopPropagation();
			})
			//点击数字，数量变化
			$("#numberlist p").click(function (event){
				let evt = event || window.event;
				$("#buynumber")[0].innerHTML=this.innerHTML;
				evt.stopPropagation();
			})
			//点击页面蒙版消失
			$("#mainshopping").click(function (event){
				let evt = event || window.event;
				this.style.display="none";
				$("body")[0].style.cssText="overflow-y: scroll;"
				evt.stopPropagation();
			})
			//确认购买，添加到购物车
			$("#putInbtn").click(function (event){
				let evt = event || window.event;
				evt.stopPropagation();
				let getuserId=getCookie("userId");
				if(getuserId==null){
					mizhu.alert('温馨提示！', '请先登录！');
				}else{
					$.ajax({
						type:"get",
						url:"../php/addShoppingCart.php",
						async:true,
						data:{
							vipName:getuserId,
							goodsId:goodsIdArr[clicknum],
							goodsCount:$("#buynumber").html()
						},
						success:function (data){
							console.log(data)
							if(data==1){
								$("#mainshopping")[0].style.display="none";
								$("body")[0].style.cssText="overflow-y: scroll;";
								mizhu.toast('添加成功！', 2000);
							}else if(data==0){
								mizhu.alert('温馨提示！', '请先登录！');
							}
							
						}
					})
				}
			})
		}
	});
	
	
	
//	//第一个唇膏颜色选择
//	var colormessage=["527-GOLDEN SUN","69-传情","46-自由","122-CORAIL RADIEUX","97-洒脱","44-水漾纱丽","507-倔强",
//				"114-SHIPSHAPE","91-波希米亚","124-AHSDIHF","84-对白","56-邂逅","57-冒险","116-MIGHTY","54-卡帕男孩",
//				"79-传奇","497-勇敢","132-ROSE AHLDFA","87-约会","55-浪漫爱情","118-ENERGY","66-蒙特卡洛","98-率真",
//				"60-安蒂冈妮","61-幸福时光"];
//	changecolor($("#table1 tr"),$("#showcolormessage"),$(".colormessage"),colormessage);
////	第二个唇膏颜色选择
//	var colormessagetwo=["527-GOLDEN SUN","69-传情","46-自由","122-CORAIL RADIEUX","97-洒脱","44-水漾纱丽","507-倔强",
//						"114-SHIPSHAPE","91-波希米亚","124-AHSDIHF","84-对白","56-邂逅","57-冒险","116-MIGHTY","54-卡帕男孩",
//						"79-传奇","497-勇敢"];
//	changecolor($("#table2 tr"),$("#showcolormessagetwo"),$(".colormessagetwo"),colormessagetwo);
////	第四个唇膏颜色选择
//	var colormessagethree=["122-CORAIL RADIEUX","97-洒脱","44-水漾纱丽","507-倔强",
//						"114-SHIPSHAPE","91-波希米亚","124-AHSDIHF","84-对白","56-邂逅",
//						"57-冒险","116-MIGHTY","54-卡帕男孩","79-传奇","497-勇敢"];
//	changecolor($("#table3 tr"),$("#showcolormessagethree"),$(".colormessagethree"),colormessagethree);
//
//
////domobj：祖先元素$("#table tr")，showobj：鼠标滑过提示框$("#showcolormessagetwo")
////changecolorobj：商品信息栏颜色提示$(".colormessagetwo")，colormessageArr：颜色数组；
//function changecolor(domobj,showobj,changecolorobj,colormessageArr){
////	console.log(domobj.change())
//	domobj.children().click(function (){
////		console.log(this);
//		let index=domobj.children().index(this),
//			colorMessage=colormessageArr[index];
////			console.log(colorMessage);
//		changecolorobj.html(colorMessage);
//	});
//	domobj.children().hover(
//		function (){
////			console.log(this);
//			let index=domobj.children().index(this),
//				colorMessage=colormessageArr[index],
//				left=this.offsetLeft+90,
//				top=this.offsetTop+40;
//			showobj[0].style.cssText="top: "+top+"px;left:"+left+"px;opacity:1;"
//			showobj.html(colorMessage);
//		},function (){
//				showobj[0].style.cssText="top: 0px;left:0px;opacity:0;"		
//		}
//	)			
//}
//	$(".lipstickMessage button").click(function (event){
//		let evt = event || window.event;
//		$("body")[0].style.cssText="overflow-y: hidden;";
//		$("#mainshopping")[0].style.display="block";
//		$("#productnameE").html(this.parentNode.firstElementChild.innerHTML);
//		$("#productnameC").html($(this).parent().children().eq(1).html()); 
//		$("#productprice").html($(this).parent().children().eq(4).html());
//		evt.stopPropagation();
//	});
//	//点击按钮出现数量
//	$("#chosenumberbtn").click(function (){
//		$("#numberlist").slideToggle(500,"linear");
//	})
//	//点击数字，数量变化
//	$("#numberlist p").click(function (){
//		$("#buynumber")[0].innerHTML=this.innerHTML;
//	})
//购物弹出窗
//	$(".lipstickMessage button").click(function (){
//		$("body")[0].style.cssText="overflow-y: hidden;";
//		$("#mainshopping")[0].style.display="block";
//		$("#productnameE").html(this.parentNode.firstElementChild.innerHTML);
//		$("#productnameC").html($(this).parent().children().eq(1).html()); 
//		$("#productprice").html($(this).parent().children().eq(4).html());
//	});
//	//点击按钮出现数量
//	$("#chosenumberbtn").click(function (){
//		$("#numberlist").slideToggle(500,"linear");
//	})
//	//点击数字，数量变化
//	$("#numberlist p").click(function (){
//		$("#buynumber")[0].innerHTML=this.innerHTML;
//	})
	//点击按钮选择颜色

//	$("#mainshopping").click(function (){
//		this.style.display="none";
//		$("body")[0].style.cssText="overflow-y: scroll;"
//	})
})


