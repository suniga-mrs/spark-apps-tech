$(document).ready(function(){


	function hide(){
		$('body').removeClass('overflow-hidden');
		$('.my-nav').removeClass('my-nav-active'),
		$('.nav-toggle').removeClass('nav-active'),
	}
	// alert("JS Linked");
	$('.nav-toggle').click(function(){
		$('.nav-toggle').toggleClass('nav-active'),
		$('.my-nav').toggleClass('my-nav-active'),
		$('body').toggleClass('overflow-hidden');
	})

	$('.my-nav-active').click(function(){
		$('.nav-toggle').toggleClass('nav-active'),
		$('.my-nav').toggleClass('my-nav-active'),
		$('body').toggleClass('overflow-hidden');
	})

});	