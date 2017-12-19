var strFullPath = window.document.location.href;
var strPath = window.document.location.pathname;
var pos = strFullPath.indexOf(strPath);
var prePath = strFullPath.substring(0, pos);
var postPath = strPath.substring(0, strPath.substr(0).indexOf('/') + 1);
var basePath = prePath + postPath;
//var basePath = 'http://192.168.1.112:8080/';

$("#logo").click(function () {
    window.location = basePath;
});
/**user nick*/
$(function () {
    $("#user-name").html("&nbsp;&nbsp;" + sessionStorage.getItem("nick") + "&nbsp;&nbsp;");
});

$("#home-btn").click(function () {
    if ($(this).hasClass("disabled")) {
        return false;
    }
    if ($("#home").css("display") == "none") {
        init();
        $("#user").css("display", "none");
        $("#activity").css("display", "none");
        $("#system").css("display", "none");
        $("#company").css("display", "none");
        clearInterval(timers);
        timers = null;
    } else {
        return false;
    }
});

function init() {
    $("#home").show();
    userMapList();
    userActList();
    userMonthList();
    userHtmlList();
    sysInfo();
    actLiftList();
}

$("#user-btn").click(function () {
    if ($(this).hasClass("disabled")) {
        return false;
    }
    if ($("#user").css("display") == "none") {
        $("#user").show();
        userInit();
        $("#home").css("display", "none");
        $("#activity").css("display", "none");
        $("#system").css("display", "none");
        $("#company").css("display", "none");
    } else {
        return false;
    }
    //x = $('#user-scroll-list');
    //scrollText();
});
$("#activity-btn").click(function () {
    if ($(this).hasClass("disabled")) {
        return false;
    }
    if ($("#activity").css("display") == "none") {
        $("#activity").show();
        $("#home").css("display", "none");
        $("#user").css("display", "none");
        $("#system").css("display", "none");
        $("#company").css("display", "none");
    } else {
        return false;
    }
    clearInterval(timers);
    timers = null;
    x = $("#activity-scroll-list");
    scrollText();
});
$("#system-btn").click(function () {
    if ($(this).hasClass("disabled")) {
        return false;
    }
    if ($("#system").css("display") == "none") {
        $("#system").show();
        $("#home").css("display", "none");
        $("#user").css("display", "none");
        $("#activity").css("display", "none");
        $("#company").css("display", "none");
        if (null == websocket) {
            realTimeLog();
        }
    } else {
        return false;
    }
});
$("#company-btn").click(function () {
    if ($(this).hasClass("disabled")) {
        return false;
    }
    if ($("#company").css("display") == "none") {
        $("#company").show();
        companyInit();
        //websocket.close();
        $("#home").css("display", "none");
        $("#user").css("display", "none");
        $("#activity").css("display", "none");
        $("#system").css("display", "none");
    } else {
        return false;
    }
});


var timers;

/**
 * 文字滚动方法
 */
function scrollText() {
    var xx = $(x).children().toArray()[0];
    $(x).children().toArray()[$(x).children().length - 1] = xx;
    $($(x)).append(xx);
    if (!timers) {
        setTimeout(4000);
        timers = setInterval(scrollText, 2000);
    }
}

(function ($) {
    $.myAjax = function (ajaxData) {
        var url = ajaxData.url, type = (ajaxData.type == null
            || ajaxData.type == "" || typeof (ajaxData.type) == "undefined") ? "post"
            : ajaxData.type, dataType = (ajaxData.dataType == null
            || ajaxData.dataType == "" || typeof (ajaxData.dataType) == "undefined") ? "json"
            : ajaxData.dataType, data = (ajaxData.data == null
            || ajaxData.data == "" || typeof (ajaxData.data) == "undefined") ? ''
            : ajaxData.data, async = (ajaxData.async == null
            || ajaxData.async == "" || typeof (ajaxData.async) == "undefined") ? true
            : ajaxData.async, successfn = (ajaxData.success == null
            || ajaxData.success == "" || typeof (ajaxData.success) == "undefined") ? function () {
            }
            : ajaxData.success, errorfn = (ajaxData.error == null
            || ajaxData.error == "" || typeof (ajaxData.error) == "undefined") ? function () {
            }
            : ajaxData.error;

        $.ajax({
            url: url,
            data: data,
            type: type,
            dataType: dataType,
            async: async,
            success: function (result) {
                successfn(result);
            },
            error: function (result) {
                errorfn(result);
            }
        });
    }
})(jQuery);