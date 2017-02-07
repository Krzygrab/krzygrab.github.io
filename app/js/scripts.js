$( document ).ready(function() {

    $('#fullpage').fullpage({
    	menu: '.main-nav ul',
    	anchors: ['home', 'skills', 'portfolio', 'contact'],
    	css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        allowPageScroll: true,
        sectionSelector: 'section',
    });


	$('.main-nav li').on('click', function(){
		if ( $(".main-nav").hasClass("open") ) {
 			$('.main-nav').removeClass("open")
 		}
	});

	$('.main-nav li:nth-child(1)').on('click', '#moveTo', function(){
		$.fn.fullpage.moveTo(1, 2);
	});

	$('.main-nav li:nth-child(2)').on('click', '#moveTo', function(){
		$.fn.fullpage.moveTo(2, 2);
	});

	$('.main-nav li:nth-child(3)').on('click', function(){
		$.fn.fullpage.moveTo(3, 2);
	});

	$('.main-nav li:nth-child(4)').on('click', function(){
		$.fn.fullpage.moveTo(4, 2);
	});

	$(".burger-cont").on('click', function(){
    $(".main-nav").toggleClass("open");
	});

});
