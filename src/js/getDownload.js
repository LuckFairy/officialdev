$(function() {
    ajaxDownload(1);
});


var downloadRootPath = 'http://119.147.172.215:8088/BMS/';
// var downloadRootPath = 'http://192.168.30.216:9999/BMS/';
var downloadMethod = 'page/downloadCenterpageList.do?pageIndex=';
function timeTranfer(dt) {
    var date = new Date(dt);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}
// 初始化文档下载列表
function ajaxDownload(page) {
    $.ajax({
        url: downloadRootPath + downloadMethod + page + '&pageNum=6&classifyNum=3',
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
        showDownload(data, page);
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

function showDownload($data, pageNo) {
    var box = $('#down-box');
    box.empty();
    var ul = $('<ul class="bulletin-main"></ul>');
    var totalPage = parseInt($data.totalPage);
    $.each($data.list, function(index, files) {
        var li = $('<li><a href="' + files.fileUrl + '" download="' + files.fileName + '"><span>' + files.fileName + '</span><span><button class="down-btn">立即下载</button></span></a></li>');
        ul.append(li);
    });
    ul.appendTo(box);
    var pagesView = $('#down-pagination');
    pagesView.empty();
    initPagination(pagesView, totalPage);
}

var initPagination = function(paginations, totalPage) {
    var num_entries = totalPage;
    $(paginations).pagination(num_entries, {
        num_edge_entries: 1, //边缘页数
        num_display_entries: 4, //主体页数
        items_per_page: 1, //每页显示1项
        ajaxPageFn: ajaxDownload_my,
        prev_text: "上一页",
        next_text: "下一页"
    });
};


function ajaxDownload_my(page_index) {
    $.ajax({
        url: downloadRootPath + downloadMethod + parseInt(page_index + 1) + '&pageNum=6&classifyNum=3',
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
        showDownload_my(data, parseInt(page_index + 1));
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

function showDownload_my($data, pageNo) {
    var box = $('#down-box');
    box.empty();
    var ul = $('<ul class="bulletin-main"></ul>');
    var totalPage = parseInt($data.totalPage);
    $.each($data.list, function(index, files) {
        var li = $('<li><a href="' + files.fileUrl + '"><span>' + files.fileName + '</span><span><button class="down-btn">立即下载</button></span></a></li>');
        ul.append(li);
    });
    ul.appendTo(box);
}
