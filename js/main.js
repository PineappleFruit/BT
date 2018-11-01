$(function(){
	//招聘
	$(".work_item").each(function(index){
		var _this = $(this);
		var off = false
		_this.click(function(){
			off = !off
			console.log(off)
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
})