$( document ).ready(function() {


	$(function () {
    $(window).scroll(function (e) {
        var scrollTop = $(window).scrollTop();
        var viewportHeight = $(window).height();
        $('section').each(function () {
            var top = $(this).offset().top;
            var bottom = top + $(this).height();
            if (top <= scrollTop && bottom >= (scrollTop + viewportHeight - 200)) {
                $(this).addClass('visible');
            } else {
            }
        });
    });
});


	$('.section_skills').trigger('inview');



    $('#fullpage').fullpage({
    	menu: '.main-nav ul',
    	anchors: ['home', 'skills', 'portfolio', 'contact'],
    	css3: true,
        scrollingSpeed: 700,
        autoScrolling: false,
        allowPageScroll: false,
        fitToSection: false,
        sectionSelector: 'section',
        responsiveWidth: 768
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

	$('.fp-scroller').css('transform','translate(0px, 0px) translateZ(0px)');

$('a.page-scroll').bind('click', function(event) {
     $('.fp-scroller').css('transform','translate(0px, 0px) translateZ(0px)');
     $.fn.fullpage.moveTo('section_portfolio');
     event.preventDefault();
});
});

/* SCROLL REVEAL ANIMATIONS */

$( document ).ready(function() {

	window.sr = ScrollReveal();
	sr.reveal('article', { origin: 'left', distance: '200px', easing: 'ease-in-out' });
	sr.reveal('.myself', { origin: 'right', distance: '200px', easing: 'ease-in-out', scale: 1 });
	sr.reveal('.portfolio_item:nth-of-type(2n-1)', {origin: 'left'});
	sr.reveal('.portfolio_item:nth-of-type(2n)', {origin: 'right'});
	sr.reveal('.skill');

});
