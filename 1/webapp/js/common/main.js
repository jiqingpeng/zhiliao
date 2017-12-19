/**
 *页面公共部分（菜单切换）js
 */
$(function() {
	(function() { // 动态改变高度
		var timer = '';
		timer = setInterval(function() {
			if ($(".mops-con").height() != parseInt($("#menu").css("min-height"))) {
				$("#menu").height($(".mops-con").height());
			}
		}, 500);
		// 设置跳转首页链接
		$("#backHomepage").attr("href",basePath);
	})();
	// 点击logo返回首页
	$("#logo").children("img").css("cursor", "pointer");
	$("#logo").children("img").click(function() {
		window.location = basePath;
	});
	// 点击注销
	$(document).on('click', '.logout', function() {
		$.myAjax({
			url: basePath + "login/out.do",
			success: function(result) {
				window.location = basePath;
			},
			error: function(result) {
				myAlert('注销失败，请重试！');
			}
		});
	});
	// 登录信息展示
	if(typeof(sessionStorage.getItem('loginInfo')) == 'string'){
		var loginInfo = $.parseJSON(sessionStorage.getItem('loginInfo'));
		$("#user").html(loginInfo.nick);
		if(loginInfo.isFuncLogin == 'true'){
			$(".userCenter a").attr('href', basePath + loginInfo.url+'?isFuncLogin=1').html('个人中心');
		} else {
			$(".userCenter a").attr('href',basePath + loginInfo.url).html('个人中心');
		}
	}
	$(document).on('click','.release',function(){
		if(sessionStorage.getItem('actState') == 1){
			var postData = 'id=' + sessionStorage.getItem('actId') + '&state=2';
			myConfirm('发布后将不可撤销，确认发布?',function(){
				$.myAjax({
					url: basePath + "admin/activity/save.do",
					data: postData,
					success: function(result){
						if(result.flag){
							myAlert('发布成功！','slow');
							window.location.href = "release.html";
						} else {
							myConfirm(result.msg);
						}	
					},
					error: function(result){
						myAlert('请求失败！');
					}
				});
			});
		} else {
			window.location.href = "release.html";
		}
	});
});
// 登录信息展示
function loginInfo(data){
	$("#user").html(data.nick);
	if(data.isFuncLogin){
		$(".userCenter a").attr('href',basePath + data.url+'?isFuncLogin=1').html('个人中心');
	} else {
		$(".userCenter a").attr('href',basePath + data.url).html('个人中心');
	}
	sessionStorage.setItem('loginInfo',JSON.stringify(data));
}
// 串行执行两个ajax方法
function serialMenuAjax(url, menuName, actId, fn){
	if (menuData != null && menuData != '') { // 如果本地有菜单数据
		createMenu(menuData, menuName);
	} else {
		loading();
		$.myAjax({
			url: basePath + url,
			data: {id: actId},
			success: function(result){
				$(".loading").remove();
				var menu = result.data;
				if(result.flag){
					if(menu.length > 0){
						menuData = menu.sort(function(a,b){
				            return a.sqn-b.sqn
				        });
						createMenu(menuData, menuName);
					}
					// 修改角色字段
					if(result.status){
						$("#pagefunction").html(result.status.nick);
					}
				}
				if(fn){
					fn();
				}
			},
			error: function(result){
				$(".loading").remove();
				myAlert('请求失败！');
				if(fn){
					fn();
				}
			}
		});
	}
}
var menuData = '';
// 获取左侧菜单列表数据
function initMenu(url, menuName, actId) {
	if (menuData != null && menuData != '') { // 如果本地有菜单数据
		createMenu(menuData, menuName);
	} else {
		$.getJSON(url, function(data) {
			menuData = data;
			createMenu(data, menuName);
		});
	}
}
// 创建左侧菜单
function createMenu(data, menuName) {
	var str = '';
	for (var i = 0; i < data.length; i++) {
		if (data[i].name.indexOf(menuName) != (-1)) {
			str += '<li class="active menubar">' +
				'<a class="menulink" href="' + data[i].url + '" ondragstart="return false">' +
				'<img class="active01" src="' + data[i].icon + '"/>' +
				'<span class="active02">' + data[i].name + '</span>' +
				'<div class="active03"></div>' +
				'</a>' +
				'</li>';
		} else {
			str += '<li class="gradient menubar">' +
				'<a class="menulink" href="' + data[i].url + '" ondragstart="return false">' +
				'<img class="decorate" src="' + data[i].icon + '"/>' +
				'<span>' + data[i].name + '</span>' +
				'<div class="indicate"></div>' +
				'</a>' +
				'</li>';
		}
	}
	$("#menulist").append(str);
	iconChange();
	addMonitor();
}

// 菜单icon改变
function iconChange() {
	var activeImg = $("#menulist .active01");
	var oldsrc = $(activeImg).attr("src");
	var newsrc = oldsrc.substring(0, oldsrc.indexOf(".png")) + '_hi.png';
	$(activeImg).attr("src", newsrc);
}
// 给左侧菜单添加监听
function addMonitor() {
	//切换功能列表框
	var aLi = $("#menulist .menubar");
	var aA = $("#menulist .menubar a");
	var iNow = 0;
	aLi.each(function(index) {
		// var submenu = $(this).next(); // 二级菜单div

		$(this).mouseenter(function() {
			$(this).addClass('activea');
			$($(this).children()[0]).addClass('active01a');
			$($(this).find("a").children()[1]).addClass('active02a');
			$($(this).children()[2]).addClass('active03a');
			// if ($(submenu).is('div')) {
			// 	$(submenu).css('display', 'block');
			// 	$("#submenumark").css('display', 'none');
			// }
		});
		// var show = false;
		// if ($(submenu).is('div')) {
		// 	$(submenu).mouseenter(function() {
		// 		show = true;
		// 	});
		// 	$(submenu).mouseleave(function() {
		// 		$(this).css('display', 'none');
		// 		$("#submenumark").css('display', 'block');
		// 	});
		// }
		$(this).mouseleave(function() {
			$(this).removeClass('activea');
			$($(this).children()[0]).removeClass('active01a');
			$($(this).find("a").children()[1]).removeClass('active02a');
			$($(this).children()[2]).removeClass('active03a');
			// if ($(submenu).is('div')) {
			// 	if (!show) {
			// 		$(submenu).css('display', 'none');
			// 		$("#submenumark").css('display', 'block');
			// 	}
			// }
		});
	});

	// $("#submenumark").mouseover(function() {
	// 	var activeLi = $("#menulist .active");
	// 	$(activeLi).next().css('display', 'block');
	// 	$(this).css('display', 'none');
	// });

	// 通过二级菜单切换功能列表框
	// (function() {
	// 	var aLi = $(".submenu .submenubar");
	// 	var aA = $(".submenu .submenubar a");
	// 	var iNow = 0;
	// 	aLi.each(function(index) {
	// 		$(this).mouseenter(function() {
	// 			$(this).css('background', 'url(../../img/menulistbg.png) repeat-x');
	// 		});
	// 		$(this).mouseleave(function() {
	// 			$(this).css('background', '#eaeff3');
	// 		});
	// 	});
	// })();
}

// function getSubMenu(data) {
// 	var str = '<div class="submenu"><div class="submenu-con"><ul>';
// 	for (var i = 0; i < data.length; i++) {
// 		str += '<li class="submenubar">' +
// 			'<a class="submenulink" href="' + data[i].link + '" ondragstart="return false">' +
// 			'<img class="subdecorate" src="' + data[i].icon + '"/>' +
// 			'<span>' + data[i].name + '</span>' +
// 			'</a>' +
// 			'</li>';
// 	}
// 	return str + '</ul></div></div>';
// }

// 会议管理二级菜单公共方法
function setSubMenu(menuName){
	var str = '<div id="subMenuBody">'+
				'<ul>'+
					'<a href="basicInfo.html"><li>基本信息</li></a>'+
					'<a href="intro.html"><li>会议简介</li></a>'+
					'<a href="contact.html"><li>联系方式</li></a>'+
					'<a href="schedule.html"><li>会议日程</li></a>'+
					// '<a href="proce.html"><li>会议流程</li></a>'+
					'<a target="_blank" href="../../index/detail.html?location='+sessionStorage.getItem('actId')+'"><li>会议预览</li></a>'+
					'<a href="userfiled.html"><li>报名信息</li></a>'+
					'<a href="urbanTraffic.html"><li>市内交通</li></a>'+
					// '<a href="actSign.html"><li>签到配置</li></a>'+
					// '<a href="actSignDetail.html"><li>查看签到</li></a>'+
					'<li class="release">发布会议</li>'+
				'</ul>'+
			'</div>';
	$("#subMenu").append(str);
	var aLi = $("#subMenuBody li");
	for(var i=0;i<aLi.length;i++){
		if($(aLi[i]).html() == menuName){
			$(aLi[i]).addClass('menuAct');
			break;
		}
	}
}
// 页脚链接添加
(function(){
	$("#logo img").attr('src',basePath+'img/logoandname.png');
	$(".ftabout").attr('href',basePath+'page/index/indepPage/about.html');
	$(".ftcontant").attr('href',basePath+'page/index/indepPage/contant.html');
	$(".fthelp").attr('href',basePath+'page/index/indepPage/help.html');
	$(".ftdeclare").attr('href',basePath+'page/index/indepPage/declare.html');
	$(".ftnews").attr('href',basePath+'page/index/indepPage/declare.html');
})();

