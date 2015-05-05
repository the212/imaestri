$(function() {

	/******************************************
	********* Primary Nav ******************/
	$('.nav-trigger').click(function() {
		$('.primarynav').toggleClass('primarynav-open');
	});

	$('.primarynav li a').click(function() {
		$(this).siblings('.primarynav-l2').addClass('primarynav-l2-open');
	});

	$('.primarynav-l2 li a').click(function() {
		$(this).siblings('.primarynav-l3').addClass('primarynav-l3-open');
	});

	$('.l2-back').click(function() {
		$('.primarynav-l2').removeClass('primarynav-l2-open');
	});

	$('.l3-back').click(function() {
		$('.primarynav-l3').removeClass('primarynav-l3-open');
	});


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