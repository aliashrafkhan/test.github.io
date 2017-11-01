$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".product-carousel").owlCarousel({
    	items: 4,
    	margin: 30,
    	autoplay: true,
    	loop: true,
    	nav: true,
    	navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]

    });
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

}(jQuery));