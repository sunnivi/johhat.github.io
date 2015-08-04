/*Main application entrypoint*/
(function() {
	
	'use stict';

	//Hide nav on scroll down with headroom.js
	$('#navigation').headroom({
		offset: 10,
		tolerance: {
			up: 5,
			down: 5
		}
	});
	
	//Init smooth-scroll for smooth animations when using relative links
	smoothScroll.init({
		offset: 50 //Same as nav size in px
	});

	//Init bootstrap tooltip
	$(function () {
  		$('[data-toggle="tooltip"]').tooltip();
	});

	//Init medium blur effect
	$(window).scroll(function() {
		opacity = ($(window).scrollTop() / 240);
		$('.blur-bg').css('opacity', Math.min(opacity,1));
	});

	//Anchor-js init
	anchors.options = {
	  placement: 'left',
	};
	anchors.add('h2');

	//Add smooth scrolling to anchor-js-links
	$('.anchorjs-link').attr('data-scroll',true);
})();