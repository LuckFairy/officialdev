function checkViewport(){var e=$(".mui-row");Zepto.each(e,function(e,t){var n=Zepto(this).find("img"),i=n.attr("data-lazyload");void 0==i&&isElementInViewport(t)?Zepto(this).addClass("current"):isElementInViewport(t)||Zepto(this).removeClass("current")})}function isElementInViewport(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}mui(document).on("swipeup","#timeline",function(){return checkViewport()}),mui(document).on("swipedown","#timeline",function(){return checkViewport()}),mui(document).on("longtap","#timeline",function(){return checkViewport()}),mui(document).on("hold","#timeline",function(){return checkViewport()}),mui(document).on("release","#timeline",function(){return checkViewport()});
//# sourceMappingURL=visual.js.map
