$(document).ready(function (){
	
	shwoprovensandcity();
	checkregisteredmessage();
	checkloginmessage();
    var old_change=0,
        new_change=0,
        old_rrow=document.getElementById("old_rrow"),
        new_rrow=document.getElementById("new_rrow");
    $("#oldMessage")[0].onclick = function (){  $("#form_login").slideToggle(300,"linear");
        if(old_change==0){  old_rrow.src="../img/loginAndregistered/up.png";
         old_change=1;   
        }else{ old_rrow.src="../img/loginAndregistered/down%20(1).png";
            old_change=0;
        }                                 
    }
    $("#NewRegistered")[0].onclick = function (){
        $("#registered_input").slideToggle(800,"linear");
           if(new_change==0){  new_rrow.src="../img/loginAndregistered/up.png";
             new_change=1;   
            }else{ new_rrow.src="../img/loginAndregistered/down%20(1).png";
                new_change=0;
            }  
    }
    //生成年月日
    var year=document.getElementById("year"),
    	mounth=document.getElementById("mounth"),
    	days=document.getElementById("days"),
    	startyear=2007,
    	startmounth=1,
    	startdays=1;
    for(let i=0;i<107;i++){
    	let optionyear=document.createElement("option");
    	optionyear.innerHTML=startyear-i;
    	year.appendChild(optionyear);
    }
    for(let l=0;l<12;l++){
    	let optionmounth=document.createElement("option");
    	optionmounth.innerHTML=startmounth+l;
    	mounth.appendChild(optionmounth);
    }
    for(let k=0;k<31;k++){
    	let optiondays=document.createElement("option");
    	optiondays.innerHTML=startdays+k;
    	days.appendChild(optiondays);
    }
    //省市联动
    var provenscity;
    function shwoprovensandcity(){
    	getdata();
    	document.getElementById("provens").onchange = function (){
    		showcity(this.value);
    	}
    }
    function getdata(){
    	var request = new XMLHttpRequest();
    	request.open("get","../json/myCity.json",true);
    	request.onreadystatechange = function (){
    		if(request.readyState==4 &&　request.status==200){
    			provenscity=JSON.parse(request.responseText);
    			showprovens();
    		}
    	}
    	request.send();
    }
 
    function showprovens(){
    	let provens=document.getElementById("provens");
    	for(var key in provenscity){
    		let optionprovens=document.createElement("option");
    		optionprovens.value=key;
    		optionprovens.innerHTML=key;
    		provens.appendChild(optionprovens);
    	}
    		
    }
    
    function showcity(nowprovens){
    	let citys=document.getElementById("city");
    		citys.innerHTML="";
    	let citylist=provenscity[nowprovens];
    	for(let i=0;i<citylist.length;i++){
    		let optioncity=document.createElement("option");
    		optioncity.innerHTML=citylist[i].市名;
    		citys.appendChild(optioncity);
    	}
    	
    }
//输入信息前台验证    
	function checkregisteredmessage(){
		$("#new_username").on("blur change",function (event){
			checkemail();
			if($("#ar_username")[0].innerHTML!==""){
				$("#new_username")[0].style.cssText="border-color: red;background-color: #fff2f2;";
			}
		});
		$("#new_password").on("blur change",function (event){
			checkpassword();
			if($("#ar_password")[0].innerHTML!==""){
				$("#new_password")[0].style.cssText="border-color: red;background-color: #fff2f2;";
			}
		});
		$("#new_secondpassword").on("blur change",function (event){
			checksecondpassword();
			if($("#ar_secondpassword")[0].innerHTML!==""){
				$("#new_secondpassword")[0].style.cssText="border-color: red;background-color: #fff2f2;";
			}
		});
		$("#new_phone").on("blur change",function (event){
			checkphone();
			if($("#ar_phone")[0].innerHTML!==""){
				$("#new_phone")[0].style.cssText="border-color: red;background-color: #fff2f2;";
			}
		});
		$("#new_sex").on("blur change",function (event){
			checksex();
			if($("#new_sex")[0].value!=="男" && $("#new_sex")[0].value!=="女"){
				$("#new_sex")[0].style.cssText="border-color: red;background-color: #fff2f2;";
			}
		});
		$("#new_firstname").on("blur change",function (event){
			checkfirstname();
			if($("#ar_firstname")[0].innerHTML!==""){
				$("#new_firstname")[0].style.cssText="border-color: red;background-color: #fff2f2;";
			}
		});
		$("#new_lastname").on("blur change",function (event){
			checklastname();
			if($("#ar_lastname")[0].innerHTML!==""){
				$("#new_lastname")[0].style.cssText="border-color: red;background-color: #fff2f2;";
			}
		});
		$("#new_zipcode").on("blur change",function (event){
			checkzipcode();
			if($("#ar_zipcode")[0].innerHTML!==""){
				$("#new_zipcode")[0].style.cssText="border-color: red;background-color: #fff2f2;";
			}
		});
	}
	var num=0;
	//	邮箱认证
	function checkemail(){
		if($("#new_username")[0].value==""){
			$("#ar_username")[0].innerHTML="必填字段";
		}else if(checkAll("email",$("#new_username")[0].value)==false){
			$("#ar_username")[0].innerHTML="出错:邮件格式有误!";
		}else{
//数据库存在性验证
			$.ajax({
				type:"get",
				url:"../php/isemail.php",
				async:true,
				data:{
					userId:$("#new_username").val()
				},
				success:function (data){
					//在连接数据库的过程中出现问题而没有任何提示,打印data(php返回数据)可以查看php中的错误!
					
					
					if(data==1){
						$("#ar_username")[0].innerHTML="用户名已存在!";
					}else if(data==0){
						$("#ar_username")[0].innerHTML="用户名可用!";
						setTimeout(function (){
							$("#new_username")[0].style.cssText="";
							$("#ar_username")[0].innerHTML="";
						},2000)
					}else if(data==-1){
						$("#ar_username")[0].innerHTML="服务器异常,请稍后再试!";
					}
				}
			})
		}
	}
	//密码格式验证
	function checkpassword(){
		if($("#new_password")[0].value==""){
			$("#ar_password")[0].innerHTML="必填字段";
		}else if($("#new_password")[0].value.length<6){
			$("#ar_password")[0].innerHTML="出错:字符数不够!";
		}else{
			$("#ar_password")[0].innerHTML="";
			$("#new_password")[0].style.cssText="";
		}
	}
	//手机号码验证
	function checksecondpassword(){
		if($("#new_secondpassword")[0].value==""){
			$("#ar_secondpassword")[0].innerHTML="必填字段";
		}else if($("#new_password")[0].value != $("#new_secondpassword")[0].value){
			$("#ar_secondpassword")[0].innerHTML="确认密码不一致";
		}else{
			$("#ar_secondpassword")[0].innerHTML="";
			$("#new_secondpassword")[0].style.cssText="";
		}
	}
	//验证手机号码
	function checkphone(){
		if($("#new_phone")[0].value==""){
			$("#ar_phone")[0].innerHTML="必填字段";
		}else if(checkAll("phone",$("#new_phone")[0].value)==false){
			$("#ar_phone")[0].innerHTML="错误:手机号码的格式不正确";
		}else{
			$("#ar_phone")[0].innerHTML="";
			$("#new_phone")[0].style.cssText="";
		}
	}
	//验证性别
	function checksex(){
		if($("#new_sex")[0].value!=="男" && $("#new_sex")[0].value!=="女"){
			$("#ar_sex")[0].innerHTML="必填字段";	
		}if($("#new_sex")[0].value=="男" || $("#new_sex")[0].value=="女"){
			$("#ar_sex")[0].innerHTML="";
			$("#new_sex")[0].style.cssText="";
		}
	}
	//验证姓
	function checkfirstname(){
		if($("#new_firstname")[0].value==""){
			$("#ar_firstname")[0].innerHTML="必填字段";
		}else{
			$("#ar_firstname")[0].innerHTML="";
			$("#new_firstname")[0].style.cssText="";
		}
	}
	//验证名
	function checklastname(){
		if($("#new_lastname")[0].value==""){
			$("#ar_lastname")[0].innerHTML="必填字段";
		}else{
			$("#ar_lastname")[0].innerHTML="";
			$("#new_lastname")[0].style.cssText="";
		}
	}
	//验证邮编
	function checkzipcode(){
		if(checkAll("zipcode",$("#new_zipcode")[0].value)==false){
			$("#ar_zipcode")[0].innerHTML="错误:邮编格式有误!";
		}else{
			$("#ar_zipcode")[0].innerHTML="";
			$("#new_zipcode")[0].style.cssText="";
		}
	}
	//点击注册按钮,先进行判断是否通过了正则验证,再进行注册
	$("#newregisteredsubmit").click(function (){
		let arrlength=$("#registered_input p").length,
			message=$("#registered_input p").prev(),
			num=0;
		for(let i=0;i<arrlength-1;i++){
			if($("#registered_input p")[i].innerHTML!=="" || message[i].value==""){
				num++;
			}
		}
		if(num==0){
			$.ajax({
				type:"post",
				url:"../php/registered.php",
				async:true,
				data:{
					userId:$("#new_username").val(),
					userPassword:$("#new_password").val(),
					userPhone:$("#new_phone").val(),
					userSex:$("#new_sex").val(),
					userFirstName:$("#new_firstname").val(),
					userLastName:$("#new_lastname").val(),
					userProvens:$("#provens").val(),
					userCity:$("#city").val(),
					useraddr:$("#new_addr").val(),
					userZipcode:$("#new_zipcode").val()
				},
				success:function (data){
					
					if(data==1){
//						console.log("注册成功");
						$("#registeredmessage").html("");
						addCookie("userId",$("#login_username").val(),7);
						addCookie("userPassword",$("#login_password").val(),7);
						location.reload();
					}else if(data==0){
//						console.log("注册失败")
						$("#registeredmessage").html("注册失败!");
					}else if(data==-1){
						console.log("服务器异常,请稍后再试!")
					}
				}
			});
		}else{
			$("#registeredmessage").html("请完善注册信息!");
		}
	})
	
	
//登录信息格式判断
	function checkloginmessage(){
		$("#login_username").on("blur change",function (event){
			checkloginusername();
		});
		$("#login_password").on("blur change",function (event){
			checkloginpassword();
		});
//		链接数据库验证,通过就添加cookie( addCookie() );
	}
//验证邮箱手机号
	function checkloginusername(){
		if(checkAll("email",$("#login_username")[0].value)==false && checkAll("phone",$("#login_username")[0].value)==false){
			$("#ar_LoginUsername").html("出错:字符数不足!");
			$("#login_username")[0].style.cssText="border-color: red;background-color: #fff2f2;";
		}else{
			$("#ar_LoginUsername")[0].innerHTML="";
			$("#login_username")[0].style.cssText="";
		}
	}
//验证密码格式
	function checkloginpassword(){
		if($("#login_password")[0].value.length<6){
			$("#ar_loginpassword")[0].innerHTML="出错:字符数不足!";
			$("#login_password")[0].style.cssText="border-color: red;background-color: #fff2f2;";
		}else{
			$("#ar_loginpassword")[0].innerHTML="";
			$("#login_password")[0].style.cssText="";
		}
	}
//点击登录进行后端验证
	$("#login_btn").click(function (){
		if($("#ar_LoginUsername").html()=="" && $("#ar_loginpassword").html()=="" && $("#login_username").val()!=="" && $("#login_password").val()!==""){
			$("#loginmessage").html("");
			$.ajax({
				type:"post",
				url:"../php/login.php",
				async:true,
				data:{
					userId:$("#login_username").val(),
					userPassword:$("#login_password").val()
				},
				success:function (data){
					console.log(data);
					if(data==1){
//						$("#loginmessage").html("登录成功");
						addCookie("userId",$("#login_username").val(),7);
						addCookie("userPassword",$("#login_password").val(),7);
						 location.reload();
					}else if (data==0){
						$("#loginmessage").html("用户名或密码错误!");
					}else if(data==-1){
						$("#loginmessage").html("服务器异常,请稍后再试!");
					}
				}
			});
		}else{
			$("#loginmessage").html("请输入正确格式的用户名和密码!");
		}
	})
		
})
