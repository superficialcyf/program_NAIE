<?php
	header("content:text/html;charset=utf-8");
	
	$userId=$_POST["userId"];
	$userPassword=$_POST["userPassword"];
	
	$con=mysql_connect("localhost","root","root");
	if(!$con){
		echo "-1";
	}else{
		mysql_select_db("programernaie",$con);
		$sqlStr="select * from vipUser where userId='".$userId."' and userPassword='".$userPassword."'";
		$result=mysql_query($sqlStr,$con);
		if(mysql_num_rows($result)==1){
			echo "1";
		}else{
			echo "0";
		}
	}
?>