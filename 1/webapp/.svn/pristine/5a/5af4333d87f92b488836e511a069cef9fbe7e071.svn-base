/***********************
  移动端公共的工具方法 
***********************/
$(function(){
    $(".code").click(function(){ // 点击签到按钮，开始扫描二维码
        scanQrcode.scanQRCode();
    });
})
// 二维码结果回调函数
function scanSuccess(val){
    if(val.indexOf("user/activity/sign/save.do") < 0){
        myConfirm("请扫正确的签到二维码！");
        return false;
    }
    $.myAjax({
        url: val+'&signType=2',
        success: function(result){
            if(result.flag){
                signPrompt(result.data.activityName,result.data.activityId);
            } else {
                myConfirm(result.msg);
            }
        },
        error: function(result){
            myConfirm('请求失败！');
        }
    });
}
// 判断是pc还是移动
function deviceType() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = 'pc';
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) >= 0) {
            if(userAgentInfo.indexOf("MQQBrowser") >= 0){
                flag = 'weixin';
            } else {
                flag = Agents[v];
            }
            break;
        }
    }
    return flag;
}
// 签到提示框
function signPrompt(actName,actId) {
    var str = '<div id="mask"></div>'+
            '<div class="modal_box">'+
                '<div class="modal_header">'+
                    '<span class="box_til">提示</span>'+
                    '<button class="box_cancle">X</button>'+
                '</div>'+
                '<div class="modal_mess">'+
                    '<p id="msg">'+actName+'</p></br>'+
                    '<p style="font-size:18px;text-align:center;" class="orange">您已签到成功</p></br>'+
                    '<div class="qrcodecon">'+
                        '<span>如有需要，请保留并出示此页面信息，以作为入场凭证！或向主办方换取入场吊牌！<br/>'+
                    '</div>'+
                '</div>'+
            '</div>';
    $("body").prepend(str);
    $(document).on('click','.box_cancle',function(){
        $("#mask").remove();
        $(".modal_box").remove();
        window.location.href = basePath + "page/app/activity/meetDetail.html?actId="+actId;
    });
}
// $(function(){
//  $('#userName').html(utilForJs.getUserLoginName());
//  $('#userPwd').html(utilForJs.getUserLoginPwd());
//  $('#userDateState').html(utilForJs.putValue('dataa','qweasd---111000'));
//  $('#userDate').html(utilForJs.getValue('dataa'));
//  $('#userDateDelState').html(utilForJs.delValue('dataa'));
//  $('#userDateDel').html(utilForJs.getValue('dataa'));
//  $('#locationData').html(utilForJs.getLocationData());
//  $('#lontitude').html(utilForJs.getLontitude());
//  $('#latitude').html(utilForJs.getLatitude());
// });

//        utilShare.showShare("title标题，印象笔记、邮箱、信息、微信、人人网和QQ空间使用",
//            "titleUrl是标题的网络链接，仅在人人网和QQ空间使用",
//            "text是分享文本，所有平台都需要这个字段",
//            "url仅在微信（包括好友和朋友圈）中使用",
//            "comment是我对这条分享的评论，仅在人人网和QQ空间使用",
//            "site是分享此内容的网站名称，仅在QQ空间使用",
//            "siteUrl是分享此内容的网站地址，仅在QQ空间使用");