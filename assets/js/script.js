$(document).ready(function(){



	// alert("JS Linked");
	$('.nav-toggle').click(function(){
		$('.nav-toggle').toggleClass('nav-active'),
		$('.my-nav').toggleClass('my-nav-active'),
		$('body').toggleClass('overflow-hidden');
	}),
});	