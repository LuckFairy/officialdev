var mySwiper = new Swiper('.swiper-container', {
    autoplay: 2000, //可选选项，自动滑动
    loop: true, //可选选项，开启循环
    speed:600,
    initialSlide : 0,
    slidesPerView: 6,
    slidesPerGroup: 1,
    cssWidthAndHeight: false,
    // watchActiveIndex: false,
    watchActiveIndex: true,
    resizeReInit: false,
    updateOnImagesReady: true,
    visibilityFullFit: true,
    cssWidthAndHeight : true,
    spaceBetween: 30,
    pagination: '.swiperPagination',
});


$('#prev').click(function() {
    mySwiper.swipePrev();
    var index = mySwiper.activeLoopIndex;
    console.log(index);
    swiperHistory(index);
})
$('#next').click(function() {
    mySwiper.swipeNext();
    var index = mySwiper.activeLoopIndex;
    console.log(index);
    swiperHistory(index);
})


function swiperHistory(index) {
    $('#swiper .swiper-slide-active img').css({'width':'100%'})
    $('.content-box').eq(index).show().siblings().hide();
}
