var isScroll = false;

/**
 * 公司页初始化
 */
function userInit() {
    isScroll = userList();
    if (isScroll) {
        clearInterval(timers);
        timers = null;
        x = $("#user-echart-list");
        scrollText();
    }
}

function userList() {
    $
        .myAjax({
            url: basePath + "monitor/user/user/list.do",
            type: "POST",
            //async: false,
            dataType: "JSON",
            success: function (result) {
                if (result.flag) {
                    var userHtml = $("#user .scroll-list");
                    var user = result.data;
                    $($("#user .panel .panel-heading")[0]).children(".badge")
                        .html(user.length);
                    var str = '';
                    if (user.length > 13) {
                        isScroll = true;
                    }
                    for (var i = 0; i < user.length; i++) {
                        var us = user[i];
                        if (i == 0) {
                            // var _thisInfo = $(
                            //     $("#user .collapse-title .collapse-title-avg")[1])
                            //     .children("ul");
                            // $(_thisInfo.children("li")[0]).find("span")
                            //     .html(
                            //         '&nbsp;所在城市：<j class="">'
                            //         + us.city + '</j>');
                            // $(_thisInfo.children("li")[1])
                            //     .find("span")
                            //     .html(
                            //         '&nbsp;开始时间：<j class="">'
                            //         + us.stime.substring(
                            //         0, 10) + '</j>');
                            // var hrefOld = $(
                            //     $("#user .panel .panel-heading")[1])
                            //     .children("a").attr("href");
                            str += '<li><a class=""'
                                + 'data-user-id="'
                                + us.id
                                + '"> <span class="pcu-nick">' + us.nick + '</span> <span class="pcu-type">'
                                + us.type + '</span> <span class="pcu-unit">' + us.unit
                                + '</span><span class="pcu-address">' + us.ipAddress + '</span> <span class="pcu-utime">' + us.utime + '</span></a></li>';
                            // var hrefOld = String($(
                            //     $("#user .panel .panel-heading")[1])
                            //     .children("a").attr("href"));
                            // hrefOld = hrefOld.substring(0, hrefOld
                            //     .indexOf("html") + 4);
                            // $($("#user .panel .panel-heading")[1])
                            //     .children("a")
                            //     .attr("href",
                            //         hrefOld + "?location=" + us.id);
                            // activityProcessEchart(us.id, us.name);
                        } else {
                            str += '<li><a class=""'
                                + '" data-user-id="'
                                + us.id
                                + '> <span class="pcu-nick">' + us.nick + '</span> <spanclass="pcu-type">'
                                + us.type + '</span> <span class="pcu-unit">' + us.unit
                                + '</span><span class="pcu-address">' + us.ipAddress + '</span> <span class="pcu-utime">' + us.utime + '</span></a></li>';
                        }
                    }
                    $(userHtml).html(str);
                } else {
                    alert(result.msg);
                }
            },
            error: function (result) {
                alert(result.msg);
            }
        });
    return isScroll;
}