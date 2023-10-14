$(function(){

	if($(window).scrollTop() > 20) {
		
		$(".header").addClass("headerFixed");
		
	} else {
		
		$(".header").removeClass("headerFixed");
		
	}

	$(window).scroll(function () {
		
		if($(this).scrollTop() > 20) {
			
			$(".header").addClass("headerFixed");
			
		} else {
			
			$(".header").removeClass("headerFixed");
			
		}
	});
	
	$(".openMenu").click(function () {
		
		$("body,html").addClass("overflowH");
		$(".menuMobile").fadeIn();
		$(".transformPage,.menuMobile .menuContent").addClass("active");
		
	});
	
	$(".closeX,.BgClose,.menuMobile .menuContent a").click(function () {
		
		$("body,html").removeClass("overflowH");
		$(".menuMobile").fadeOut();
		$(".transformPage,.menuMobile .menuContent").removeClass("active");
		
	});
	
	
});
