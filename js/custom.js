
	
jQuery(document).ready(function(){

	$("#big>div:not(#restro6)").hover(
		function () {
			$(this).find("img").animate({opacity:'0.3'});
			$(this).find('div').css({visibility:'visible'});
			
		},
		function () {
			$(this).find("img").animate({opacity:'1'});
			$(this).find('div').css({visibility:'hidden'});
			
		}
	);	

	$("#big #restro6").hover(
		function(){
			
			$(this).find("img").css({visibility:'hidden'});
			$("#fb,#gmail").css({visibility:'visible'});
			$(this).find('div').css({visibility:'visible'});
		},
		function () {
			$(this).find("img").css({visibility:'visible'});
			$("#fb,#gmail").css({visibility:'hidden'});
			$(this).find('div').css({visibility:'hidden'});
		}
	);
});

