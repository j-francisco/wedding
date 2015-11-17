$( document ).ready(function() {
	
	window.mobilecheck = function() {
		var check = false;
		(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}

	/*------------------------------ Vertical Nav ----------------------*/
	
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
	
	/*------------------------------ Page Scrolling ----------------------*/
	
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	
	/*------------------------------ Tooltips ----------------------*/
	
	$('.tooltips').tooltip();

	/*------------------------------ Bootstrap Carousel ----------------------*/

	$('#myCarousel').carousel({
		interval: 18000, //changes the speed
		pause: "false"
	})
	//Bootstrap Carousel Progressbar
	
	$("#progressbar").progressbar({
		value: 1
	});
	$("#progressbar > .ui-progressbar-value").animate({
		width: "100%"
	}, 18000);
	
	$('#myCarousel').bind('slid.bs.carousel', function (e) {		
			$("#progressbar > .ui-progressbar-value").finish();
			$("#progressbar > .ui-progressbar-value").animate({
			width: "0%"
			}, 0);
			$("#progressbar > .ui-progressbar-value").animate({
			width: "100%"
			}, 18000);				
	});

	/*------------------------------ Masonry Blog -----------------*/

	var $container = $('#blogs');
	// initialize
	$container.masonry({
	  itemSelector: '.blog'
	});
	// initialize Masonry after all images have loaded  
	$container.imagesLoaded( function() {
	  $container.masonry();
	});	

	/*------------------------------ OWL Carousel -----------------*/

	$("#owl-venu").owlCarousel({
		singleItem : true,
		lazyLoad : true,
		navigation: true
	});
	
	$("#owl-gifts").owlCarousel({
		items : 5,
		lazyLoad : true
	});	
	
	/*------------------------------ Sticky Navigation -----------------*/
	
	$(".topbar-nav").sticky({topSpacing:0});
	
	/*------------------------------ Magnific POP -----------------*/
	
	$('.popup-vimeo').magnificPopup({
		type: 'iframe'
	});
	$('.popup-image').magnificPopup({
	  type: 'image',
	  removalDelay: 500, //delay removal by X to allow out-animation
	  callbacks: {
		beforeOpen: function() {
		  // just a hack that adds mfp-anim class to markup 
		   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
		   this.st.mainClass = this.st.el.attr('data-effect');
		}
	  },
	  closeOnContentClick: true,
	  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});

	/*------------------------------ Waypoint Counting -----------------*/

	$('#startcounting').waypoint(function() {
		$('.counts').countTo();
		$('#startcounting').waypoint('disable');
	});
	
	/*------------------------------ Parallax Effect -----------------*/

	if (!window.mobilecheck()) {
		$('.parallax-section').each(function(){
			$(this).parallax("50%", 0.5);
		});	
	}
	/*------------------------------ WOW Script ----------------------*/

	if (!window.mobilecheck()) {
		new WOW().init();
	}
	
	/*------------------------------ Twitter Feeds -----------------*/
	
    $(".footer-tweet").tweet({
		join_text: false,
		username: "envato", // Username
		modpath: "./js/twitter/",
		avatar_size: false,
		count: 3,
		template: "{text} <br> {time}",
		loading_text: "loading twitter feed...",
		seconds_ago_text: "%d seconds ago",
		a_minutes_ago_text: "a minute ago",
		minutes_ago_text: "%d minutes ago",
		a_hours_ago_text: "an hour ago",
		hours_ago_text: "%d hours ago",
		a_day_ago_text: "a day ago",
		days_ago_text: "%d days ago",
		view_text: "view tweet on twitter"
	});
	
	$(".footer-tweet ul").owlCarousel({singleItem : true,});
	
	/*------------------------------ Steps Form -----------------*/
	
	// var theForm = document.getElementById( 'theForm' );

	// new stepsForm( theForm, {
	// 	onSubmit : function( form ) {
	// 		// hide form
	// 		classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );

	// 		var data = $("#theForm").serialize();
	// 		$.ajax({
	// 			type	: "POST",
	// 			url 	: "ajax/rsvp.php",
	// 			data 	: data,
	// 			success : function(q)
	// 				{
	// 				$("#ContactFormDiv").html(q);
	// 				}
	// 			});
	// 		return false;
	// 	}
	// } );	
			
	
});


/*------------------------------ Count Down ----------------------*/

setInterval(function() {
    var timespan = countdown(new Date("05/21/2016"), new Date());
    var div = document.getElementById('time');
    div.innerHTML = "</div>" + "<div><span>Months</span>" + timespan.months + "</div>" + "<div><span>Days</span>" + timespan.days + "</div>" + "<div><span>Hours</span>" + timespan.hours + "</div>" + "<div><span>Minutes</span>" + timespan.minutes + "</div>" + "<div><span>Seconds</span>" + timespan.seconds + "</div>"
}, 1000);

/*------------------------------ Tooltips ----------------------*/

$.widget.bridge('uitooltip', $.ui.tooltip); // Resolve name collision between jQuery UI and Bootstrap

/*------------------------------ Preloader ----------------------*/

$(window).load(function() { 
	$('.spinner').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
	$('body').delay(350).css({'overflow':'visible'});
});

/*------------------------------ Collapse the navbar on scroll ----------------------*/

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

/*------------------------------ Google Map ----------------------*/

google.maps.event.addDomListener(window, 'load', init);
function init() {	
	// var mainPosition = new google.maps.LatLng(42.630544, -70.774703);
	// var mapOptions = {
	// 	zoom: 10,
	// 	scrollwheel: false,
	// 	disableDefaultUI: true,
	// 	center: mainPosition, // Melbourne
	// 	styles: [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off","hue": "#ffffff"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
	// };
	// var mapElement = document.getElementById('map');
	// var map = new google.maps.Map(mapElement, mapOptions);
		
		
	// var contentString =
	// 	'<div class="map-content">'+
	// 	'<h3>Our City</h3>'+
	// 	'<p>Melbourne is the capital and most populous city in the state of Victoria, and the second most populous city in Australia.The name "Melbourne" refers to an urban agglomeration area spanning 9,900 km2 that comprises the greater metropolis – as well as being a common name for its metropolitan hub, the Melbourne City Centre.</p>'+
	// 	'</div>'
	
	// var image = 'images/marker.png';
	// var myLatLng = new google.maps.LatLng(42.630544, -70.774703);
	// var mapMarker = new google.maps.Marker({
	// 	position: myLatLng,
	// 	map: map,
	// 	icon: image,
	// 	title:  'Frostbyte Interactive'
	// });

	// var homeLatLng = new google.maps.LagLng(42.549415, -71.028826);
	// var homeMarker = new google.maps.Marker({
	// 	position: homeLatLng,
	// 	map: map,
	// 	icon: image,
	// 	title:  'Frostbyte Interactive'
	// });

	// var infowindow = new google.maps.InfoWindow({
	// 	content: contentString
	// });

	// google.maps.event.addListener(homeMarker, 'click', function() {
	// 	infowindow.open(map, homeMarker);
	// }); 
	
	var homeContentString =
		'<div class="map-content">'+
		'<h3>Our Home</h3>'+
		'<p>We recently bought a house in Peabody, MA.</p>'+
		'</div>'

	var essexContentString =
		'<div class="map-content pink">'+
		'<h3>The Essex Room</h3>'+
		'<p>The Essex Room is located at 125 Main St, Essex, MA 01929.</p>'+
		'</div>'

	var locations = [
      [essexContentString, 42.630544, -70.774703, 1, 'images/marker.png'],
      [homeContentString, 42.549415, -71.028826, 2, 'images/home_icon.png']
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: new google.maps.LatLng(42.60, -70.90),
		// mapTypeId: google.maps.MapTypeId.ROADMAP
		scrollwheel: false,
		disableDefaultUI: true,
		// center: mainPosition, // Melbourne
		styles: [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off","hue": "#ffffff"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: locations[i][4]
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    } 	
}