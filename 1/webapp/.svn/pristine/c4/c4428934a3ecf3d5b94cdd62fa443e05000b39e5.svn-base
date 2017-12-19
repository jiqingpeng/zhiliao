var pagesize = 5;
var host = "http://www.gconfs.com";

function UrlSearch() 
{
   var name,value; 
   var str=location.href; //取得整个地址栏
   var num=str.indexOf("?") 
   str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]

   var arr=str.split("&"); //各个参数放到数组里
   for(var i=0;i < arr.length;i++){ 
	num=arr[i].indexOf("="); 
	if(num>0){ 
	 name=arr[i].substring(0,num);
	 value=arr[i].substr(num+1);
	 this[name]=value;
	 } 
	} 
}

function goback(){
	window.history.go(-1);
}


function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 32; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01 
    var uuid = s.join("");
    return uuid;
}
