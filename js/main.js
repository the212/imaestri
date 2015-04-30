$(function() {

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