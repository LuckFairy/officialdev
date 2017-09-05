$(function() {
    function toggleClick(linkClass) {
        var $link = $(linkClass).find('a');
        $link.unbind('click');
        $link.bind('click', function(event) {
            var apis = $(this).attr('data-api');
            var self = $(this);
            $(this).addClass('current').siblings().removeClass('current');
            if (apis == 'bull') {
                $('#bull-box').show().siblings().hide();
                ajaxBull(1);
            }
            if (apis == 'news') {
                $('#news-box').show().siblings().hide();
                ajaxNews(1);
            }
        });
    }

    ajaxBull(1);
    toggleClick('.bulletin-title li');
});

// var rootPaths = 'http://172.16.30.60:8080/BMS/';
var rootPaths = 'http://119.147.172.215:8088/BMS/';
var replaceStr = new RegExp("\r\n", "gm");

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
        url: rootPaths + bullMethod + page + '&pageNum=5',
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
        if (textStatus == 'timeout') {
            alert('请求超时！');
        } else if (textStatus == '403') {
            alert('无法访问！')
        } else if (textStatus == '404') {
            alert('未找到数据！')
        } else if (textStatus == '500') {
            alert('服务器出错！')
        } else {
            alert('请求数据出错！')
        }
    }

    function completeCallBack() {
        var mask = $('#mask-ui');
        if (mask) {
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
        url: rootPaths + bullMethod + parseInt(page_index + 1) + '&pageNum=5',
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
        if (errorMessage == 'timeout') {
            alert('请求超时');
        } else {
            alert('获取数据失败');
        }
    }

    function completeCallBack() {
        var mask = $('#mask-ui');
        if (mask) {
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
        url: rootPaths + newsMethod + page + '&pageNum=5',
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
        if (errorMessage == 'timeout') {
            alert('请求超时');
        } else {
            alert('获取数据失败');
        }
    }

    function completeCallBack() {
        var mask = $('#mask-ui');
        if (mask) {
            setTimeout(function() {
                mask.hide('fast');
            }, 1500)
        }
    }
}

function showNews($data, pageNo) {
    var box = $('#news-main-box');
    box.empty();
    var ul = $('<ul></ul>');
    var totalPage = parseInt($data.totalPage);
    $.each($data.list, function(index, apis) {
        var li = $('<li><a href="' + apis.url + '"><span>' + apis.title + '</span><span>' + timeTranfer(apis.releaseTime) + '</span></a></li>');
        ul.append(li);
    });
    ul.appendTo(box);
    initPaginationNews(totalPage);
}

var initPaginationNews = function(totalPage) {
    var num_entries = totalPage;
    $("#news-pagination").pagination(num_entries, {
        num_edge_entries: 1, //边缘页数
        num_display_entries: 4, //主体页数
        items_per_page: 1, //每页显示1项
        ajaxPageFn: ajaxNews_my,
        prev_text: "上一页",
        next_text: "下一页"
    });
};


function ajaxNews_my(page_index) {
    $.ajax({
        url: rootPaths + newsMethod + parseInt(page_index + 1) + '&pageNum=5',
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
        showNews_my(data, parseInt(page_index + 1));
    }

    function errorCallBack(xhr, textStatus, errorMessage) {
        if (errorMessage == 'timeout') {
            alert('请求超时');
        } else {
            alert('获取数据失败');
        }
    }

    function completeCallBack() {
        var mask = $('#mask-ui');
        if (mask) {
            setTimeout(function() {
                mask.hide('fast');
            }, 1500)
        }
    }

}

function showNews_my($data, pageNo) {
    var box = $('#news-main-box');
    box.empty();
    var ul = $('<ul></ul>');
    var totalPage = parseInt($data.totalPage);
    $.each($data.list, function(index, apis) {
        var li = $('<li><a href="' + apis.url + '"><span>' + apis.title + '</span><span>' + timeTranfer(apis.releaseTime) + '</span></a></li>');
        ul.append(li);
    });
    ul.appendTo(box);
}
