$(function() {
    var myrecruit = 'recruit/findAll.do';
    getDataByPageIndex(myrecruit, getQaByPageViews);
    $('#post-list-tab').delegate('li a', 'click', function(event) {
        $(this).addClass('current').parent().siblings().children('a').removeClass('current');
        var $rel = $(this).attr('data-rel');
        getAnchor('#' + $rel);
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    });
});

function getAnchor(anchorID) {
    var $target = $(anchorID).offset().top;
    $('body,html').animate({ scrollTop: $target }, 2000);
}

var rootPaths = 'http://119.147.172.215:8088/BMS/';
var replaceStr = new RegExp("\r\n", "gm");

function getDataByPageIndex(method, callBack) {
    $.ajax({
        url: rootPaths + method,
        type: 'GET',
        dataType: 'jsonp',
        jsonp: 'callback',
        async: true,
        timeout: 30000,
        crossDomain: true,
        success: successHandler,
        error: errorCallBack
    });

    function successHandler(data, status, xhr) {
        callBack(data);
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
}


function getQaByPageViews($data) {
    var wrap = $('#emp-wrapper');
    wrap.empty();
    var box = $('<div></div>');
    var post = $('<ul class="post-list"></ul>');
    var tab = $('.emp-tab-box');
    tab.empty();
    $.each($data, function(index, recruit) {
        var jobDesc = recruit.jobDesc;
        // var jobDesc = recruit.jobDesc.replace(replaceStr, "<br>");
        // var jobRequire = recruit.jobRequire.replace(replaceStr, "<br>");
        var jobRequire = recruit.jobRequire;
        var empMain = $('<div class="emp-main" id="' + recruit.recruitid + '"></div>');
        var title = $('<div class="emp-title"></div>');
        var detail = $('<div class="emp-detail"></div>');
        var desc = $('<div class="emp-desc"></div>');
        var required = $('<div class="emp-require"></div>');
        var info = $('<div class="emp-info"></div>');
        var tit = $('<a href="#">' + recruit.positionTitle + '</a>');
        var descLi = $('<div>' + jobDesc + '</div>');
        var reqLi = $('<div>' + jobRequire + '</div>');
        var infoLi = $('<div>工作性质：全职</div><div> 工作地区：' + recruit.address + '</div><div>简历投递：' + recruit.email + '</div>');
        var postList;
        if (index == 0) {
            postList = $('<li><a href="#' + recruit.recruitid + '" class="current" data-rel="' + recruit.recruitid + '">' + recruit.positionTitle + '</a></li>');
        } else {
            postList = $('<li><a href="#' + recruit.recruitid + '" data-rel="' + recruit.recruitid + '">' + recruit.positionTitle + '</a></li>');
        }
        title.append(tit);
        desc.append(descLi);
        required.append(reqLi);
        info.append(infoLi);
        title.appendTo(detail);
        desc.appendTo(detail);
        required.appendTo(detail);
        info.appendTo(detail);
        detail.appendTo(empMain);
        empMain.appendTo(box);
        postList.appendTo(post);
    });
    post.appendTo(tab)
    box.appendTo(wrap);
}



function timeTranfer(dt) {
    var date = new Date(dt);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}
