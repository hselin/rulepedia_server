$(window).scroll(function() {
	var topOfWindow = $(window).scrollTop();

	$('.case-expandUp').each(function(){
		var imagePos = $(this).offset().top;

		if (imagePos < topOfWindow+500) {
			$(this).addClass("expandUp");
		}
	});

	$('.case-slideLeft').each(function(){
		var imagePos = $(this).offset().top;

		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideLeft");
		}
	});

	$('.case-slideRight').each(function(){
		var imagePos = $(this).offset().top;
		console.log(topOfWindow - imagePos);

		if (imagePos < topOfWindow+600) {
			$(this).addClass("slideRight");
		}
	});
});