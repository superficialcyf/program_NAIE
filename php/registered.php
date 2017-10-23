<?php
	header("content-type:text/html;charset=utf-8");
	
	$userId = $_POST['userId'];
	$userPassword = $_POST['userPassword'];
	$userPhone = $_POST['userPhone'];
	$userSex = $_POST['userSex'];
	$userFirstName = $_POST['userFirstName'];
	$userLastName = $_POST['userLastName'];
	$userProvens = $_POST['userProvens'];
	$userCity = $_POST['userCity'];
	$useraddr = $_POST['useraddr'];
	$userZipcode = $_POST['userZipcode'];
	
	//连接数据库
	$con = mysql_connect("localhost","root","root");
	//判断是否连接成功
	if(!$con){
		echo "-1";
	}else{
		//选择需要进行操作的数据库
		mysql_select_db("programernaie",$con);
		//进行数据库的操作（增删改查）
		$sqlStr="insert into vipUser(userId,userPassword,userSex,userPhone,userFirstName,userLastName,userProvens,userCity,useraddr,userZipcode) values ('".$userId."','".$userPassword."','".$userSex."','".$userPhone."','".$userFirstName."','".$userLastName."','".$userProvens."','".$userCity."','".$useraddr."','".$userZipcode."')";
		//定义一个t,mysql_query($sqlStr,$con)表示数据执行结果（执行 || 执行错误 || 未执行）
		$result=mysql_query($sqlStr,$con);
		//关闭数据库
		mysql_close($con);
		// 如果result有结果，则注册成功
		if($result){
			echo "1";
		}else{
			echo "0";
		}
	}
?>
		