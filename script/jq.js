/* jq */
$(function () {
	/* quick */
	const topmenu = $(".top_menu"),
		quick1 = topmenu.find(".quick1"),
		quick2 = topmenu.find(".quick2")

	quick1.click(function () {
		$(this).toggleClass("on")
		quick2.removeClass("on")
	})
	quick2.click(function () {
		$(this).toggleClass("on")
		quick1.removeClass("on")
	})
	/* header(quick_menu) */
	const depth = $(".q_menu1>li")
	depth.mouseover(function () {
		depth.removeClass("active")
		$(this).addClass("active")
	})
	/* top button */
	const btt = $("#back_to_top")
	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btt.addClass("visible")
		} else {
			btt.removeClass("visible")
		}
	})
	btt.click(function (e) {
		e.preventDefault()
		$("html,body").animate({ scrollTop: 0 }, 500)
	})

	/* slide_banner */
	const visual = $(".banner_img .banner_slide li")
	const visualCount = visual.length
	let current = 0
	let timer = null
	const leftBtn = $(".banner_btn .btn_left")
	const rightBtn = $(".banner_btn .btn_right")

	let visualPos = visual.each(function (i) {
		$(this).css("left", i * 705)
	})

	function horizontalSlide() {
		var prev = visual.eq(current)
		move(prev, 0, "-705px")
		current++
		if (current == visualCount) {
			current = 0
		}
		var next = visual.eq(current)
		move(next, "705px", 0)
	}
	function move(tg, start, end) {
		tg.css("left", start).stop().animate({ left: end }, 1000)
	}

	function startTimer() {
		timer = setInterval(horizontalSlide, 3000)
	}
	function stopTimer() {
		clearInterval(timer)
	}
	leftBtn.hover(stopTimer, startTimer)
	rightBtn.hover(stopTimer, startTimer)
	visual.hover(stopTimer, startTimer)
	
	startTimer()

	$(".main_banner .btn_stop").click(function () {
		$(this).removeClass("active")
		clearInterval(timer)
		leftBtn.hover(stopTimer)
		rightBtn.hover(stopTimer)
		visual.hover(stopTimer)
		$(".main_banner .btn_play").addClass("active")
	})

	$(".main_banner .btn_play").click(function () {
		$(this).removeClass("active")
		leftBtn.hover(stopTimer, startTimer)
		rightBtn.hover(stopTimer, startTimer)
		visual.hover(stopTimer,startTimer)
		$(".main_banner .btn_stop").addClass("active")
	})

	rightBtn.click(function () {
		var prev = visual.eq(current)
		move(prev, 0, "-705px")
		current++
		if (current == visualCount) {
			current = 0
		}
		var next = visual.eq(current)
		move(next, "705px", 0)
		return false //
	})
	leftBtn.click(function () {
		var prev = visual.eq(current)
		move(prev, 0, "705px")
		current--
		if (current == -visualCount) {
			current = 0
		}
		var next = visual.eq(current)
		move(next, "-705px", 0)
		return false //
	})

	/* slide_news */
	$(".main_content3_board").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
	})
	$(".content3_btn .btn_stop").click(function () {
		$(this).removeClass("active")
		$(".content3_btn .btn_play").addClass("active")
		$(".main_content3_board").slick("slickPause")
	})

	$(".content3_btn .btn_play").click(function () {
		$(this).removeClass("active")
		$(".content3_btn .btn_stop").addClass("active")
		$(".main_content3_board").slick("slickPlay")
	})

	//sns 탭슬라이드 함수실행
	slide_sns()

	//sns 탭슬라이드 함수
	function slide_sns() {
		var cnt = [0, 0, 0, 0]
		var setId = 0
		var slideW = 268
		var c = 0

		cnt[c] = 0

		const tabObj = {
			init() {
				this.timer()
			},
			timer() {
				let tabBtn = $(".tab_button")
				const n = $(".tab_button").length - 1
				let setId = null
				setId = setInterval(() => {
					c++
					c > n ? (c = 0) : c
					tabBtn.eq(c).trigger("click")
				}, 15000)
			},
		}

		tabObj.init()

		$(".tab_button").each(function (idx) {
			$(this).on({
				click: function () {
					c = idx

					$(".slide_view").stop().hide()
					$(".slide_view").eq(c).stop().fadeIn(500)

					$(".tab_button").removeClass("addTab")
					$(this).addClass("addTab")
				},
			})
		})

		function mainSlideFn() {
			$(".slide_wrap")
				.eq(c)
				.stop()
				.animate({ left: -(slideW * cnt[c]) }, 500, function () {
					if (cnt[c] > 4) {
						cnt[c] = 0
					}
					if (cnt[c] < 0) {
						cnt[c] = 4
					}
					$(".slide_wrap")
						.eq(c)
						.stop()
						.animate({ left: -(slideW * cnt[c]) }, 0)
				})
		}

		function nextCountFn() {
			cnt[c]++
			mainSlideFn()
		}

		function prevCountFn() {
			cnt[c]--
			mainSlideFn()
		}

		function autoTimerFn() {
			setId[c] = setInterval(nextCountFn, 2500)
		}
		autoTimerFn()

		//다음 슬라이드 버튼 클릭 이벤트
		$(".next_btn_wrap").on({
			click: function () {
				if (!$(".slide_wrap").eq(c).is(":animated")) {
					nextCountFn()
				}
			},
		})

		//이전 슬라이드 버튼 클릭 이벤트
		$(".prev_btn_wrap").on({
			click: function () {
				if (!$(".slide_wrap").eq(c).is(":animated")) {
					prevCountFn()
				}
			},
		})

		//다음이전슬라이드 터치이벤트
		$(".slide_container").swipe({
			swipeLeft: function () {
				if (!$(".slide_wrap").eq(c).is(":animated")) {
					clearInterval(setId[c])
					nextCountFn()
				}
			},
			swipeRight: function () {
				if (!$(".slide_wrap").eq(c).is(":animated")) {
					clearInterval(setId[c])
					prevCountFn()
				}
			},
		})
	}

	/* slide_board(alim) */
	$(".content3_board").slick({
		autoplay: true,
		autoplaySpeed: 2500,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: "linear",
		dots: true,
		customPaging: function (slider, i) {
			var thumb = $(slider.$slides[i]).data('title');
			return '<div class="num2">'+thumb+ '</div>';
		} 
	})

	$(".content3_box .btn_stop").click(function () {
		$(this).removeClass("active")
		$(".content3_box .btn_play").addClass("active")
		$(".content3_board").slick("slickPause")
	})

	$(".content3_box .btn_play").click(function () {
		$(this).removeClass("active")
		$(".content3_box .btn_stop").addClass("active")
		$(".content3_board").slick("slickPlay")
	})

	/* footer_banner */
	$(".footer_slide").slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		variableWidth: true,
		auto: true,
	})

	/* adaptation */
	if (jQuery.browser.mobile == true) {
		location.href = "./mobile/"
	}
})
