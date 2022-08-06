$(document).ready(function(){
	// плавное перемещение страницы к нужному блоку
	$("ul li a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
});

$(document).ready(function() {
	$("body").css("display", "none"); 
	$("body").fadeIn(900); 
	$("a.fade").click(function(event){ 
	event.preventDefault();
	linkLocation = this.href;
	$("body").fadeOut(900, redirectPage); 
	});
	function redirectPage() {
	window.location = linkLocation;
	}
	});