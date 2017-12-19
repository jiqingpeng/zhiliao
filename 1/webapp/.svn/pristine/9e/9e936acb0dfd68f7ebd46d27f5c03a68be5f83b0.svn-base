var disabletime = 180;
var counttime = 0;

function msgshow(msg){
	$("#msg").html(msg);
	$("#msgmodal").modal("show");
	setTimeout('$("#msgmodal").modal("hide")',3000);
}

function vpass(){
	if($("#pass").val() != "" && $("#pass1").val() != ""){
		if($("#pass").val() != $("#pass1").val())
		{
			$("#passhint").html("密码不一致，请重新输入");
			$("#passhint").addClass("font-red");
			return false;
		}
		else
		{
			$("#passhint").html("");
			$("#passhint").removeClass("font-red");			 
			return true;
		}
	}
	return false;
}

function vmobile(){	 
	var myreg = /^(1[3,5,7,8]{1}[0-9]{9})$/; 
	var mobilevalidated = false;
	if(!myreg.test($("#mobile").val())) 
	{
		$("#mobilehint").html("请输入正确的手机号码");
		$("#mobilehint").addClass("font-red");
		 
	}
	else
	{
		$("#mobilehint").html("");
		$("#mobilehint").removeClass("font-red");		 
		mobilevalidated = true;
	}
	return mobilevalidated;
}

function vemail(){	 	 
	var myreg = /^(?:\w+\.?)*\w+@(?:\w+\.)*\w+$/;
	if(!myreg.test($("#email").val())) 
	{
		$("#emailhint").html("请输入正确的邮箱地址");
		$("#emailhint").addClass("font-red");		
		return false;
	}
	else
	{
		$("#emailhint").html("");
		$("#emailhint").removeClass("font-red");
		return true;
	}
}

function vchinese(id,str){
	var myreg = /([\u4E00-\u9FA5\uF900-\uFA2D])/;
	if(!myreg.test(str) && str != ""){
		$("#"+id+"hint").html("仅限中文");
		$("#"+id+"hint").addClass("font-red");
	}
	else
	{
		$("#"+id+"hint").html("");
		$("#"+id+"hint").removeClass("font-red");
	}
}

function getvcode(url){	
	 
	var phone = $('#mobile').val();
	if (phone == null || phone == '') {
		msgshow('请输入手机号！');
		return false;
	} else if(!(/^1[34578]\d{9}$/.test(phone))){ 
		msgshow("手机号码有误，请重新输入！");  
		return false;
	}	 
	var code = $('#code').val();
	if (code == null || code == '') {
		msgshow('请输入图形验证码！');
		return false;
	}
	 
	$.ajax({
		type: "POST",
		url: url,
		dataType: "json",
		data: {"mobile":$("#mobile").val(),"code":$('#code').val()},
		success: function (data) {
			counttime = disabletime;			
			if(data.flag) {
				setTimeout(vcodestate,100);				
			} else {
				msgshow(data.msg);
			}
		},
		error: function(result) {
			msgshow('请求失败，请稍后再试！');
		}
	});	  
}

function vcodestate()
{
	--counttime;
	if(counttime < 0)
	{
		$("#vcodebtn").attr("disabled",false);
		$("#vcodebtn").removeClass("font-a");
		$("#vcodebtn").val("发送验证码");
	}
	else
	{
		$("#vcodebtn").val("验证码已发送(" + counttime + ")");
		$("#vcodebtn").attr("disabled","disabled");
		setTimeout(vcodestate, 1000);

	}
}

/**
*注册用户
*/
function reguser(){
	var phone = $('#mobile').val();
	var userpwd = $('#pass').val();
	var confpwd = $('#pass1').val();
	var unit = $('#unit').val();
	 
	var code = $('#vcode').val();
	if (phone == null || phone == '' || userpwd == null || userpwd == '') {
		msgshow('手机号或密码不能为空！');
		return false;
	}
	if(!(/^1[34578]\d{9}$/.test(phone))){ 
		msgshow("手机号码有误，请重新输入！");  
		return false; 
	}
	if (!(/^[a-zA-Z][a-zA-Z0-9_]{5,15}$/.test(userpwd))){
		msgshow("密码是以英文字母开头，只能包含英文字母、数字、下划线，且长度为6~16位，请重新输入！");
		return false;
	}
	if (userpwd != confpwd){
		msgshow("两次填写密码不一致！");  
		return false;
	}
	 
	 
	if (code == '' || code == null) {
		msgshow('请输入6位手机验证码！');
		return false;
	} else if( !(parseInt(code) >= 100000) ){ 
		msgshow("请输入6位数字验证码！"); 
		return false;
	}
	$("#pwd").val($.md5($("#pass").val()));
	$.ajax({
		type: "POST",
		url: "../../user/regist/save.do",
		data: $('#userform').serialize(),
		success: function (result) {
			var data = $.parseJSON(result);
			if(data.flag) {
				msgshow("注册成功！");
				if(typeof(confid) == "string")
				  setTimeout('window.location.href="login.html?id='+confid+'"',3000);
				else
				  setTimeout('window.location.href="login.html"',3000);
				
				//$('#userform').submit();
			} else {
				msgshow("注册失败，" + data.msg);
			}
		},
		error: function(result) {
			msgshow("请求失败，请稍后再试！");
		}
	});

}

function chgcode(){
	$.getJSON("../../verification/get.do",function(json){
		 if(json.flag == true){
			 $("#imgcode").attr("src","data:image/png;base64,"+json.data)

		 }
	 });
}