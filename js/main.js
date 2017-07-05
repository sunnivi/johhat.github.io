/*Main application entrypoint*/
(function () {
	$(window).on("load", function () {
		$('.hide-on-load').addClass('hide')
		$('.show-on-load').removeClass('show-on-load')
		console.log('Window loaded')
	});
})();