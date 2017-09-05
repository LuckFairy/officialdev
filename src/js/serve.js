$(function() {
    doScroll();
})

// 返回头部
function doScroll() {
    var btn = $('.top').find('a');
    btn.click(function(event) {
        pageScroll();
        if (event.preventDefault) {
            event.preventDefault(); //支持DOM标准的浏览器
        } else {
            event.returnValue = false; //IE
        }
    })
}

function pageScroll() {
    $('html,body').animate({ scrollTop: 0 }, 1500);
}