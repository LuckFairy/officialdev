function swiperHistory(i){$("#swiper .swiper-slide-active img").css({width:"100%"}),$(".content-box").eq(i).show().siblings().hide()}var mySwiper=new Swiper(".swiper-container",{autoplay:2e3,loop:!0,speed:600,initialSlide:0,slidesPerView:6,slidesPerGroup:1,cssWidthAndHeight:!1,watchActiveIndex:!0,resizeReInit:!1,updateOnImagesReady:!0,visibilityFullFit:!0,cssWidthAndHeight:!0,spaceBetween:30,pagination:".swiperPagination"});$("#prev").click(function(){mySwiper.swipePrev();var i=mySwiper.activeLoopIndex;console.log(i),swiperHistory(i)}),$("#next").click(function(){mySwiper.swipeNext();var i=mySwiper.activeLoopIndex;console.log(i),swiperHistory(i)});
//# sourceMappingURL=mySwiper.js.map
