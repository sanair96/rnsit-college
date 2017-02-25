$(document).ready(function(){
	$(".button-collapse").sideNav();
	$.scrollify({
		section : ".division",
		interstitialSection : "footer",
		easing: "easeOutExpo",
		scrollSpeed: 1100,
		offset : 0,
		scrollbars: true,
		standardScrollElements: "",
		setHeights: true,
		overflowScroll: false,
		updateHash: true,
		touchScroll:true,
		before:function() {},
		after:function() {},
		afterResize:function() {},
		afterRender:function() {}
	});
		$(window).resize(function	(){
			$('.division')
		})
	$(window).scroll(function (event) {
    topup = $(document).scrollTop();
		if(($(window).height()-30) < topup)
		{
			$('nav').removeClass('nav');
			$('.nav-name').removeClass('hidden');
			$('.svg-logo').removeClass('hidden');
		}
		else{
			$('nav').addClass('nav');
			$('.nav-name').addClass('hidden');
			$('.svg-logo').addClass('hidden');
		}
});

    $('#fullpage').fullpage();
});