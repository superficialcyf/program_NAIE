 $(function (){
	
	let getvipname=getCookie("userId");
	$.ajax({
		type:"get",
		url:"../php/getShoppingCart.php",
		async:true,
		data:{
			vipName:getvipname
		},
		success:function (data){
			console.log(data);
			var list = eval(data);
			if(list.length==0){
				$("#title").html("您还没有购物哦！");
			}
//			$("#title").html("我的购物袋！");
			for(let i=0;i<list.length;i++){
				$("#BuyProductList").append(['<article id="buyproductlist">',
'    			<div class="boughtProduct" id="firstbought">',
'    				<img class="goodsimg"src="'+list[i].goodsImg+'" alt="" />',
'    				<a href="#" class="delethref">×</a>',
'    				<div class="goodsmessage">',
'						<p class="goodsnameE">'+list[i].beiyong2+'</p>',
'						<p class="goodsnameC">'+list[i].goodsName+'</p>',
'    					<p class="goodsmoneycolor">',
'    						<span>'+list[i].beiyong1+'</span>',
'    						<span class="unitprice">¥'+list[i].goodsPrice+'.00</span>',
'    					</p>',
'    					<span class="numberC">数量</span>',
'    					<div class="incnumbtn">',
'    							<span>'+list[i].goodsCount+'</span><button class="shownumber"><img src="../img/loginAndregistered/down (1).png"/></button>',
'    					</div>',
'    					<div class="chosenumber">',
'    						<p>1</p>',
'    						<p>2</p>',
'    						<p>3</p>',
'    					</div>',
'    					<p class="goodsprices">',
'    						<span>￥</span><span>'+list[i].goodsPrice+'.00</span>',
'    					</p>',
'	    			</div>',
'    			</div>',
'    		</article>'].join(""));
				
			}
			var oneprice=$(".goodsprices").children().last()[0].innerHTML;
			$("#moneylist")[0].style.display="block";
			//选择数量
			$(".shownumber").click(function (){
		 		$(this).parent().next().slideToggle(300,"linear");
		 	})
			console.log($(".shownumber").parent().next().children());
			$(".shownumber").parent().next().children().click(function (){
				$(this).parent().prev().children().first().html(this.innerHTML);
				let	allprice=($(this).html())*oneprice;
				$(this).parent().next().children().last()[0].innerHTML=allprice+".00";
				let pricelength=Number($(".goodsprices").children().length),
					totalprice=0,
					k=0;
					for(let j=0;j<parseInt(pricelength/2);j++){
						k=2*j+1;
						totalprice += Number($(".goodsprices").children().eq(k).html());
					}
				$("#moneylist").children().find("span")[0].innerHTML="￥"+totalprice+".00";
				$("#moneylist").children().find("span")[2].innerHTML="￥"+totalprice+".00";
			})
		}
	});
})
 
 
 