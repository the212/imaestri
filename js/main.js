/******************************************
********* Primary Nav ******************/
function initNav() {
	$('.nav-trigger').click(function() {
		$('.pnav').toggleClass('pnav-open');
	});

	$('.pnav-li-products').click(function() {
		$('.pnav').toggleClass('pnav-tall');
		$(this).siblings('.pnav-l2').toggleClass('pnav-l2-open');
	});
}

function mobileNav() {
	if ($(window).width() < 700) {
		$('.pnav-l2-li-a').click(function() {
			$(this).siblings('.pnav-l3').addClass('pnav-l3-open');
		});

		$('.l2-back').click(function() {
			$('.pnav-l2').removeClass('pnav-l2-open');
		});

		$('.l3-back').click(function() {
			$('.pnav-l3').removeClass('pnav-l3-open');
		});
	}
}

/************************************************
******** FOOTER ********************************/
function footer() {
	$('.footer-h2').click(function() {
		if( $(this).siblings('.footer-link').is(':visible') ) {
			$(this).siblings('.footer-link').hide();
		} else {
			$(this).siblings('.footer-link').show();
		}
		$(this).siblings('.footer-link').toggleClass('footer-show');
		$(this).parent('ul').siblings().children('.footer-link').hide();
	});
}

$(function() {

	/******************************************
	********* Primary Nav ******************/
	initNav();
	mobileNav();

	/******************************************
	********* My Account Nav ******************/
	$(".a-dashboard").click(function() {
		$('.search').removeClass('search-open');
		$('.subnav').toggleClass('subnav-open');
	});

	$(".a-search").click(function() {
		$('.subnav').removeClass('subnav-open');
		$('.search').toggleClass('search-open');
	});

	$("nav ul li a").click(function() {
		$(this).parent().siblings().children('a').removeClass('active');
		$(this).toggleClass('active');
	});

	/*******************************************
	************ FOOTER ***********************/
	footer();


	/*******************************************
	*********** Window Resize ******************/
	$( window ).resize(function() {
		mobileNav();

		if ($(window).width() > 700) {
			$('.footer-link').show();
		}
		
	});


});