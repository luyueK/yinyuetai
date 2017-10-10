$(window).load(function(){

	// 公共头部使用
	$('.top_main .top_nav>li,.top_right .func>li').mouseover(function (){
		$(this).addClass('active');
	}).mouseout(function (){
		$('.top_main .top_nav>li,.top_right .func>li').removeClass('active');	
	});

	$('.top_right .search_bar input').focus(function (){
		$('.top_right .search_bar').addClass('focus');
	}).blur(function (){
		$('.top_right .search_bar').removeClass('focus');
	});

	// 返回顶部
	$(window).scroll(function (){
		if (parseInt($(window).scrollTop())>1000){
			$('.back_top').show();
		}
	});
	var timer = null;
	$('.back_top').click(function (){
		$('body','html').animate({
			'scrollTop':0
		},1000);
		$(this).animate({
			'top':0,
			'bottom':'auto'			
		},1000,function (){
			$(this).hide().css({
				'bottom': '80px',
				'top':'auto'
			});
		});
	});

});


















