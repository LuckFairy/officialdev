$(function() {
    slideContactBox();
    highlightPage();
});

// 鼠标进出导航条时，滑动二级菜单
function hoverNavigation() {
    var open_status = false; //true表示打开状态
    var run_status = false; //动画运行状态，true表示正在运行
    var run1_status = false; //nav的动画状态
    $('.detail-menu-list').on('mouseenter', function() {
        /*移动到header_nav_list上时，
         *先判断menu_detail有没有打开，如果打开就直接进行左右切换，如果没有打开则先进行左右切换再打开
         *
         */
        var index = $(this).index();
        if (open_status) {
            //打开状态
            if (!run_status) {
                run_status = true; //正在运行
                $('.nav-detail-mask').animate({
                    left: -100 * index + '%'
                }, 300, function() {
                    run_status = false; //结束运行状态
                });
            }
        } else {
            //关闭状态
            $('.nav-detail-mask').css('left', -100 * index + '%');
            if (!run1_status) {
                $('#detail').slideDown();
                run1_status = true;
                //打开完毕，标记状态
                open_status = true;
            }
        }
    });

    $('#main-nav').on('mouseleave', function() {
        //鼠标离开nav区域，关闭header_menu_details
        $('#detail').slideUp(300, function() {
            run1_status = false;
        });
        //关闭完毕，标记状态
        open_status = false;
    });
}

// 当进入到页面时，自动滑动到当前页面对应的二级菜单
function showDetaiMenuItem(index) {
    var open_status = false; //true表示打开状态
    var run_status = false; //动画运行状态，true表示正在运行
    var run1_status = false; //nav的动画状态
    if (open_status) {
        //打开状态
        if (!run_status) {
            run_status = true; //正在运行
            $('.nav-detail-mask').animate({
                left: -100 * index + '%'
            }, 30, function() {
                run_status = false; //结束运行状态
            });
        }
    } else {
        //关闭状态
        $('.nav-detail-mask').css('left', -100 * index + '%');
        if (!run1_status) {
            $('#detail').slideDown(800);
            run1_status = true;
            //打开完毕，标记状态
            open_status = true;
        }
    }
}

function slideContactBox() {
    var $detailBox = $('.contact-right');
    var $ul1 = $('.contact-box');
    var $li1 = $ul1.find('li');
    var $ul2 = $('.contact-box-detail');
    var $li2 = $ul2.find('li');
    $li1.each(function() {
        $(this).on('mouseenter', function() {
            var $index = $(this).index();
            $ul2.fadeIn(300, function() {
                $li2.eq($index).css({ 'opacity': '1' }).siblings().css({ "opacity": "0" });
            })
        });
    });
    $detailBox.on('mouseleave', function() {
        $ul2.fadeOut(300, function() {
            $li2.css({ "opacity": "0" });
        });
    });
}


function highlightPage() {
    var $nav = $('#nav-menu');
    var $link = $nav.find('a');
    $link.each(function() {
        var $url = $(this).attr('href');
        var $currUrl = window.location.href;
        if ($currUrl.indexOf($url) != -1) {
            $(this).addClass('current');
            var index = $(this).parent().index();
            showDetaiMenuItem(index);
        }
    });
}


