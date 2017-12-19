
document.write('<script src="../../js/jQuery.md5.js"></script>');

// 设置登录样式
$(".forget").css({
	"font-size": "12px",
	"color": "#315aaa",
	"margin-left": "14px"
});

$(".sub").css({
	"margin-left": "25%",
	"background-color": "#f49120",
	"color": "#fff",
	"border": "none",
	"border-radius": "4px",
	"width": "60px",
	"height": "32px",
	"margin-right": "10px"
})

/**
* 登录模态框登录逻辑
*/
$(".login").click(function(){
	if($("#username").val() == ""){
		myAlert("请输入用户名",'slow');
		// $("#username").focus();
		return;
	}
	if($("#password").val() == ""){
		myAlert("请输入密码",'slow');
		// $("#password").focus();
		return;
	}
 
	var param = {"mobile":$("#username").val(),"pwd":$.md5($("#password").val())};
	$.myAjax({
		url: basePath + 'user/login/check.do',
		data:param,
		success:function(result){
			if(result.flag == true){	 					   
				$("#loginmodal").modal("hide");
				if( typeof(initPage) === "function" ){
					initPage();
				}
				// initPage(); // 页面中须有此初始化页面的方法

			} else {
				myAlert(result.msg,'slow');
			}
		}
	});
})
// 关闭登陆模态框
$(".close").click(function(){
	history.back(-1);
})
// 显示登录模态框
var code = Request('code');
function showLoginModel() {
	// 先自动登录 
	if(code){
		$.myAjax({
			url: basePath + 'wx/wxlogin.do?code='+code,
			success: function(result){				  
				if(result.result == 'notlogin'){
					// 如果没有绑定openID，手动登录
					$('#loginmodal').modal({backdrop: 'static'});
					$("#loginmodal").modal("show");
				} else {
					initPage();
				}
			}
		});
	} else {
		// 如果没有绑定openID，手动登录
		$('#loginmodal').modal({backdrop: 'static'});
		$("#loginmodal").modal("show");
	}
}