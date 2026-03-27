
	$(function(){
		$(".slide").carouFredSel({
			circular:true,
			direction:"left",
			scroll: {
				duration: 700,
				fx:"scroll",
				easing:"linear"
			},
			auto:{
				play:true,
				timeoutDuration: 5000,
				pauseOnHover: false,
			},
			items:{
				visible:1,
				start:0,
				height:"40%" //横幅に対する高さの割合
			},
			prev:".btn-prev",
			next:".btn-next",
			pagination:{
			container:".slide-pg"
			},
			responsive:true,
		});
	});
