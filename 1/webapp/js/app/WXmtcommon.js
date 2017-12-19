/***********************
    移动端公共的方法 
***********************/
/**
 *根路径
 */
var strFullPath = window.document.location.href;
var strPath = window.document.location.pathname;
var pos = strFullPath.indexOf(strPath);
var prePath = strFullPath.substring(0, pos);
var postPath = strPath.substring(0, strPath.substr(0).indexOf('/') + 1);
// var basePath = prePath + postPath;
var basePath = 'http://192.168.1.112/';

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
			success: function(result) {
				removeMyLoading();
				successfn(result);
			},
			error: function(result) {
				removeMyLoading();
				errorfn(result);
			}
		});
	}
})(Zepto);
/**
 * 拼接token
 */
var tokenM = 0; // 记录请求token的次数
function getToken(url) {
	if (!sessionStorage.getItem('token')) {
		if (tokenM < 5) {
			tokenM++;
			setTimeout(getToken(), 1000);
		} else {
			tokenM = 0;
			myConfirm('请求超时，请刷新！', function() {
				location.reload();
			});
			return false;
		}
	} else {
		if (url.substring(url.length - 3, url.length) == '.do') {
			return url + '?token=' + sessionStorage.getItem('token') + '&tokenType=1';
		} else {
			return url + '&token=' + sessionStorage.getItem('token') + '&tokenType=1';
		}
	}
}
/**
 *弹出框复选样式(必须用myConfirm的样式)
 * message:  提示信息
 * YES: 点击确定执行的方法（不传，默认移除弹框）
 * NO: 点击取消执行的方法（不传，默认移除弹框）
 */
function myConfirm(message, YES, NO) {
	if (!!NO && (typeof NO === 'string')) {
		$("body").prepend('<div id="masking"></div><div class="alert_box"><div class="abox_mess"></div><div class="abox_foot"><button class="yes">确&nbsp定</button></div></div>');
	} else {
		$("body").prepend('<div id="masking"></div><div class="alert_box"><div class="abox_mess"></div><div class="abox_foot"><button class="yes">确&nbsp定</button><button class="no">取&nbsp消</button></div></div>');
	}
	$("#masking").css({
		"position": "fixed",
		"width": "100%",
		"height": "100%",
		"background": "#000",
		"z-index": "3001",
		"filter": "alpha(Opacity=40)",
		"-moz-opacity": "0.4",
		"opacity": "0.4"
	});
	$(".alert_box").css({
		"position": "fixed",
		'left': '12%',
		'top': '42%',
		"border": "1px solid #ddd",
		"border-radius": "4px 4px",
		"width": "76%",
		"min-height": "80px",
		"background": "#fff",
		"z-index": "3002",
	});
	$(".abox_mess").css({
		"margin": "10px 0px",
		"height": "30px",
		"line-height": "30px",
		"padding-left": "15px"
	});
	$(".abox_foot").css({
		"border-top": "1px solid #ddd",
		"height": "34px",
		"width": "100%",
		"line-height": "34px",
		"text-align": "right"
	});
	$(".abox_foot button").css({
		"width": "15%",
		"margin-right": "10px",
		"color": "#fc742a",
		"border": "none",
		"background": "none"
	});
	$('.alert_box').css('display', 'block')
	$('.alert_box .abox_mess').html(message);
	// 点击确定
	if (!!YES) {
		$('.yes').on('click', function() {
			YES();
			$("#masking").remove();
			$(this).parent().parent().remove();
		});
	} else {
		$('.yes').on('click', function() {
			$("#masking").remove();
			$(this).parent().parent().remove();
			return true;
		});
	}
	// 点击取消
	if (!!NO) {
		$('.no').on('click', function() {
			NO();
			$("#masking").remove();
			$(this).parent().parent().remove();
		});
	} else {
		$('.no').on('click', function() {
			$("#masking").remove();
			$(this).parent().parent().remove();
			return false;
		});
	}
}

function myLoading() {
	$("body").prepend('<div id="loadMasking"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 50 50 ;width:200px; height:200px;position:absolute;left:50%;top:50%;margin-left:-100px;margin-top:-100px;" xml:space="preserve" fill="#f60"><rect x="0" y="13" width="4" height="5" ><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.9s" repeatCount="indefinite" /><animate attributeName="y" attributeType="XML"values="13; 5; 13" begin="0s" dur="0.9s" repeatCount="indefinite" /></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.9s" repeatCount="indefinite" /><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.9s" repeatCount="indefinite" /></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML"values="5;21;5" begin="0.3s" dur="0.9s" repeatCount="indefinite" /><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.9s" repeatCount="indefinite" /></rect></svg></div>');
	$("#loadMasking").css({
		"position": "fixed",
		"width": "100%",
		"height": "100%",
		"background": "#000",
		"z-index": "3002",
		"filter": "alpha(Opacity=40)",
		"-moz-opacity": "0.4",
		"opacity": "0.4"
	});
};

function removeMyLoading() {
	$("#loadMasking").remove();
};
/**
 *弹出框保存样式(直接调js)
 */
function myAlert(data) {
	$("body").prepend('<div id="masking"></div><div id="myalert"><div id="alertcon"></div></div>');
	$("#masking").css({
		"position": "fixed",
		"width": "100%",
		"height": "100%",
		"background": "#000",
		"z-index": "3001",
		"filter": "alpha(Opacity=40)",
		"-moz-opacity": "0.4",
		"opacity": "0.4"
	});
	$("#myalert").css({
		"position": "fixed",
		'left': '12%',
		'top': '42%',
		"border": "1px solid #ddd",
		"width": "76%",
		"min-height": "80px",
		"background": "#fff",
		"border-radius": "6px 6px",
		"z-index": "3002",
	});
	$("#alertcon").css({
		"min-height": "30px",
		"color": "#333",
		"font-size": "16px",
		"line-height": "30px",
		"padding": "26px 34px",
		"text-align": "center"
	});
	$("#alertcon").html(data);
	// 延时3s消失
	setTimeout(function() {
		$("#myalert, #masking").remove();
	}, 3000);
}
/**
 * 获取地址栏中传入参数的值（如：获取id值 -> Request(id)）
 * 如果找不到该参数对应的值，返回 null
 */
function Request(name) {
	if (new RegExp("(^|&)" + name + "=([^&]*)").exec(window.location.search.substr(1))) {
		return RegExp.$2;
	}
	return null;
}
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
 * 上一步
 */
function goBack() {
	history.back(-1);
}
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
 *时间转时间戳格式必须为2014-07-10 10:21:12
 */
function timeStamp(time) { //返回毫秒数
	return Date.parse(new Date(time));
};
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

$.fn.prevAll = function(selector) {
	var prevEls = [];
	var el = this[0];
	if (!el) return $([]);
	while (el.previousElementSibling) {
		var prev = el.previousElementSibling;
		if (selector) {
			if ($(prev).is(selector)) prevEls.push(prev);
		} else prevEls.push(prev);
		el = prev;
	}
	return $(prevEls);
};
$.fn.nextAll = function(selector) {
	var nextEls = [];
	var el = this[0];
	if (!el) return $([]);
	while (el.nextElementSibling) {
		var next = el.nextElementSibling;
		if (selector) {
			if ($(next).is(selector)) nextEls.push(next);
		} else nextEls.push(next);
		el = next;
	}
	return $(nextEls);
};

//返回
$(".navImg").on("click", function() {
	history.go(-1)
})