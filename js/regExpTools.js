

//功能：常见正则的验证
//参数：
//  要验证的字符串
//  规则类型：
//返回值：true：符合规则；false：不符合规则

function checkAll(type,str){
	var reg="";
	switch(type){
		//邮箱：必须有@和.，而且@在.的前面，而且，@不能开头，@前面可以是数字字母下划线和点。
		case "email":reg = /^[\w\.]+@\w+(\.com|\.net|\.cn|\.com\.cn)$/;break;
		//电话：以1开头，第二位只能是3,4,5,7,8，后面是9位的数字
		case "phone":reg = /^1[34578]\d{9}$/;break;
		//身份证:18位，开始不能是0，最后一位是X或者数字
		case "Id":reg = /^[1-9]\d{16}[\dX]$/;break;
		//邮编
		case "zipcode":reg = /^[1-9]\d{5}$/;break;
		default:;
	}
	if(reg.test(str)){
		return true;
	}
	return false;	
}

	