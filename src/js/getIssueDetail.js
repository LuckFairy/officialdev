$(function() {
    function GetRequest() {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            if (str.indexOf("&") != -1) {
                strs = str.split("&");
                for (var i = 0; i < strs.length; i++) {
                    theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
                }
            } else {
                theRequest[str.split("=")[0]] = unescape(str.split("=")[1]);
            }
        }
        return theRequest;
    }

    var req = new GetRequest();
    var newsID = req.id;
    var pageIndexs = req.pageIndex;
    var classifyFir = req.classifyFir;
    // var issueMethod;
    // var keyQuestion = 'page/questionclassifyPageList.do?';
    // var allQuestion = 'page/questionpageList.do?pageIndex=' + pageIndexs;
    var issueRootPaths = 'http://119.147.172.215:8088/BMS/';
    // if (classifyFir !== undefined) {
    //     issueMethod = issueRootPaths + keyQuestion + 'pageIndex=' + pageIndexs + '&classifyFir=' + classifyFir;;
    // } else {
    //     issueMethod = issueRootPaths + allQuestion;
    // }
    var issueMethod = issueRootPaths + "question/findAll.do";
    var replaceStr = new RegExp("\r\n", "gm");
    var titleName = $('#class-issue');
    var backLink = $('.back-link');
    var $hrefs = backLink.attr('href');
    switch (classifyFir) {
        case '0':
            titleName.html('开户问题');
            backLink.attr('href', $hrefs + '#pay');
            break;
        case '1':
            titleName.html('账号问题');
            backLink.attr('href', $hrefs + '#account');
            break;
        case '2':
            titleName.html('交易问题');
            backLink.attr('href', $hrefs + '#transaction');
            break;
        case '3':
            titleName.html('其他问题');
            backLink.attr('href', $hrefs + '#other');
            break;
        default:
            titleName.html('全部问题');
            backLink.attr('href', $hrefs + '#all');
    }

    function findOneQuestionByID(id) {
        var content = $('<div></div>');
        var bulletinBox = $('#bulletin-box');
        var titleName = $('#class-issue');
        // 清空原有子节点以及文本
        bulletinBox.empty();
        var titleBox = $("<div class='title-ui'></div>");
        var mainNews = $("<div class='main-news-ui'></div>");
        var solution = $("<div class='solution'></div>");
        if (!id) {
            alert('获取数据出错，数据不存在');
        }
        $.ajax({
            type: 'GET',
            async: true,
            url: issueMethod,
            timeout: 30000,
            dataType: 'jsonp',
            jsonp: 'callback',
            crossDomain: true,
            success: getQuestionCallBack,
            complete: completeCallBack,
            error: getDataErrorCallBack
        });

        function getQuestionCallBack(data, status, xhr) {
            $.each(data, function(index, question) {
                var questiondescs = question.questiondesc.replace(replaceStr, "<br>");
                var solutions = question.solution.replace(replaceStr, "<br>");
                if (question.questionid === parseInt(id)) {
                    if (question.quesclassifyfir) {
                        titleName.html(question.quesclassifyfir);
                    }
                    titleBox.append("<h2>" + question.title + "</h2>");
                    bulletinBox.append(titleBox);
                    content.append(questiondescs);
                    solution.append(solutions);
                    content.appendTo(mainNews);
                    solution.appendTo(mainNews);
                    mainNews.appendTo(bulletinBox)
                }
            });
        }

        function getDataErrorCallBack(xhr, textStatus, errorMessage) {
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
                }, 2000)
            }
        }
    }
    findOneQuestionByID(newsID);
});
