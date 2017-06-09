$(document).ready(function(){
	$('ul li').bind('click',function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $('ul li').index(this);
		$('section').eq(index).addClass("show").siblings().removeClass("show");
		$('section').eq(0).hide();
	});
});