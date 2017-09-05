/**
 * about.js
 * @authors Ou Yuan (http://beyondouyuan.firhub.io)
 * @date    2017-01-10 13:43:24
 * @version $1.0$
 */


$(function() {
    setMenuAndWindow();
    doScroll();
    highlighSubMenu();
    slideContactBox();
    disabledSubMenu();
    setTimeoutHidenSubMenu();
});

function setTimeoutHidenSubMenu() {
    var scrollTop = $(document).scrollTop();
    var isHiden = $('.nav-container-detail').is(":hidden");
    if (scrollTop == 0 && !isHiden) {
        var interval = setTimeout(function() {
            $('html,body').stop();
            $('.nav-container-detail').stop().slideUp(1500, function() {
            });
        }, 4000);
    }
}
function setMenuAndWindow() {
    var $nav = $('#nav-menu');
    var $link = $nav.find('a');
    $link.bind('click', function(event) {
        var $href = $(this).attr('href');
        var $dataId = $(this).attr('data-id');
        var $currUrl = window.location.href;
        // 匹配替换
        var reg = /([^\/]*)\.[^.]+$/;
        // 匹配
        var search = $currUrl.match(reg)[0];
        // 替换
        var newUrl = $currUrl.replace(search, $href);
        // 当前页面body下第一个子元素是否含有与顶部导航dataid相同的class名，有，则为当前页面，执行下拉菜单显示隐藏，无，则跳转
        var curPage = $('body > div:first-child').hasClass($dataId);
        if (curPage) {
            // 本页面内切换二级菜单，stop清除动画队列
            $('.nav-container-detail').stop().slideToggle(600);
            setTimeout(function() {
                setTimeoutHidenSubMenu();
            },1000);
            if (event.preventDefault) {
                event.preventDefault(); //支持DOM标准的浏览器
            } else {
                event.returnValue = false; //IE
            }
        } else {
            // 重定向
            window.location.href = newUrl;
        }
    });
}

// 二级菜单当前页面不跳转

function disabledSubMenu() {
    var $nav = $('.nav-menu-box');
    var $link = $nav.find('a');
    $link.bind('click', function(event) {
        var $href = $(this).attr('href');
        var $dataId = $(this).attr('data-id');
        var $currUrl = window.location.href;
        // 匹配替换
        var reg = /([^\/]*)\.[^.]+$/;
        // 匹配
        var search = $currUrl.match(reg)[0];
        // 替换
        var newUrl = $currUrl.replace(search, $href);
        // 当前页面对应二级菜单，禁用默认跳转
        if ($currUrl.indexOf($href) != -1) {
            if (event.preventDefault) {
                event.preventDefault(); //支持DOM标准的浏览器
            } else {
                event.returnValue = false; //IE
            }
        } else {
            window.location.href = newUrl;
        }
    });
}


function toggleClick(linkClass, sections) {
    var $link = $(linkClass).find('a');
    $link.bind('click', function(event) {
        var dataID = $(this).attr('data-id');
        $(this).attr('data-set', dataID);
        var setDesc = $(this).attr('data-set');
        $(this).addClass('current').siblings().removeClass('current');
        showSection(setDesc, sections);
        if (event.preventDefault) {
            event.preventDefault(); //支持DOM标准的浏览器
        } else {
            event.returnValue = false; //IE
        }
    });
}



function showSection(linkID, secArr) {
    var secs = $(secArr);
    secs.each(function() {
        var self = $(this);
        if ($(this).attr('data-id') != linkID) {
            setTimeout(function() {
                self.hide();
            }, 300);
        } else {
            setTimeout(function() {
                self.show();
            }, 300);
        }
    });
}




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
    $('.header').stop(false,true);
    $('.nav-container-detail').stop(false,true);
    $('html,body').animate({ scrollTop: 0 }, 1000);
}


function highlighSubMenu() {
    var $nav = $('.nav-menu-box');
    var $link = $nav.find('a');
    var $topNav = $('#nav-menu');
    $link.each(function() {
        var $url = $(this).attr('href');
        // console.log($url);
        var $currUrl = window.location.href;
        var dataId = $(this).attr('data-id');
        var curPage = $('body > div:first-child').hasClass(dataId);
        // 二级菜单与当前页面对比
        if (curPage) {
            var topLink = $topNav.find('a[data-id="' + dataId + '"]');
            var index = topLink.parent().index();console.log(index)
            showDetaiMenuItem(index);
            topLink.addClass('current').parent().siblings().children('a').removeClass('current');
        }
        if ($currUrl.indexOf($url) != -1) {
            $(this).addClass('current');
        }
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
            $('.nav-detail-mask').stop().animate({
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
