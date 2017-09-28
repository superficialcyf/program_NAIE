
function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="@"){
		return document.getElementsByName(str.substring(1));
	}else if(str.charAt(0)=="&"){
		return document.getElementsByTagName(str.substring(1));
	}else if(str.charAt(0)=="%"){
		return document.createElement(str.substring(1));
	}
}