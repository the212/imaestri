var bottom = false;

$(function() {

	var lastScrollTop = 0;
	
	$(window).scroll(function() {

		var st = $(this).scrollTop();
	   	if (st > lastScrollTop){
	       // downscroll code
	       $('.signup-bottom').removeClass('bottom-show');
	   	} else {
	    	// upscroll code
	    	if (bottom == true) {
	      		$('.signup-bottom').addClass('bottom-show');
	      	}
	   	}
	   	lastScrollTop = st;


		if($(window).scrollTop() + $(window).height() == $(document).height()) {	
	   		bottom = true;
	   		$('.signup-bottom').removeClass('bottom-show');
	   	} else {
	   		bottom = false;
	   	}
	});

});