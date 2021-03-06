//监控页面组基础js

// 菜单点击事件监听
$(".hideMenu").click(function () {
    if (!$(".hideMenu").hasClass("has-hide")) {
        // 隐藏菜单
        $(".hideMenu").addClass("has-hide");
        $(".hideMenu").css("position", "absolute");
        $(".hideMenu").css("left", "16px");
        $("#menu").css("width", "50px");
        $("#menu").css("overflow", "hidden");
        $("#menu-main").css("width", "50px");
        $("#menu-title").css("width", "50px");
        $("#menu-content").css("width", "50px");
        $(".hide-able").hide();
        // 扩大显示窗口
        $("#content").css("margin-left", "50px");
        // 箭头
        $(".arrow-left").css("border-right-color", "transparent");
        $(".arrow-left").css("border-left-color", "#666");
        $(".arrow-left").css("left", "15px");
    } else {
        // 显示菜单
        $(".hideMenu").removeClass("has-hide");
        $(".hideMenu").css("position", "relative");
        $(".hideMenu").css("left", "0");
        $("#menu").css("width", "180px");
        $("#menu-main").css("width", "180px");
        $("#menu-title").css("width", "180px");
        $("#menu-content").css("width", "180px");
        $(".hide-able").show();
        // 缩小显示窗口
        $("#content").css("margin-left", "180px");
        // 箭头
        $(".arrow-left").css("border-left-color", "transparent");
        $(".arrow-left").css("border-right-color", "#666");
        $(".arrow-left").css("left", "9px");
    }
    try {
        myChart.resize();
    } catch (e) {
    }
    try {
        myCpuChart.resize();
    } catch (e) {
    }
    try {
        myMemChart.resize();
    } catch (e) {
    }
    try {
        myMemAllChart.resize();
    } catch (e) {
    }
    try {
        myNetChart.resize();
    } catch (e) {
    }
});


function loding() {
    $('body').addClass("modal-open");
    $('#model-div').addClass("modal-backdrop fade in");
    $('.progress').addClass("in");
    $('.progress').css('display', 'block');
    $('.progress').css('z-index', 999999);
    $('.progress').css('position', 'absolute');
    $('.progress').css('left', '20%');
    $('.progress').css('top', '49%');
}

function toastMsg(msg) {
    $("#toast_msg").html(msg);
    $('#toast_').modal({
        keyboard: false
    });
    $("#toast_").modal('show');
}

function lodingDown() {
    $('body').removeClass("modal-open");
    $('.progress').css('display', 'none');
    $('.progress').css('z-index', 0);
    $('.progress').css('position', 'absolute');
    $('.progress').css('left', '20%');
    $('.progress').css('top', '49%');
    $('#model-div').removeClass("modal-backdrop fade in");
}

function loginout() {
    $.myAjax({
        url: basePath + "login/out.do",
        type: "POST",
        async: false,
        dataType: "JSON",
        success: function (result) {
            if (result.flag) {
                location = 'login.html';
            } else {
                alert(result.msg);
            }
        },
        error: function (result) {
            alert(result.msg);
        }
    });
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
 *返回过去指定天数的日期
 * @param num 天数
 * @returns {string} 当前日期-天数=2017-12-12
 */
function getPaseDate(num) {
    if ((parseInt(getNowFormatDate().substring(8, 10)) - parseInt(num)) > 0) {
        return getNowFormatDate().substring(0, 8) + (parseInt(getNowFormatDate().substring(8, 10)) - parseInt(num));
    } else {
        var year;
        var month;
        if ((parseInt(getNowFormatDate().substring(4, 6)) - 1) > 0) {
            year = getNowFormatDate().substring(0, 4);
            month = (parseInt(getNowFormatDate().substring(4, 6)) - 1);
        } else {
            year = parseInt(parseInt(getNowFormatDate().substring(0, 4)) - 1);
            month = 12;
        }
        if (parseInt(month) === 4 || (parseInt(month) === 6) || (parseInt(month) === 9) || (parseInt(month) === 11)
        ) {
            return year + '-' + month + '-' + (30 + parseInt(getNowFormatDate().substring(8, 10)) - parseInt(num));
        } else {
            return year + '-' + month + '-' + (31 + parseInt(getNowFormatDate().substring(8, 10)) - parseInt(num));
        }
    }
}