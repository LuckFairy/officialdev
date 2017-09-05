$(function() {
    setImgSection();
    var financeBoxs = $('#finance-info');
    var mask = $('#mask-ui');
    var billboard = $('#finance-billboard');
    var isHash = window.location.hash;
    if (!isHash) {
        financeBoxs.empty();
        financeBoxs.load('public/resources/money.html', function() {
            setTimeout(function() {
                mask.fadeOut('fast');
            }, 2500);
        });
    }
    function getHtmlRender() {
        var btn = $('.tab-ul li');
        btn.each(function() {
            $(this).bind('click', function() {
                var index = $(this).index();
                if (index !== 3) {
                    var link = $(this).find('a');
                    var titles = link.find('span').text();
                    var rel = link.attr('data-rel');
                    var isHiden = financeBoxs.is(":hidden");
                    if (isHiden) {
                        financeBoxs.fadeIn();
                    }
                    billboard.fadeOut();
                    financeBoxs.find('.title h2').html(titles);
                    financeBoxs.empty();
                    financeBoxs.load('public/resources/' + rel + '.html');
                }
                if (index == 3) {
                    ajaxPublishedFile(1);
                    billboard.fadeIn().siblings().fadeOut();
                }
            });
        });
    }
    getHtmlRender();
    toggleTemp();
    function sideHandle() {
        var sidebar = $('.sidebar-link li');
        sidebar.bind('click', function(event) {
            var rel = $(this).attr('data-rel');
            var link = $(this).find('a');
            link.addClass('active').parent().siblings().find('a').removeClass('active');
            showSection(rel, '.container-billboard');
            if (rel == 'reads') {
                return ajaxPublished(1);
            } else {
                ajaxPublishedFile();
            }
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false; //IE
            }
        });
    }
    sideHandle();
    function toggleTemp() {
        $('#toggle-btn').bind('click', function() {
            $('.billboard-sidebar').toggleClass('left-hide');
        });
    }
});

var rootPaths = 'http://119.147.172.215:8088/BMS/';
// var rootPaths = 'http://192.168.41.3:8080/BMS/';
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


var publishedMethod = 'page/financepageList.do?pageIndex=';
var downMethod = 'page/downloadCenterpageList.do?pageIndex=';

function ajaxPublished(page) {
    $.ajax({
        url: rootPaths + publishedMethod + page + '&pageNum=6',
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
        showPublished(data, page);
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

function showPublished($data, pageNo) {
    var box = $('#article-box');
    box.empty();
    console.log($data);
    var ul = $('<ul class="article-main"></ul>');
    var totalPage = parseInt($data.totalPage);
    $.each($data.list, function(index, published) {
        var li = $('<li><a href="published_detail.html?&id=' + published.financeid + '&pageIndex=' + pageNo + '"><span>' + published.title + '</span><span>' + timeTranfer(published.date) + '</span></a></li>');
        ul.append(li);
    });
    ul.appendTo(box);
    var pagesView = $('#article-pagination');
    pagesView.empty();
    initPagination(pagesView, totalPage);
}

var initPagination = function(paginations, totalPage) {
    var num_entries = totalPage;
    $(paginations).pagination(num_entries, {
        num_edge_entries: 1, //边缘页数
        num_display_entries: 4, //主体页数
        items_per_page: 1, //每页显示1项
        ajaxPageFn: ajaxPublished_my,
        prev_text: "上一页",
        next_text: "下一页"
    });
};


function ajaxPublished_my(page_index) {
    $.ajax({
        url: rootPaths + publishedMethod + parseInt(page_index + 1) + '&pageNum=6',
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
        showPublished_my(data, parseInt(page_index + 1));
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

function showPublished_my($data, pageNo) {
    var box = $('#article-box');
    box.empty();
    var ul = $('<ul class="article-main"></ul>');
    var totalPage = parseInt($data.totalPage);
    $.each($data.list, function(index, published) {
        var li = $('<li><a href="published_detail.html?&id=' + published.financeid + '&pageIndex=' + pageNo + '"><span>' + published.title + '</span><span>' + timeTranfer(published.date) + '</span></a></li>');
        ul.append(li);
    });
    ul.appendTo(box);
}

function ajaxPublishedFile(page) {
    $.ajax({
        url: rootPaths + downMethod + page + '&pageNum=6&classifyNum=2',
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
        showPublishedFile(data, page);
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

function showPublishedFile($data, pageNo) {
    var box = $('#billboard-box');
    box.empty();
    var ul = $('<ul class="billboard-main-list"></ul>');
    var totalPage = parseInt($data.totalPage);
    $.each($data.list, function(index, files) {
        var li = $('<li><a href="' + files.fileUrl + '" download="' + files.fileName + '"><span>' + files.fileName + '</span><span><button class="down-btn">立即下载</button></span></a></li>');
        ul.append(li);
    });
    ul.appendTo(box);
    var pagesView = $('#billboard-pagination');
    pagesView.empty();
    initPaginationDown(pagesView, totalPage);
}

var initPaginationDown = function(paginations, totalPage) {
    var num_entries = totalPage;
    $(paginations).pagination(num_entries, {
        num_edge_entries: 1, //边缘页数
        num_display_entries: 4, //主体页数
        items_per_page: 1, //每页显示1项
        ajaxPageFn: ajaxPublishedFile_my,
        prev_text: "上一页",
        next_text: "下一页"
    });
};


function ajaxPublishedFile_my(page_index) {
    $.ajax({
        url: rootPaths + downMethod + parseInt(page_index + 1) + '&pageNum=6&classifyNum=2',
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
        showPublishedFile_my(data, parseInt(page_index + 1));
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

function showPublishedFile_my($data, pageNo) {
    var box = $('#billboard-box');
    box.empty();
    var ul = $('<ul class="billboard-main-list"></ul>');
    var totalPage = parseInt($data.totalPage);
    $.each($data.list, function(index, files) {
        var li = $('<li><a href="' + files.fileUrl + '" download="' + files.fileName + '"><span>' + files.fileName + '</span><span><button class="down-btn">立即下载</button></span></a></li>');
        ul.append(li);
    });
    ul.appendTo(box);
}
