/**
 * global.js
 * @authors Ou Yuan (http://beyondouyuan.firhub.io)
 * @date    2017-01-10 13:43:24
 * @version $1.0$
 */

$(function() {
	console.log($('#full-container').length)
	if($('#full-container').length = 0 && $('#full-container')) {

		$('#full-container').fullpage({
			'navigation': true,
			'navigationPosition': 'right',
			'anchors': ["page1", "page2", "page3", "page4", "page5", "page6"],
			fitToSection: true,
			scrollOverflow: true,
			// scrollBar: true,
			verticalCentered: true,
			scrollingSpeed: 1200,
			recordHistory: true,
			afterLoad: function(anchorLink, index) {
				if(index == '1') {
					addAnimationList(changeBlur, slideImgAanimation, 1500);
				}
				if(index == '2') {
					addListernerAnimation(addBgAnimationClass, addImgAnimationClass, 1500);
				}
				if(index == '3') {
					addListernerAnimation(addBgAnimationClass3, addImgAnimationClass3, 1500);
				}
				if(index == '4') {
					addListernerAnimation(addBgAnimationClass4, addImgAnimationClass4, 1500);
				}
				if(index == '5') {
					$.fn.fullpage.setAllowScrolling(false);
					ajaxBull(1);
					ajaxNews(1);
				}
			},
			onLeave: function(index, direction) {
				if(index == '1') {
					removeAnimationClass1();
				}
				if(index == '2') {
					removeAnimationClass2();
				}
				if(index == '3') {
					removeAnimationClass3();
				}
				if(index == '4') {
					removeAnimationClass4();
				}
				if(index == '5') {
					$.fn.fullpage.setAllowScrolling(true);
				}
			}
		});
	} else {
		ajaxBull(1);
		ajaxNews(1);
	}

});

// 控制动画序列
function addAnimationList(fn, callback, timer) {
	fn();
	setTimeout(callback, timer);
}

function removeBlur() {
	$('.section1 .section-bg').removeClass('active');
}

function changeBlur() {
	$('.section1 .section-bg').addClass('active');
}

function slideImgAanimation() {
	$('.section1 .img-box1').addClass('active');
	$('.section1 .img-box2').addClass('active');
}

function addListernerAnimation(fn, callback, timer) {
	fn();
	setTimeout(callback, timer);
}

function addBgAnimationClass() {
	$('.section2 .section-bg').addClass('active');
}

function addImgAnimationClass() {
	$('.section2 .img-box1').addClass('active');
	$('.section2 .img-box2').addClass('active');
}

function addBgAnimationClass3() {
	$('.section3 .section-bg').addClass('active');
}

function addImgAnimationClass3() {
	$('.section3 .img-box1').addClass('active');
	$('.section3 .img-box2').addClass('active');
}

function addBgAnimationClass4() {
	$('.section4 .section-bg').addClass('active');
}

function addImgAnimationClass4() {
	$('.section4 .img-box1').addClass('active');
	$('.section4 .img-box2').addClass('active');
}

function removeAnimationClass1() {
	$('.section1 .section-bg').removeClass('active');
	$('.section1 .img-box').removeClass('active');
}

function removeAnimationClass2() {
	$('.section2 .section-bg').removeClass('active');
	$('.section2 .img-box').removeClass('active');
}

function removeAnimationClass3() {
	$('.section2 .section-bg').removeClass('active');
	$('.section2 .img-box3').removeClass('active');
}

function removeAnimationClass4() {
	$('.section4 .section-bg').removeClass('active');
	$('.section4 .img-box').removeClass('active');
}

function footerPosition() {
	$('#footer').removeClass('fixed-bottom');
	var contentHeight = document.body.scrollHeight,
		winHeight = window.innerHeight;
	if(!(contentHeight > winHeight)) {
		$('#footer').addClass('fixed-bottom');
	} else {
		$('#footer').removeClass('fixed-bottom');
	}
}

// var rootPaths = 'http://192.168.30.216:9999/BMS/';
var rootPaths = 'http://119.147.172.215:8088/BMS/';
// 时间格式化
function timeTranfer(dt) {
	var date = new Date(dt);
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	m = m < 10 ? ('0' + m) : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	return y + '-' + m + '-' + d;
}
var bullMethod = 'page/bulletinpageList.do?pageIndex=';
var newsMethod = 'page/newspageList.do?pageIndex=';

function ajaxBull(page) {
	$.ajax({
		url: rootPaths + bullMethod + page + '&pageNum=4',
		type: 'GET',
		dataType: 'jsonp',
		jsonp: 'callback',
		async: true,
		timeout: 30000,
		crossDomain: true,
		success: successHandler,
		complete: completeCallBack,
		error: errorCallBack
	});

	function successHandler(data, status, xhr) {
		showBull(data, page);
	}

	function errorCallBack(xhr, textStatus, errorMessage) {
		if(errorMessage == 'timeout') {
			alert('请求超时');
		} else {
			alert('获取数据失败');
		}
	}

	function completeCallBack() {
		var mask = $('#mask-ui');
		if(mask) {
			setTimeout(function() {
				mask.hide('fast');
			}, 1500)
		}
	}
}

function showBull($data, pageNo) {
	var box = $('#bull-main-box');
	box.empty();
	var ul = $('<ul></ul>');
	var totalPage = parseInt($data.totalPage);
	$.each($data.list, function(index, apis) {
		var myData = JSON.stringify(apis);
		var li = $('<li><a href="bulletin_detail.html?&id=' + apis.bulletinid + '&pageIndex=' + pageNo + '"><span>' + apis.title + '</span><span>' + timeTranfer(apis.time) + '</span></a></li>');
		ul.append(li);
	});
	ul.appendTo(box);
	initPagination(totalPage);
}

var initPagination = function(totalPage) {
	var num_entries = totalPage;
	$("#bull-pagination").pagination(num_entries, {
		num_edge_entries: 1, //边缘页数
		num_display_entries: 4, //主体页数
		items_per_page: 1, //每页显示1项
		ajaxPageFn: ajaxBull_my,
		prev_text: "上一页",
		next_text: "下一页"
	});
};

function ajaxBull_my(page_index) {
	$.ajax({
		url: rootPaths + bullMethod + parseInt(page_index + 1) + '&pageNum=4',
		type: 'GET',
		dataType: 'jsonp',
		jsonp: 'callback',
		timeout: 30000,
		async: false,
		crossDomain: true,
		success: successHandler,
		complete: completeCallBack,
		error: errorCallBack
	});

	function successHandler(data, status, xhr) {
		showBull_my(data, parseInt(page_index + 1));
	}

	function errorCallBack(xhr, textStatus, errorMessage) {
		if(errorMessage == 'timeout') {
			alert('请求超时');
		} else {
			alert('获取数据失败');
		}
	}

	function completeCallBack() {
		var mask = $('#mask-ui');
		if(mask) {
			setTimeout(function() {
				mask.hide('fast');
			}, 1500)
		}
	}

}

function showBull_my($data, pageNo) {
	var box = $('#bull-main-box');
	box.empty();
	var ul = $('<ul></ul>');
	var totalPage = parseInt($data.totalPage);
	$.each($data.list, function(index, apis) {
		var li = $('<li><a href="bulletin_detail.html?&id=' + apis.bulletinid + '&pageIndex=' + pageNo + '"><span>' + apis.title + '</span><span>' + timeTranfer(apis.time) + '</span></a></li>');
		ul.append(li);
	});
	ul.appendTo(box);
}

function ajaxNews(page) {
	$.ajax({
		url: rootPaths + newsMethod + page + '&pageNum=4',
		type: 'GET',
		dataType: 'jsonp',
		jsonp: 'callback',
		async: false,
		timeout: 30000,
		crossDomain: true,
		success: successHandler,
		complete: completeCallBack,
		error: errorCallBack
	});

	function successHandler(data, status, xhr) {
		showNews(data, page);
	}

	function errorCallBack(xhr, textStatus, errorMessage) {
		if(errorMessage == 'timeout') {
			alert('请求超时');
		} else {
			alert('获取数据失败');
		}
	}

	function completeCallBack() {
		var mask = $('#mask-ui');
		if(mask) {
			setTimeout(function() {
				mask.hide('fast');
			}, 1500)
		}
	}
}

function showNews($data, pageNo) {
	console.log($data);
	var wrapper = $('#swiper-wrapper');
	wrapper.empty();
	$.each($data.list, function(index, apis) {
		if(index <= 3) {
			var slide = $('<div class="swiper-slide" style="width:520px;height:230px;"></div>');
			var a = $('<a href="' + apis.url + '"><img src="' + apis.img + '"><div class="news-desc"><p class="news-list-title"><span>合利宝微生活</span><span>|</span><span>' + apis.title + '</span></p></div></a>');
			slide.append(a);
			slide.appendTo(wrapper);
		}
	});
	var mySwiper = new Swiper('.swiperContainer', {
		autoplay: 3000, // 自动滑动
		loop: true, // 开启循环
		pagination: '.newsPagination', //定义一个swiper的分页器
		slidesPerView: 1,
		slidesPerGroup: 1, //在carousel mode下定义slides的数量多少为一组。
		cssWidthAndHeight: false, //值为true时候，container，wrapper和slides不会自动生成宽度和高度，需要手动设定
		watchActiveIndex: true, //监控活动块索引，设置为true时，拖动slide会即时更新活动块的索引值
		visibilityFullFit: true, //如果启用，仅有“可视”的slides会最后适应容器的大小
		paginationClickable: true, //值为true时，点击分页器的指示点时会发生Swiper
	});

}