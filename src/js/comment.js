/*
 * @Author: beyondouyuan
 * @Date:   2017-02-19 19:27:57
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2017-02-19 19:38:02
 */

// 'use strict';


$(function() {
    prepareLink('.nav-menu-box li', '.page-container');
    setMenuAndWindow();
    doScroll();
});


function prepareLink(list, secs) {
    var $lists = $(list);
    $lists.each(function() {
        var $link = $(this).find('a');
        var dataID = $link.attr('data-id');
        $link.attr('data-set', dataID);
        $link.bind('click', function(event) {
            $(this).addClass('current').parent().siblings().children('a').removeClass('current');
            var setDesc = $(this).attr('data-set');
            showSection(setDesc, secs);
            if (event.preventDefault) {
                event.preventDefault(); //支持DOM标准的浏览器
            } else {
                event.returnValue = false; //IE
            }
        });
    });
}

function showSection(linkID, secArr) {
    var secs = $(secArr);
    secs.each(function() {
        var self = $(this);
        if ($(this).attr('data-id') != linkID) {
            setTimeout(function() {
                self.hide();
            }, 60);
        } else {
            setTimeout(function() {
                self.show();
            }, 60);
        }
    });
}



function setMenuAndWindow() {
    var $nav = $('#nav-menu');
    var $link = $nav.find('a');
    $link.bind('click', function(event) {
        var $href = $(this).attr('href');
        var $currUrl = window.location.href;
        // 匹配替换
        var reg = /([^\/]*)\.[^.]+$/;
        // console.log($currUrl.match(reg)[0]);
        // 匹配
        var search = $currUrl.match(reg)[0];
        // 替换
        var newUrl = $currUrl.replace(search, $href);
        // console.log('重定向到' + newUrl);
        if ($currUrl.indexOf($href) != -1) {
            // 本页面内切换二级菜单
            $('.nav-container-detail').slideToggle(600);
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
    $('html,body').animate({scrollTop:0},1500);
}