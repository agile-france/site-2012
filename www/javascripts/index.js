function displayNextMessage() {
	var next = $('.session').first();
	var margin = -next.outerWidth();
	var delay = next.outerWidth() * 10
	next.animate({
		marginLeft: margin,
		opacity: 0
	}, delay, 'linear', function () {
		var displayed = $(this).detach();
		displayed.appendTo($('#sessions'));
		displayed.removeAttr('style');
	});
	$('.session').slice(1, 2).animate({
		color: '#e2a1a1'
	}, delay, 'linear', function() {
		$('#comment').hide();
		$('#comment').text($(this).attr('title'));
		$('#comment').fadeIn('slow');
	});
	$('#comment').fadeOut();
};
function timer() {
	$('#sessions').shuffle();
	displayNextMessage();
	window.setInterval(displayNextMessage, 6000);
};
$(document).ready(timer);
