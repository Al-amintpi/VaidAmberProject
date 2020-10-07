
$(document).ready(function(){
	$('.banners').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true,
	});
	// banners carousel
	$('.works-items').owlCarousel({
		items:3,
		loop:true,
		nav:true,
		dots:false,
		margin:30,
		responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        }   
    }

	});

	$('.testimonials').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true,
		autoplay:true,		 
	});

	// Portfolio single page owlcarosuel
	$('.slide-image').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false,
	});

	$('.work-popup').magnificPopup({
		type:'image',
		gallery:{
			enabled:true
		}
	});

	// asPiprogresscircle
	$('.pie_progress').asPieProgress({
        namespace: 'pie_progress',
        speed: 50
      });
	$('.pie_progress').asPieProgress('start');

	//back to Top
	$('.scrollBtn').click(function(){
		$('html,body').animate({
			scrollTop:0
		}, 1000);
		return false;
	})
		// searc input box popup 
		$('.open-popup-link').magnificPopup({
		  type:'inline',
		  midClick: true 
		});

		// icon click nav bar show 
		$('.nav-icon').click(function(){
			$('.menu ul').slideToggle(1000);
			return false;
		});
	
	// Portfolio page owlCarousel 
	$('.latest-works').owlCarousel({
		items:1,
		nav:true,
		dots:false,
		margin:30,

		animateOut: 'slideOutDown',
	    animateIn: 'flipInX',
	    stagePadding:0,
	    smartSpeed:450
 
	});

	//portfolio popup 
	$('.portfolio-popup').magnificPopup({
		type:'image',
		gallery:{
			enabled:true
		}
	});

	//grid portfolio page
	$('.portfolio-grid-popup').magnificPopup({
		type:'image',
		gallery:{
			enabled:true
		}
	});

	// gird portfolio video popup
	$('.portfolio-grid-video').magnificPopup({
		type:'iframe',
		iframe: {
		  	markup: '<div class="mfp-iframe-scaler">'+
		            '<div class="mfp-close"></div>'+
		            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
		          '</div>', 

		  	patterns: {
		    youtube: {
		    	index: 'youtube.com/',

		      	id: 'v=', 

		      	src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
		    },
		    vimeo: {
		      	index: 'vimeo.com/',
		      	id: '/',
		      	src: '//player.vimeo.com/video/%id%?autoplay=1'
		    },
		    gmaps: {
		      	index: '//maps.google.',
		      	src: '%id%&output=embed'
		    }

		  },

		  srcAction: 'iframe_src',
		}
	});

	// portfolio-grid page Mixitup
	var mixer = mixitup('.portgrid-ex-margin', {

		 animation: {
        	effectsIn: 'fade translateY(-100%)'
    	}
	});

	//Portfolio masonary page Mixtiup
	var mixer = mixitup('.portfolio-masonary-ex-margin', {

		 animation: {
        	effectsIn: 'fade translateY(-100%)'
    	}
	});


});