$(document).ready(function(){

	// alert("JS Linked");
	$('.nav-toggle').click(function(){
		$('.nav-toggle').toggleClass('nav-active'),
		$('#myNav').toggleClass('d-none'),
		$('.my-nav').toggleClass('my-nav-active');
	})
});	