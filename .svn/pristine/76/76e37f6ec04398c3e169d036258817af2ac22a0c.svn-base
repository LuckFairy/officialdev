/**
 * 获取新闻
 * news.js
 * @authors beyondouyuan (beyondouyuan.github.io)
 * @date    2017-05-23 17:43:14
 * @version $1.0.0$
 */

var myPathConfig = pathConfig;
var myRootPath = myPathConfig.rootPath;
var myNewsMethod = myPathConfig.newsMethod;

/**
 * params：
 * myRootPath：请求根路径
 * myNewsMethod：请求方法
 * ajaxData：ajax方法
 * page：ajax方法初始参数(数据页码)
 * pullIn：ajax方法元素插入位置
 * pulldownRefresh：mui下拉刷新方法
 **/

var ajaxData = function(page, pullIn) {
    $.ajax({
        url: myRootPath + myNewsMethod + page + '&pageNum=5',
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
        var list = document.getElementById("news-list");
        if (pullIn == 'down') {
            list.insertBefore(createFragment(data, page), list.firstChild);
        } else if (pullIn == 'up') {
            list.appendChild(createFragment(data, page));
        } else {
            list.appendChild(createFragment(data, page));
        }
    }

    function completeCallBack() {
        mui('#news-list').on('tap', 'a', function(e) {
            mui.openWindow({
                url: this.getAttribute('href'),
                id: 'news'
            });
        });
        mui(document).imageLazyload({
            placeholder: 'img/60x60.gif',
            diff: true,
            duration: 300
        });
    }

    function errorCallBack(xhr, textStatus, errorMessage) {
        if (errorMessage == 'timeout') {
            alert('请求超时');
        } else {
            alert('获取数据失败');
        }
    }
};

ajaxData(1);

var createFragment = function($data, $page) {
    var fragment = document.createDocumentFragment();
    var li;
    mui($data.list).each(function(index, contents) {
        li = document.createElement('li');
        li.className = 'mui-table-view-cell mui-media news-list';
        li.innerHTML = '<a class="mui-navigate-right" href="' + contents.url + '"><img class="mui-media-object mui-pull-left" data-lazyload="' + contents.img + '"><div class="mui-media-body">' + contents.title + '<p class="mui-ellipsis">' + timeTranfer(contents.releaseTime) + '</p></div></a>';
        fragment.appendChild(li);
    });
    return fragment;
};


mui.init({
    // 监听下拉事件
    pullRefresh: {
        container: '#pullrefresh',
        down: {
            contentdown: "下拉可以刷新",
            contentover: "释放立即刷新",
            contentnomore: '没有更多数据了',
            contentrefresh: '正在加载...',
            callback: pulldownRefresh
        }
    }
});

var pageNo = 2;

function pulldownRefresh() {
    setTimeout(function() {
        ajaxData(pageNo, 'down');
        pageNo++;
        mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
    }, 1500);
}
