$(function() {
    function getKey(eleID) {
        $(eleID).bind("click", function(event) {
            var keyword = parseInt($(this).attr('data-index'));
            $(this).children('a').addClass('current').parent().siblings().children('a').removeClass('current');
            if (keyword == 5) {
                $('#question').show().siblings().hide();
                ajaxAllQuestion(1);
            } else {
                $('#pay-question-box').show().siblings().hide();
                ajaxQuestionByKeyword(1, keyword);
            }
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        });
    }
    // 初始化问题列表
    ajaxAllQuestion(1);
    // 点击触发关键词
    getKey('#title .title-list li');
});

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
// 请求uri
var rootPaths = 'http://119.147.172.215:8088/BMS/';
// 请求方法
var keyQuestionMethod = 'page/questionclassifyPageList.do?';
var allQuestionMethod = 'page/questionpageList.do?pageIndex=';
// 换行解析
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
// 获取全部问题
function ajaxAllQuestion(page) {
    $.ajax({
        url: rootPaths + allQuestionMethod + page + '&pageNum=5',
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
        showAllQuestion(data, page);
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
// 显示全部问题
function showAllQuestion($data, pageNo) {
    var totalPage = parseInt($data.totalPage);
    var questionContent = $('#question');
    var mainContent = $('#all-quetion');
    var paginationBox = $('<div id="pagination" class="pagination"></div>')
    mainContent.empty();
    var contentUl = $('<ul class="content-list"></ul>');
    contentUl.empty();
    $.each($data.list, function(index, question) {
        var lists = $('<li><a href="issue_detail.html?&id=' + question.questionid + '&pageIndex=' + pageNo + '"><span>' + question.title + '</span></a></li>');
        contentUl.append(lists);
    });
    contentUl.appendTo(mainContent);
    var elePagination = $('#pagination');
    elePagination.remove();
    initPaginationAll(paginationBox, totalPage);
    paginationBox.appendTo(questionContent);
}
// 初始化全部问题下的分页器
var initPaginationAll = function(paginations, totalPage) {
    var num_entries = totalPage;
    $(paginations).pagination(num_entries, {
        num_edge_entries: 1, //边缘页数
        num_display_entries: 4, //主体页数
        items_per_page: 1, //每页显示1项
        ajaxPageFn: ajaxAllQuestion_my,
        prev_text: "上一页",
        next_text: "下一页"
    });
};

// 不执行分页器
function ajaxAllQuestion_my(page_index) {
    $.ajax({
        url: rootPaths + allQuestionMethod + parseInt(page_index + 1) + '&pageNum=5',
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
        showAllQuestion_my(data, parseInt(page_index + 1));
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

function showAllQuestion_my($data, pageNo) {
    var totalPage = parseInt($data.totalPage);
    var questionContent = $('#question');
    var mainContent = $('#all-quetion');
    var paginationBox = $('<div id="pagination" class="pagination"></div>')
    mainContent.empty();
    var contentUl = $('<ul class="content-list"></ul>');
    contentUl.empty();
    $.each($data.list, function(index, question) {
        var lists = $('<li><a href="issue_detail.html?&id=' + question.questionid + '&pageIndex=' + pageNo + '"><span>' + question.title + '</span></a></li>');
        contentUl.append(lists);
    });
    contentUl.appendTo(mainContent);
}

// 根据关键词获取问题列表
function ajaxQuestionByKeyword(page, keyword) {
    $.ajax({
        url: rootPaths + keyQuestionMethod + 'pageIndex=' + page + '&pageNum=5&classifyFir=' + keyword,
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
        showKeywordQuestion(data, page, keyword);
    }

    function errorCallBack(xhr, textStatus, errorMessage) {
        if (errorMessage == 'timeout') {
            alert('请求超时');
        } else {
            alert('获取数据失败');
            alert(textStatus);
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
// 展示关键词获取问题列表项
function showKeywordQuestion($data, pageNo, keyword) {
    var totalPage = parseInt($data.totalPage);
    var questionContent = $('#pay-question-box');
    var mainContent = $('#pay-quetion');
    var paginationBox = $('<div id="pay-pagination" class="pagination"></div>')
    mainContent.empty();
    var contentUl = $('<ul class="content-list"></ul>');
    contentUl.empty();
    $.each($data.list, function(index, question) {
        var lists = $('<li><a href="issue_detail.html?&id=' + question.questionid + '&pageIndex=' + pageNo + '&classifyFir=' + keyword + '"><span>' + question.title + '</span></a></li>');
        contentUl.append(lists);
    });
    contentUl.appendTo(mainContent);
    var elePagination = questionContent.find('.pagination');
    elePagination.remove();
    initPaginationKeyword(paginationBox, totalPage);
    paginationBox.appendTo(questionContent);
}
// 初始化关键词列表分页
var initPaginationKeyword = function(paginations, totalPage) {
    var num_entries = totalPage;
    $(paginations).pagination(num_entries, {
        num_edge_entries: 1, //边缘页数
        num_display_entries: 4, //主体页数
        items_per_page: 1, //每页显示1项
        ajaxPageFn: ajaxAllQuestion_my,
        prev_text: "上一页",
        next_text: "下一页"
    });
};


function ajaxQuestionByKeyword_my(page_index, keyword) {
    $.ajax({
        url: rootPaths + keyQuestionMethod + 'pageIndex=' + page_index + '&pageNum=5&classifyFir=' + keyword,
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
        showQuestionByKeyword_my(data, parseInt(page_index + 1), keyword);
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

function showQuestionByKeyword_my($data, pageNo, keyword) {
    var totalPage = parseInt($data.totalPage);
    var questionContent = $('#pay-question-box');
    var mainContent = $('#pay-quetion');
    var paginationBox = $('<div id="pay-pagination" class="pagination"></div>')
    mainContent.empty();
    var contentUl = $('<ul class="content-list"></ul>');
    contentUl.empty();
    $.each($data.list, function(index, question) {
        var lists = $('<li><a href="issue_detail.html?&id=' + question.questionid + '&pageIndex=' + pageNo + '&classifyFir=' + keyword + '"><span>' + question.title + '</span></a></li>');
        contentUl.append(lists);
    });
    contentUl.appendTo(mainContent);
}
