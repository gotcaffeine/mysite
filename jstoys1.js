$(document).ready(function(){

	$(".block").mousedown(function (e) {
		$(this).css("border-style","inset");
	});
	
	$(".block").mouseleave(function () {

		$(this).animate(
			{backgroundColor: 'blue'}
		, 1000);
	});
});