$(function(){

	var autoAnimateInterval = 10000, intervalId;

	$('.hero-nav a').click(function() {
		clearInterval(intervalId);
		animateSlider($(this).index());
		initHeroTimer();
		return false;
	});

	initHeroTimer();

	function animateSlider(index) {
		var newPos = (0 - (index + 1) * 980) + 980;
		$('.hero-slider').animate({marginLeft: newPos}, {queue: false, duration: 300});
		$('.hero-nav a').removeClass('hero-sel');
		$('.hero-nav a').eq(index).addClass('hero-sel');
	}

	function initHeroTimer() {
		clearInterval(intervalId);
		intervalId = setInterval(function() {
			var nextIndex = $('.hero-nav a.hero-sel').index() + 1;
			if(nextIndex >= $('.hero-nav a').length) nextIndex = 0;
			animateSlider(nextIndex);
		}, autoAnimateInterval);
	}

});