$(function() {
    var btnMenu = $('.button-menu li[data-rel="fade"]');
    btnMenu.bind('mouseenter', function() {
        var btnBox = $('.btn-img-box');
        var $index = $(this).index();
        btnBox.remove();
        showImgBox($index);
    });
    btnMenu.bind('mouseleave', function() {
        $('.btn-img-box').remove();
    });
});


function showImgBox(index) {
    var img = $('<img src="dist/images/footer_popup_' + index + '.jpg">');
    var imgBox = $('<div class="btn-img-box"></div>');
    imgBox.addClass('img-popup-' + index);
    imgBox.append(img);
    imgBox.appendTo('#footer');
}

// 固定页脚
function footerPosition() {
    $('#footer').removeClass('fixed-bottom');
    var contentHeight = document.body.scrollHeight,
        winHeight = window.innerHeight;
    if (!(contentHeight > winHeight)) {
        $('#footer').addClass('fixed-bottom');
    } else {
        $('#footer').removeClass('fixed-bottom');
    }
}
