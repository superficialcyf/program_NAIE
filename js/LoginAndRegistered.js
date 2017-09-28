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
			if($("#ar_sex")[0].innerHTML!=="选择"){
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
	//	邮箱认证
	function checkemail(){
		if($("#new_username")[0].value==""){
			$("#ar_username")[0].innerHTML="必填字段";
		}else if(checkAll("email",$("#new_username")[0].value)==false){
			$("#ar_username")[0].innerHTML="出错:邮件格式有误!";
		}else{
			$("#ar_username")[0].innerHTML="";
			$("#new_username")[0].style.cssText="";
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
//登录信息格式判断
	function checkloginmessage(){
		$("#login_username").on("blur change",function (event){
			checkloginusername();
		});
		$("#login_password").on("blur change",function (event){
			checkloginpassword();
		});
	}
//验证邮箱手机号
	function checkloginusername(){
		if(checkAll("email",$("#login_username")[0].value)==false && checkAll("phone",$("#login_username")[0].value)==false){
			$("#ar_loginusername")[0].innerHTML="出错:字符错误!";
			$("#login_username")[0].style.cssText="border-color: red;background-color: #fff2f2;";
		}else{
			$("#ar_loginusername")[0].innerHTML="";
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
})
