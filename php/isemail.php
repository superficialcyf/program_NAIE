<?php
	header("content-type:text/html;charset=utf-8");
	
	$userId=$_GET['userId'];
	
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		echo "-1";
	}else{
		//选择数据库
		mysql_select_db("programernaie",$con);
		//执行数据库操作
		$sqlStr="select * from vipUser where userId='".$userId."'";
//		echo $sqlStr;

		$result = mysql_query($sqlStr,$con);
		//关闭数据库
		mysql_close($con);
		
		//判断数据库查询结果
		if(mysql_num_rows($result)==1){
			echo "1";
		}else{
			echo "0";
		}
	}
?>
	