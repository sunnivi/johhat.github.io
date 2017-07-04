/*Main application entrypoint*/
(function() {
	$(document).ready(function(){
		$('.hide-on-load').addClass('hide')
		$('.show-on-load').removeClass('show-on-load')
		console.log('Document loaded')
	})
})();