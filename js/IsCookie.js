$(function(){
//	debugger
	var iscookie=getCookie("userId");
	console.log(iscookie);
	if(iscookie!=null){
		$("#myaccount")[0].style.display="block";
		$("#login_form")[0].style.display="none";
		$("#login_over").html("我的账户");
	}
	//退出账户按钮
	$("#dropout").click(function (){
		removeCookie("userId");
		removeCookie("userPassword");
		$("#myaccount")[0].style.display="none";
		$("#login_form")[0].style.display="block";
		$("#login_over").html("登录");
	})
	
	$("#header_login_btn").click(function (){
			$.ajax({
				type:"post",
				url:"../php/login.php",
				async:true,
				data:{
					userId:$("#header_login_username").val(),
					userPassword:$("#header_login_password").val()
				},
				success:function (data){
					console.log(data);
					if(data==1){
						addCookie("userId",$("#header_login_username").val(),7);
						addCookie("userPassword",$("#header_login_password").val(),7);
						location.reload();
					}else if (data==0){
						$("#header_login_message").html("用户名或密码错误!");
					}else if(data==-1){
						$("#header_login_message").html("服务器异常,请稍后再试!");
					}
				}
			});
		})
	
	$("#lookingshoppingbag").click(function (){
		if(iscookie==null){
			mizhu.alert('温馨提示！', '请先登录！');
		}else{
			location.href="../html/shoppingbag.html";
		}
	})
	
})
