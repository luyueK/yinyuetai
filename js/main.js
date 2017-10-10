$(window).load(function(){


	// banner效果
	(function(){
		var timer = null;
		function autoPlay(){

			var i = 0;
			clearInterval(timer);
			timer = setInterval(function (){
				i++;
				if ( i == 10 ) i = 0;
				$('.banner-sidebar .banner-ul li a').removeClass('active');
				$("header .banner>ul li").addClass('banner-li-2').stop().animate({
					opacity: 0,
					zIndex:0
				},1000);

				$('.banner-sidebar .banner-ul li a').eq(i).addClass('active');
				$("header .banner>ul li").removeClass('banner-li-2').eq(i).stop().animate({
					opacity: 1,
					zIndex: 1
				},1000);

			},2000);
		}

		autoPlay();

		$('header .banner .banner-sidebar li').mouseover(function (){
			clearInterval(timer);
			$('header .banner .banner-sidebar li a').removeClass('active');
			$(this).find('a').addClass('active');
			$("header .banner>ul li").addClass('banner-li-2').stop().animate({
				opacity: 0,
				zIndex:0
			},1000);
			$("header .banner>ul li").removeClass('banner-li-2').eq($(this).index()).stop().animate({
				opacity: 1,
				zIndex: 1
			},1000);
		});
		$('header .banner .banner-sidebar li').mouseout(function (){
			autoPlay();
		});
	})(); 

	// 点击箭头滑动
	(function (){
		var left = parseInt($('.content-list>.list-ul ul').css('marginLeft'));
		$('.content-list>.list-ul .list-a-hover.hover-l').click(function (){
			if ( left>-2350 ) left-=470;
			console.log(left);
			$(this).parent().find('ul').stop().animate({
				'marginLeft':left+'px'
			},1000,function(){
				if ( left==-2350 ){
					left = 0;
				$(this).parent().find('ul').css('marginLeft',left+'px');
			}
			});
			
		});
		$('.content-list>.list-ul .list-a-hover.hover-r').click(function (){
			if ( left>=0 ) {
				left-=2350;
				$(this).parent().find('ul').css('marginLeft',left+'px');
				left+=470;
			}else{
				left+=470;
			}
			console.log(left);
			$(this).parent().find('ul').stop().animate({
				'marginLeft':left+'px'
			},1000);		
		});
	})();
	
	// 
	(function (){
		$('.v-li-div').mouseover(function(){
			$(this).parent().find('.v-li-div').removeClass('active');
			$(this).addClass('active');
		})
	})();
});
