$(function() {

	/******************************************
	********* Primary Nav ******************/
	$('.nav-trigger').click(function() {
		$('.pnav').toggleClass('pnav-open');
	});

	$('.pnav-li-a').click(function() {
		$('.pnav').toggleClass('pnav-tall');
		$(this).siblings('.pnav-l2').toggleClass('pnav-l2-open');
		console.log("IN pnav-li a click" );
	});

	/* TODO: fix window width + add resize */
	if ($(window).width() < 700) {

		$('.pnav-l2-li-a').click(function() {
			$(this).siblings('.pnav-l3').addClass('pnav-l3-open');
			console.log("IN pnav-l2-li a click" );
		});

		$('.l2-back').click(function() {
			$('.pnav-l2').removeClass('pnav-l2-open');
		});

		$('.l3-back').click(function() {
			$('.pnav-l3').removeClass('pnav-l3-open');
		});
	}


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

});