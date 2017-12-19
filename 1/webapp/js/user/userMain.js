﻿function userInit() {
	//首页
	$(document).on('click', '.nav a', function() {
		$(this).attr('href', '../index/index.html');
	});
	//select添加
	(function($) {
		$.fn.mopsSelect = function(data) {
			var innerstr = "";
			$.each(data, function(i, val) {
				innerstr += "<option value='" + val.value + "'>" + val.name + "</option>"
			});
			this.html(innerstr);
		}
	})(jQuery);
};
//用户状态
// function userInfo() {
// 	var url = basePath + "index/status.do";
// 	$.myAjax({
// 		url: url,
// 		type: 'GET',
// 		success: function(result) {
// 			if (result.flag) {
// 				// 获取用户登陆状态信息

// 				if (result.data.user.name) {
// 					$('#user_name').html(result.data.user.name);
// 					$('#user_center').html('用户中心');
// 					$('#login_out').html('注销');
// 				};
// 			} else {
// 				myAlert(result.msg);
// 			}
// 		},
// 		error: function() {
// 			myAlert('请求失败');
// 		}
// 	});
// };
//注销
function loginOut(id) {
	$(document).on('click', id, function() {
		$.myAjax({
			url: basePath + "login/out.do",
			success: function(result) {
				console.log(result);
				window.location.href = basePath + result.url;
			},
			error: function(result) {
				myAlert('注销失败', 'slow');
			}
		});
	});
};
//百度地图
function initMap(latitude, longtitude) {
	// 百度地图API功能
	var map = new BMap.Map("allmap"); // 创建Map实例
	var point = new BMap.Point(latitude, longtitude);
	map.centerAndZoom(point, 18);
	// 初始化地图,设置中心点坐标和地图级别  // 初始化地图,设置中心点坐标和地图级别
	// map.addControl(new BMap.MapTypeControl());   //添加地图类型控件 
	map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放	 
	var marker = new BMap.Marker(point); // 创建标注
	map.addOverlay(marker); // 将标注添加到地图中
	// marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
}
//table
function table(id, data, list) {
	$(id).bootstrapTable({
		data: data,
		dataType: 'json',
		dataLocale: 'zh-US', //表格汉化
		toolbar: '#toolbar', //工具按钮用哪个容器
		striped: true, //是否显示行间隔色
		cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
		pagination: false, //是否显示分页（*）
		sortable: false, //是否启用排序
		sortOrder: "asc", //排序方式
		//queryParams: oTableInit.queryParams,//传递参数（*）
		sidePagination: "client", //分页方式：client客户端分页，server服务端分页（*）
		pageNumber: 1, //初始化加载第一页，默认第一页
		pageSize: 10, //每页的记录行数（*）
		pageList: [10, 15, 20], //可供选择的每页的行数（*）
		//search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
		strictSearch: false,
		showColumns: false, //是否显示所有的列
		showRefresh: false, //是否显示刷新按钮
		//minimumCountColumns: 2,             //最少允许的列数
		// clickToSelect: false,                //是否启用点击选中行
		//height: 500,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
		//uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
		showToggle: false, //是否显示详细视图和列表视图的切换按钮
		cardView: false, //是否显示详细视图
		detailView: false, //是否显示父子表
		columns: list
	});
};
//替换字符串
function strChange(data, sym, newSym) {
	var str = data;
	var strSplit = data.split(sym);
	var arr = new Array();
	for (var i = 0; i < strSplit.length; i++) {
		arr.push(strSplit[i]);
	};
	newStr = arr.join(newSym);
	return newStr;
};
//字符串截取
function getSubstring(ele, n, m) {
	return ele.substr(n, m);
};
//字符串隐藏
function plusXing(str, frontLen, endLen) {
	var len = str.length - frontLen - endLen;
	var xing = '';
	for (var i = 0; i < len; i++) {
		xing += '*';
	}
	return str.substring(0, frontLen) + xing + str.substring(str.length - endLen);
};
//特定字符串截取
function getSymstringl(key, str) {
	var index = str.indexOf(key);
	var result = str.substr(0, index + 1);
	return result;
};

function getSymstringr(key, str) {
	var index = str.indexOf(key);
	var result = str.substr(index + 1, str.length);
	return result;
};
//时分秒
function getTime(ftime, atime) {
	var ftime = ftime;
	var aTime = atime;
	var fDate = new Date(ftime);
	var aDate = new Date(aTime);
	var s = aDate - fDate;
	s = s / 1000;
	var h = parseInt(s / 3600);
	s %= 3600;
	m = parseInt(s / 60);
	s %= 60;
	return {
		h: h,
		m: m,
		s: s
	}
}
//搜索验证
function seachValidation(formC, toC, formT) {
	if (formC == null || formC == '' || formC == '{$cityid}' || formC == '{$traincityid}') {
		myAlert('请选择出发城市!', 'slow');
		return false;
	};
	if (toC == null || toC == '' || toC == '{$getcityid}' || toC == '{$traingetcityid}') {
		myAlert('请选择到达城市!', 'slow');
		return false;
	};
	if (formT == null || formT == '') {
		myAlert('请选择出发日期!', 'slow');
		return false;
	};
	return true;
};
//字数验证
function LenValidation(str) {
	if (!(str.indexOf('@') == -1)) {
		myAlert('评论不支持@', 'slow');
		return false;
	}
	if (str.length > 128) {
		myAlert('评论字数最多128个字', 'slow');
		return false;
	};
	return true;
};
//时间
function dateTime(dateId) {
	$(dateId).datetimepicker({
		language: 'zh-CN', //显示中文
		format: 'yyyy-mm-dd', //显示格式
		minView: 2, //设置显示到秒
		initialDate: new Date(), //初始化当前日期
		autoclose: true, //选中自动关闭
		todayBtn: true //显示今日按钮
	});
	$(dateId).datetimepicker('setStartDate', getToday());
};
//当前时间
function getToday() {
	var date = new Date;
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	month = (month < 10 ? "0" + month : month);
	day = (day < 10 ? "0" + day : day);
	var today = (year.toString() + '-' + month.toString() + '-' + day.toString());
	return today;
};
//定时器
function downTime(fn, time) {
	clearInterval(timer)
	var timer = null;
	timer = setTimeout(fn, time);
};
//替换字符串
function strSpace() {
	// var str = "@Anqing|安庆|36|aq|@Bangbu|蚌埠|37|bb|@Chaohu|巢湖|38|ch|";
	var ss = str.split("@");
	console.log(ss);
	for (var i = 1; i < ss.length; i++) {
		var aIndex = [];
		var index = -1; //定义变量index控制索引值
		//当查找不到a，即indexOf()的值为-1时，结束循环
		do {
			index = ss[i].indexOf("|", index + 1); //使用第二个参数index+1，控制每一次查找都是从上一次查找到字符'|'的下一个索引位置开始
			if (index != -1) { //可以找到字符i
				aIndex.push(index); //输出'|'的位置
			};
		} while (index != -1);

		ss[i] = ss[i].replace(ss[i].substring(aIndex[1] + 1, aIndex[2]), ss[i].substring(aIndex[0] + 1, aIndex[1]));

	}
	console.log(ss.join("@"));
};
//登陆
function Login(id, url, path, code) {
	if (userValidation(id)) {
		var url = basePath + url;
		var mobile = $(id + '.user').val();
		var pwd = $.md5($(id + '.password').val());
		var code = $(id + '.regBox').val();
		$.myAjax({
			url: url,
			data: {
				mobile: mobile,
				pwd: pwd,
				code: code
					// phone: '13633334444',
					// pwd:'asd' 
			},
			success: function(result) {
				if (result.flag) {
					window.location.href = path;
					// window.location.href = basePath+result.url;
				} else {
					$(id + '.login_message').css('display', 'block');
					$(id + '.login_message').html(result.msg);
					codeChange();
				};
			}
		});
	};
};

function mask() {
	var width = $(document).width() + "px";
	var height = $(document).height() + "px";
	$('.foot').after('<div class="mask"></div>');
	$('.mask').css({
		width: width,
		height: height,
		background: '#000',
		zIndex: '100',
		position: 'absolute',
		left: '0',
		top: '0',
		opacity: '0.5'
	});
};