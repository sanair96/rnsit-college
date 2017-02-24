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
		overflowScroll: true,
		updateHash: true,
		touchScroll:true,
		before:function() {},
		after:function() {},
		afterResize:function() {},
		afterRender:function() {}
	});

	$(window).scroll(function (event) {
    topup = $(document).scrollTop();
		if($(window).height() < topup)
		{
			$('nav').removeClass('nav');
			$('.brand-logo').removeClass('hidden');
		}
		else{
			$('nav').addClass('nav');
			$('.brand-logo').addClass('hidden');
		}
});

});