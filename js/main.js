$(function(){
	//招聘
	$(".work_item").each(function(index){
		var _this = $(this);
		var off = false
		_this.click(function(){
			off = !off
			if(index == 0){
				return
			}
			if(off){
				_this.addClass('active').siblings().removeClass('active')
			}else{
				_this.removeClass('active')
			}
		})
	})
	//底部自适应
	var height = $(window).height();
	var bodyHeight = $("body").height();
	var headerHeight = $(".header").height();
	var footerHeight = $(".footer").height();
	if(bodyHeight < height){
		$(".footer").addClass('ft_hd')
	}else{
		$(".footer").removeClass('ft_hd')
	}
	
	//顶部导航
	var off = false
	$(".icon_nav").click(function(){
		off = !off;
		if(off){
			$(".nav_phone_list").addClass('active')
		}else{
			$(".nav_phone_list").removeClass("active")
		}
	});
	var offChid = false
	$(".solve_nav").click(function(){
		offChid = !offChid
		if(offChid){
			$(".icon_arrow_phone").addClass('active')
			$(".solve_box").addClass('active')
		}else{
			$(".icon_arrow_phone").removeClass('active')
			$(".solve_box").removeClass('active')
		}
	})
	
})