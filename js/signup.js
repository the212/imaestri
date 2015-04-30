$(function() {

	var lastScrollTop = 0;
	
	$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() == $(document).height()) {

	   		var st = $(this).scrollTop();
			   if (st > lastScrollTop){
			       // downscroll code
			   } else {
			      // upscroll code
			      $('.signup-bottom').addClass('bottom-show');
			   }
			   lastScrollTop = st;
	   }
	});

});