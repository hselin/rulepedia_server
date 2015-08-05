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

		if (imagePos < topOfWindow+600) {
			$(this).addClass("slideRight");
		}
	});
});

$(function(){
	console.log("trying to bind event listener");
	$(".iot-supporter-modal-dialog .iot-supporter-modal-subscribe-btn").click(function(){
		var subscriber = {email: $(".iot-supporter-modal-dialog .email-input").val(), name: "", organization: ""};
		console.log(subscriber);
		$.ajax({
			url: "subscribe", 
			type: "POST", 
			data: JSON.stringify(subscriber),
			contentType: "application/json; charset=utf-8",
			success: function(){
				console.log("Subscription succeeded.");
			}, error: function(){
				console.log("Subscription failed: xml request error.");
			}
		});
	})
})