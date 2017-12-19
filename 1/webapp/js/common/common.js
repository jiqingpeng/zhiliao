/***********************
    一些公共的方法 
***********************/

/**
 *根路径
 */
var strFullPath = window.document.location.href;
var strPath = window.document.location.pathname;
var pos = strFullPath.indexOf(strPath);
var prePath = strFullPath.substring(0, pos);
<<<<<<< .mine
var postPath = strPath.substring(0, strPath.substr(1).indexOf('/') + 1);
// var basePath = prePath + postPath + '/';
var basePath = 'http://192.168.1.151:8080/';
||||||| .r5538
var postPath = strPath.substring(0, strPath.substr(1).indexOf('/') + 1);
// var basePath = prePath + postPath + '/';
var basePath = 'http://192.168.1.150:8080/';
=======
var postPath = strPath.substring(0, strPath.substr(0).indexOf('/') + 1);
var basePath = prePath + postPath;
// var basePath = 'http://192.168.1.151:8080/';
>>>>>>> .r5546

/**
 *页面加载提示信息loading
 */

var clockInt = '';
var num = 10;

function removeLoading() {
	clockInt = setInterval(circulation, 1000); //一秒执行一次  
};

function circulation() {
	num--;
	if (num <= 0) {
		clearInterval(clockInt);
		$(".loading").remove();
	}
};

function loading() {
	var width = window.screen.width + "px";
	var height = window.screen.height + "px";
	var str = '<div class="loading" style="width: ' + width + '; height: ' + height + '; position: fixed; opacity:0.4; -moz-opacity:0.4; filter:alpha(opacity=40); z-index: 10000; top: 0; left: 0; background-color: #ddd;">' +
		'<div style="heigth: 35px; width: 102px; margin:300px auto;">' +
		// 'loading&nbsp' +
		'<img src= "' + basePath + 'img/load01.gif" style="verticalAlign:middle; width: 100px; height: 100px;">' +
		'</div>' +
		'</div>'
	$(document.body).append(str);

	//数据加载完成后记得移除loading;
	// removeLoading();
};
/**
 *获取地址栏中传入参数的值（如：获取id值 -> Request(id)）
 *如果找不到该参数对应的值，返回 null
 */
function Request(name) {
	if (new RegExp("(^|&)" + name + "=([^&]*)").exec(window.location.search.substr(1))) {
		return RegExp.$2;
	}
	return null;
};
/**
 * JSON对象编码
 */
function setUrlJson(jsonD) {
	return encodeURI(JSON.stringify(jsonD));
}
/**
 * 获取地址栏中的json对象（如：获取obj值 -> getUrlJson(obj)）
 * 如果找不到该参数对应的值，返回 null
 */
function getUrlJson(name) {
	if (Request(name)) {
		return JSON.parse(decodeURI(Request(name)));
	}
	return null;
}
/**
 *弹出框复选样式(必须用myConfirm的样式)
 * message:  提示信息
 * YES: 点击确定执行的方法（不传，默认移除弹框）
 * NO: 点击取消执行的方法（不传，默认移除弹框）
 */
function myConfirm(message, YES, NO) {
	$("body").append('<div id="masking"></div><div class="alert_box"><div class="abox_head">群英会</div><div class="abox_mess"></div><div class="abox_foot"><button class="yes">确&nbsp定</button><button class="no">取&nbsp消</button></div></div>');
	$('.alert_box').css('display', 'block')
	$('.alert_box .abox_mess').html(message);
	// 点击确定
	if (YES) {
		$('.yes').on('click', function() {
			YES();
			$("#masking, .alert_box").remove();
		});
	} else {
		$('.yes').on('click', function() {
			$("#masking, .alert_box").remove();
			return true;
		});
	}
	// 点击取消
	if (NO) {
		$('.no').on('click', function() {
			NO();
			$("#masking, .alert_box").remove();
		});
	} else {
		$('.no').on('click', function() {
			$("#masking, .alert_box").remove();
			return false;
		});
	}
}

/**
 *弹出框保存样式(直接调js)
 *slow: 延时消失（5秒），参数必须是字符串 ‘slow’
 */
function myAlert(data, slow) {
	$("body").prepend('<div id="myalert"><div id="alerttile">群英汇</div><div id="alertcon"></div></div>');
	$("#myalert").css({
		"position": "fixed",
		'left': '50%',
		'top': '50%',
		"border": "1px solid #ddd",
		"width": "300px",
		"min-height": "140px",
		"background": "#fff",
		"border-radius": "6px 6px",
		"z-index": "3001",
		'margin-top': '-150px',
		'margin-left': '-150px'
	});
	$("#alerttile").css({
		"height": "30px",
		"color": "#fff",
		"font-size": "20px",
		// "padding-left": "14px",
		"line-height": "30px",
		"text-align": "center",
		"background": "#f4b33c"
	});
	$("#alertcon").css({
		"min-height": "52px",
		"color": "#333",
		"font-size": "14px",
		"line-height": "30px",
		"padding": "26px 34px",
		"text-align": "center"
	});

	$("#alertcon").html(data);

	$("#myalert").fadeIn(1000, function() {
		if (slow == 'slow') {
			$("#myalert").fadeOut(5000, function() {
				$("#myalert").remove();
			});
		} else {
			$("#myalert").fadeOut(2000, function() {
				$("#myalert").remove();
			});
		}

	});
}

/**
 *比较时间（传入参数的格式为：2017-06-13 11:40:30）
 */
function verifyTime(sTime, eTime) {
	if (sTime > eTime) {
		return true;
	} else {
		myConfirm();
		return false;
	}
}

/**
 *时间转时间戳格式必须为2014-07-10 10:21:12
 */
function timeStamp(time) { //返回毫秒数
	return Date.parse(new Date(time));
};
/**
 * 时间戳格式转换 结果格式：2017-06-13 11:40:30
 */
function formatDate(now) {
	var date = new Date(now);
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	if (hours >= 0 && hours <= 9) {
		hours = "0" + hours;
	}
	if (minutes >= 0 && minutes <= 9) {
		minutes = "0" + minutes;
	}
	if (seconds >= 0 && seconds <= 9) {
		seconds = "0" + seconds;
	}
	return date.getFullYear() + '-' + month + '-' + strDate + " " + hours + ':' + minutes + ':' + seconds;
}

function trainCtime(now) {
	now = Number(now);
	var date = new Date(now);
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	if (hours >= 0 && hours <= 9) {
		hours = "0" + hours;
	}
	if (minutes >= 0 && minutes <= 9) {
		minutes = "0" + minutes;
	}
	if (seconds >= 0 && seconds <= 9) {
		seconds = "0" + seconds;
	}
	return date.getFullYear() + '-' + month + '-' + strDate + " " + hours + ':' + minutes + ':' + seconds;
}
/**
 *设置倒计时
 */

var clock = '';
var nums = 60;
var btn;

function getDynamicCode(thisButton) { //获取动态码  
	btn = thisButton;
	btn.disabled = true; //将按钮置为不可点击  
	btn.value = nums + '秒后可重新获取验证码';
	clock = setInterval(doLoop, 1000); //一秒执行一次  
};

function doLoop() {
	nums--;
	if (nums > 0) {
		btn.value = nums + '秒后可重新获取验证码';
	} else {
		clearInterval(clock); //清除js定时器  
		btn.disabled = false;
		btn.value = '获取手机验证码';
		nums = 60; //重置时间  
	}
};

/**
 *获取当前日期 格式：2017-06-13 11:40:30
 */
function getNowFormatDate() {
	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();
	return currentdate;
}

/**
 * UNIX时间戳格式转换 如：'/Date(1410019200000+0800)/' 站换为 2017-06-13 11:40:30
 */
function tcHotelDate(dateStr) {
	dateStr.replace(/Date\([\d+]+\)/, function(a) {
		eval('date = new ' + a)
	});
	Date.prototype.format = function(format) {
		var o = {
			"M+": this.getMonth() + 1, //month 
			"d+": this.getDate(), //day 
			"h+": this.getHours(), //hour 
			"m+": this.getMinutes(), //minute 
			"s+": this.getSeconds(), //second 
			"q+": Math.floor((this.getMonth() + 3) / 3), //quarter 
			"S": this.getMilliseconds() //millisecond 
		}
		if (/(y+)/.test(format)) {
			format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		}
		for (var k in o) {
			if (new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
			}
		}
		return format;
	}

	if (date) {
		return date.format("yyyy-MM-dd hh:mm:ss");
	} else {
		myAlert('请输入正确的时间', 'slow');
	}
}

/**
 * 自定义AJAX方法
 * 参数为基础参数(url、type、datatype、data、success方法、error方法)
 * 以上参数默认值为：url(必传参数),post,json,'',return,return.
 * 如需要其他参数，请商议后添加
 */
(function($) {
	$.myAjax = function(ajaxData) {
		var url = ajaxData.url,
			type = (ajaxData.type == null || ajaxData.type == "" || typeof(ajaxData.type) == "undefined") ? "post" : ajaxData.type,
			dataType = (ajaxData.dataType == null || ajaxData.dataType == "" || typeof(ajaxData.dataType) == "undefined") ? "json" : ajaxData.dataType,
			data = (ajaxData.data == null || ajaxData.data == "" || typeof(ajaxData.data) == "undefined") ? '' : ajaxData.data,
			async = (ajaxData.async == null || ajaxData.async == "" || typeof(ajaxData.async) == "undefined") ? true : ajaxData.async,
			successfn = (ajaxData.success == null || ajaxData.success == "" || typeof(ajaxData.success) == "undefined") ? function() {} : ajaxData.success,
			errorfn = (ajaxData.error == null || ajaxData.error == "" || typeof(ajaxData.error) == "undefined") ? function() {} : ajaxData.error;

		$.ajax({
			url: url,
			data: data,
			type: type,
			dataType: dataType,
			async: async,
			// xhrFields: { // 解决跨域session不一致问题，上线删除，只开发使用
			// 	withCredentials: true
			// },
			// crossDomain: true,
			success: function(result) {
				successfn(result);
			},
			error: function(result) {
				errorfn(result);
			}
		});
	}
})(jQuery);

/**
 * 自定义console.log()方法
 */
function mylog(data) {
	console.log(data);
}
/**
 * 后退方法
 */
function goback() {
	history.back(-1);
};
$(".wx-back").on("click", function() {
	history.back(-1);
});
/**
 * 页脚定位到底部
 */
function setFootBottom(elem) {
	var height = $(document).height();
	var headHeight = $(".head").height();
	var footHeight = $(".foot").height();
	$(elem).css("min-height", (height - headHeight - footHeight - 16));
}
/**
 * 百度统计代码
 */
var _hmt = _hmt || [];
(function() {
	var hm = document.createElement("script");
	hm.src = "https://hm.baidu.com/hm.js?a4044466580a2161071dc5438fcf8c49";
	var s = document.getElementsByTagName("script")[0]; 
	s.parentNode.insertBefore(hm, s);
})();