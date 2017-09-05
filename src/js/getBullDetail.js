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
    var myPageIndex = req.pageIndex;
    var replaceStr = new RegExp("\r\n", "gm");
    // var myRootPath = 'http://172.16.30.60:8080/BMS/';
    var myRootPath = 'http://119.147.172.215:8088/BMS/';
    var myMethod = 'bulletin/findAll.do';
    var myUrl = myRootPath + myMethod;

    function findOneBulltinByID(id) {
        var content = $('<div></div>');
        var times = $('#news-time p');
        times.empty();
        var bulletinBox = $('#bulletin-box');
        // 清空原有子节点以及文本
        bulletinBox.empty();
        var titleBox = $("<div class='title-ui'></div>");
        var topBox = $("<div class='top-tit'><p>尊敬的合利宝用户：</p><p>您好！</p></div>");
        var mainNews = $("<div class='main-news-ui'></div>");
        var bulletinImg = $("<div class='news-img-ui'></div>");
        if (!id) {
            alert('获取数据出错');
        }
        $.ajaxSetup({ cache: false });
        $.ajax({
            type: 'GET',
            async: true,
            url: myUrl,
            timeout: 30000,
            dataType: 'jsonp',
            jsonp: 'callback',
            crossDomain: true,
            success: getBulletinCallBack,
            complete: completeCallBack,
            error: getBulletinErrorCallBack
        });

        function getBulletinCallBack(data, status, xhr) {
            $.each(data.list, function(index, bulletin) {
                var bulletinContent = bulletin.contents.replace(replaceStr, "<br>");
                if (bulletin.bulletinid === parseInt(id)) {
                    times.html(timeTranfer(bulletin.time));
                    titleBox.append("<h2>" + bulletin.title + "</h2>");
                    bulletinBox.append(titleBox);
                    bulletinBox.append(topBox);
                    content.html(bulletinContent);
                    content.appendTo(mainNews);
                    mainNews.appendTo(bulletinBox)
                }
            });
        }

        function getBulletinErrorCallBack(xhr, textStatus, errorMessage) {
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
            setTimeout(function() {
                $('#mask-ui').hide('fast');
            }, 2000)
        }
    }
    findOneBulltinByID(newsID);
});

function timeTranfer(dt) {
    var date = new Date(dt);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}
