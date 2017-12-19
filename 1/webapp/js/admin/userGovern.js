
$(function(){
	//个人信息切换操作
	$(".secSettings").on("click", function(){
		$(".perDetails").removeClass("hasBgc")
		$(".perDetailsForm").css("display", "none");
		$(".secSettingsForm").css("display", "block")
		$(".secSettings").addClass("hasBgc");
		$(".secSettings a").css("color", "#fff");
		$(".perDetails a").css("color", "#000");
	});

	//安全信息切换操作
	$(".perDetails").on("click", function(){
		$(".secSettings").removeClass("hasBgc")
		$(".secSettingsForm").css("display", "none");
		$(".perDetailsForm").css("display", "block")
		$(".secSettings a").css("color", "#000");
		$(".perDetails a").css("color", "#fff");
		$(".perDetails").addClass("hasBgc");
	});
})

