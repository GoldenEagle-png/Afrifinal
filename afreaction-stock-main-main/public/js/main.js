"user strict";

/*============================================ 
# Template Name: Aseet
# Version: 1.0
# Date: 04/08/2023
# Author: gramentheme
# Author URI: https://themeforest.net/user/gramentheme
# Description: Aseet - HTML Templates
============================================*/

//01 owl slider
//02 swipper slider
//03 nice select 
//04 audio player
//05 smooth scroller
//06 Fixed property
//07 video player
//08 odometer
//09 wow

	$(document).ready(function () {
	//--Owl Carousel--
	$(".banner__section").owlCarousel({
		loop: true,
		margin: 0,
		animateOut: 'fadeOut',
		smartSpeed: 2000,
		autoplayTimeout: 2500,
		autoplay: true,
		nav: false,
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 1,
			},
			991: {
				items: 1,
			},
			1199: {
				items: 1,
			},
			1399: {
				items: 1,
			},
		},
	});
	//tag slider
	$(".tagslider__wrap1").owlCarousel({
		items: 7,
        loop: true,
        margin: 30,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 4000,
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 2,
				margin: 15
			},
			500: {
				items: 4,
				margin: 15
			},
			767: {
				items: 5,
				margin: 15
			},
			991: {
				items: 6,
				margin: 15
			},
			1199: {
				items: 6, 
			},
			1399: {
				items: 7,
			},
		},
	});
	$(".tagslider__wrap2").owlCarousel({
		items: 7,
        loop: true,
        margin: 30,
		rtl: true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 4000,
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 2,
				margin: 15
			},
			500: {
				items: 4,
				margin: 15
			},
			767: {
				items: 5,
				margin: 15
			},
			991: {
				items: 6,
				margin: 15
			},
			1199: {
				items: 6,
			},
			1399: {
				items: 7,
			},
		},
	});
	//tag slider
	//blog slider
	$(".blog__slider").owlCarousel({
		loop: true,
		margin: 24,
		smartSpeed: 2500,
		autoplayTimeout: 2500,
		autoplay: false,
		nav: false,
		dots: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			575: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1199: {
				items: 3,
			},
			1499: {
				items: 3,
			},
			1999: {
				items: 3,
			},
		},
	});
	//blog slider
	//sponsor
	$(".company__innter").owlCarousel({
		loop: true,
		margin: 20,
		smartSpeed: 2000,
		autoplayTimeout: 2000,
		autoplay: false,
		nav: false,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 2,
			},
			400: {
				items: 3,
			},
			575: {
				items: 4,
			},
			767: {
				items: 5,
			},
			991: {
				items: 6,
			},
			1199: {
				items: 6,
			},
			1499: {
				items: 6,
			},
		},
	});
	//blgo slider
	$(".blog__twoslier").owlCarousel({
		loop: true,
		margin: 20,
		smartSpeed: 2500,
		stagePadding: 140,
		autoplayTimeout: 3000,
		autoplay: false,
		nav: false,
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				stagePadding: 20
			},
			580: {
				items: 2,
				stagePadding: 40
			},
			767: {
				items: 2,
				stagePadding: 40
			},
			991: {
				items: 3,
				stagePadding: 40
			},
			1199: {
				items: 3,
				stagePadding: 40
			},
			1399: {
				items: 3,
				stagePadding: 40
			},
			1499: {
				items: 3,
			},
			1699: {
				items: 3,
			},
		},
	});
	//complate slider
	$(".complate__slidewrap").owlCarousel({
		loop: true,
		margin: 20,
		smartSpeed: 2500,
		stagePadding: 0,
		mouseDrag: true,
		singleItem: true,
		animateIn: 'fadeIn', 
		animateOut: 'fadeOut',
		autoplayTimeout: 3000,
		autoplay: false,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fa-solid fa-arrow-left"></i>',
			'<i class="fa-solid fa-arrow-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			580: {
				items: 1,
			},
			767: {
				items: 1,
			},
			991: {
				items: 1,
			},
			1199: {
				items: 1,
			},
			1399: {
				items: 1,
			},
			1499: {
				items: 1,
			},
			1699: {
				items: 1,
			},
		},
	});
	//complate slider
	$(".testimonial__thmewrap").owlCarousel({
		loop: true,
		margin: 20,
		smartSpeed: 2500,
		stagePadding: 0,
		mouseDrag: true,
		singleItem: true,
		animateIn: 'fadeIn', 
		animateOut: 'fadeOut',
		autoplayTimeout: 3000,
		autoplay: true,
		nav: false,
		dots: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			580: {
				items: 1,
			},
			767: {
				items: 1,
			},
			991: {
				items: 1,
			},
			1199: {
				items: 1,
			},
			1399: {
				items: 1,
			},
			1499: {
				items: 1,
			},
			1699: {
				items: 1,
			},
		},
	});
	$(".testimonial__slider").owlCarousel({
		loop: true,
		margin: 10,
		smartSpeed: 2500,
		autoplayTimeout: 2500,
		autoplay: false,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			575: {
				items: 1,
			},
			767: {
				items: 1,
			},
			991: {
				items: 1,
			},
			1199: {
				items: 1,
			},
			1499: {
				items: 1,
			},
			1999: {
				items: 1,
			},
		},
	});
	//virtical 
	$(".virti__slideone").owlCarousel({
		loop: true,
		margin: 10,
		smartSpeed: 2500,
		autoplayTimeout: 2500,
		autoplay: true,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		rewind: true,
		nav: true,
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 3,
			},
			575: {
				items: 3,
			},
			767: {
				items: 3,
			},
			991: {
				items: 3,
			},
			1199: {
				items: 3,
			},
			1499: {
				items: 3,
			},
			1999: {
				items: 3,
			},
		},
	});

	//text slider
	$(".text__wrap1").owlCarousel({
		items: 8,
        loop: true,
        margin: 5,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 4000,
        autoplaySpeed: 10000,
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 1,
			},
			991: {
				items: 1,
			},
			1199: {
				items: 1, 
			},
			1399: {
				items: 1,
			},
		},
	});
	$(".text__wrap2").owlCarousel({
		items: 1,
        loop: true,
        margin: 5,
		rtl: true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 4000,
        autoplaySpeed: 10000,
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 1,
			},
			991: {
				items: 1,
			},
			1199: {
				items: 1,
			},
			1399: {
				items: 1,
			},
		},
	});
	//text slider


	//slick
		//--slick
		$('#lottery__slide1').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			pauseOnHover: true,
			vertical: true,
			arrows: false,
			autoplaySpeed: 0,
			speed: 4000,
			cssEase: 'linear',
		});
	
		$('#lottery__slide2').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			vertical: true,
			arrows: false,
			autoplaySpeed: 0,
			pauseOnHover: true,
			speed: 4000,
			cssEase: 'linear',
		});
		//--slick
	//slick

	//team slider
	$(".team__wrap").owlCarousel({
		loop: true,
		margin: 20,
		smartSpeed: 2000,
		autoplayTimeout: 2000,
		autoplay: false,
		nav: false,
		center: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 2,
			},
			400: {
				items: 2,
			},
			575: {
				items: 3,
			},
			767: {
				items: 3,
			},
			991: {
				items: 4.2,
			},
			1199: {
				items: 4.2,
			},
			1499: {
				items: 4.2,
			},
		},
	});
	//team slider


	
	// password hide--
	$(".toggle-password, .toggle-password2, .toggle-password3, .toggle-password4, .toggle-password5").click(function() {
		$(this).toggleClass("fa-eye fa-eye-slash");
		var input = $($(this).attr("id"));
		if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});
	// password hide--
	
	//--Nice Select--
	$('select').niceSelect();
	//--Nice Select--

	//--audio play--
	$('audio').audioPlayer();
	//--audio play--

	//menu top fixed bar
	var fixed_top = $(".header-section");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 20) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
			fixed_top.removeClass("slideInUp");
			$("body").addClass("body-padding");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
			fixed_top.addClass("slideInUp");
			$("body").removeClass("body-padding");
		}
	});
	//menu top fixed bar

	//--Header Menu
	$(".header-bar").on("click", function (e) {
		$(".main-menu, .header-bar").toggleClass("active");
	});
	$(".main-menu li a").on("click", function (e) {
		var element = $(this).parent("li");
		if (element.hasClass("open")) {
			element.removeClass("open");
			element.find("li").removeClass("open");
			element.find("ul").slideUp(600);
		} else {
			element.siblings("li").removeClass("open");
			element.siblings("li").find("li").removeClass("open");
			element.addClass("open");
			element.find("ul").slideDown(600);
			element.siblings("li").find("ul").slideUp(600);
			element.siblings("li").find("ul").slideUp(600);
		}
	});
	$(".scrollToTop").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			700
		);
		return false;
	});
	//--Header Menu--

	//--Magnifiqpopup--
	$('.video-btn').magnificPopup({
		type: 'iframe',
		callbacks: {
			
	  	}
	});
	//--Magnifiqpopup--

	//--Odometer--
	$(".odometer-item").each(function () {
		$(this).isInViewport(function (status) {
			if (status === "entered") {
				for (
					var i = 0;
					i < document.querySelectorAll(".odometer").length;
					i++
				) {
					var el = document.querySelectorAll(".odometer")[i];
					el.innerHTML = el.getAttribute("data-odometer-final");
				}
			}
		});
	});
	//--Odometer--

	//--Quantity--
	
	var input = document.querySelector('#qty');
	var btnminus = document.querySelector('.qtyminus');
	var btnplus = document.querySelector('.qtyplus');

	if (input !== undefined && btnminus !== undefined && btnplus !== undefined && input !== null && btnminus !== null && btnplus !== null) {
		
		var min = Number(input.getAttribute('min'));
		var max = Number(input.getAttribute('max'));
		var step = Number(input.getAttribute('step'));

		function qtyminus(e) {
			var current = Number(input.value);
			var newval = (current - step);
			if(newval < min) {
				newval = min;
			} else if(newval > max) {
				newval = max;
			} 
			input.value = Number(newval);
			e.preventDefault();
		}

		function qtyplus(e) {
			var current = Number(input.value);
			var newval = (current + step);
			if(newval > max) newval = max;
			input.value = Number(newval);
			e.preventDefault();
		}
			
		btnminus.addEventListener('click', qtyminus);
		btnplus.addEventListener('click', qtyplus);
	
	}
	//--Quantity--

	//--Wow Animation--
	new WOW().init();
	//--Wow Animation--

	//--Preloader--//
	setTimeout(function(){
		$('.preloader__wrap').fadeToggle();
	}, 1000);
	//--Preloader--//

});




	


var cip = $(".video").hover( hoverVideo, hideVideo );

		function hoverVideo(e) {  
			$('video', this).get(0).play(); 
		}

		function hideVideo(e) {
			$('video', this).get(0).pause(); 
		}




