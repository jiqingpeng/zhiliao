/**
*获取会议信息
*/
function getconflist(page){  
 
  alert(typeof($.cookie("wx-user-id"));
  if(typeof($.cookie("wx-user-id")) == "undefined")
  {
	  $.post("../../index/confList.do",
		  {			   
			  pageNum:1,
			  pageSize:30
		  },
		  function(json){
			  for(var conf in json.confList){	
				var li = '<li class="a-topic">'+
					'<a class="topic-tutor-link" href="confdetail.html?id='+json.confList[conf].id+'">'+
					'<hr style="margin-top:0px;margin-bottom:5px;"/>'+
					'<p class="topic-title-txt">'+json.confList[conf].name+'</p>'+
					'<p>'+json.confList[conf].stime+'•'+json.confList[conf].city+'</p>'+
					'<p>'+json.confList[conf].organizer+'</p>';				 
				li +=  '</a></li>';
				$(".topic-list").append(li);
			  }
		  },
		  'json');
  }
  else{
	  $.post("../../user/conf/list.do",
		  {
			  id:$.cookie("wx-user-id"),
			  pageNum:1,
			  pageSize:30
		  },			 
		  function(json){
			 if(json.confList.length > 0){
				var myconfid="";
				for(var conf in json.confInfoList){
					myconfid += json.confInfoList[conf].id + ",";
				}
				 
				for(var conf in json.confList){	
					var li = '<li class="a-topic">'+
						'<a class="topic-tutor-link" href="confdetail.html?id='+json.confList[conf].id+'">'+
						'<hr style="margin-top:0px;margin-bottom:5px;"/>'+
						'<p class="topic-title-txt">'+json.confList[conf].name+'</p>'+
						'<p>'+json.confList[conf].stime+'•'+json.confList[conf].city+'</p>'+
						'<p>'+json.confList[conf].organizer+'</p>';
					if(myconfid.indexOf(json.confList[conf].id) >= 0)
						li += '<p style="color:#34B457">已报名</p>';
					li +=  '</a></li>';
					$(".topic-list").append(li);
				}
			 }
		  },
		  'json'
	  );
  }
	   
  
}