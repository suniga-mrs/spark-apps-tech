function onYouTubeIframeAPIReady() {
	player = new YT.Player('video-placeholder', {
	  width: 600,
	  height: 400,
	  playerVars: {
		color: 'red',
		iv_load_policy: 3
	  },
	});
  }
  


$(document).ready(function () {



	$('.nav-toggle').click(function () {
		$('.nav-toggle').toggleClass('nav-active'),
			$('.my-nav').toggleClass('my-nav-active');
		// $('body').toggleClass('overflow-hidden');	
	});

	$("#f1-trigger").click(function() {
		player.loadVideoById({
		  videoId: 'g0g5Yh9Z8NA',
		});
	
		$("#feature-vid").toggleClass("open-vid");
		player.playVideo();
	  });
	
	  $("#f2-trigger").click(function() {
		player.loadVideoById({
		  videoId: 'u1xhKtwHeb8',
		});
	
		$("#feature-vid").toggleClass("open-vid");
		player.playVideo();
	  });
	
	  $("#f3-trigger").click(function() {
		player.loadVideoById({
		  videoId: 'm5WvcXp2dqU',
		});
	
		$("#feature-vid").toggleClass("open-vid");
		player.playVideo();
	  });
	
	  $("#f4-trigger").click(function() {
		player.loadVideoById({
		  videoId: 'iiU-VKeZ8DA',
		});
	
		$("#feature-vid").toggleClass("open-vid");
		player.playVideo();
	  });
	
	  $("#vid-close").click(function() {
		$("#feature-vid").removeClass("open-vid");
		player.stopVideo();
	  });
	
	  $("#feature-vid").mouseup(function(e) {
		var subject = $("#video-placeholder");
	
		if (e.target.id != subject.attr('id') && !subject.has(e.target).length) {
		  $("#vid-close").click();
		}
	
	  });

		$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:10,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        426:{
		            items:2,
		            nav:true
		        },
		        900:{
		            items:4,
		            nav:false,
		            loop:false
		        }
		    }
		});

		AOS.init({
		  useClassNames: true,
		  initClassName: false,
		  animatedClassName: 'animated',
		});
});