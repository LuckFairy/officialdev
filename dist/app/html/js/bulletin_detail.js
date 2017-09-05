/**
 * 公告详情
 * bulletin_detail.js
 * @authors beyondouyuan (beyondouyuan.github.io)
 * @date    2017-05-23 17:43:14
 * @version $1.0.0$
 */

/**
 * params：
 * myRootPath：请求根路径
 * myAllBullMethod：请求方法
 * ajaxData：ajax方法
 * id：ajax方法初始参数(根据公告ID查询数据)
 * req：url参数
 * bulletinID：url的公告ID参数
 * replaceStr：数据中换行符转移正则
 **/



var req = new GetRequest();
var bulletinID = req.id;
var myPathConfig = pathConfig;
var myRootPath = myPathConfig.rootPath;
var myAllBullMethod = myPathConfig.allBullMethod;

var replaceStr = new RegExp("\r\n", "gm");

var ajaxData = function(id) {
    jQuery.ajax({
        url: myRootPath + myAllBullMethod,
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
        var container = document.getElementById("bulletin-wrapper");
        container.appendChild(createFragment(data, id));
    }

    function errorCallBack(xhr, textStatus, errorMessage) {
        if (errorMessage == 'timeout') {
            alert('请求超时');
        } else {
            alert('获取数据失败');
        }
    }

    function completeCallBack() {
        mui(document).imageLazyload({
            placeholder: 'img/60x60.gif',
            diff: true,
            duration: 300
        });
    }
};

mui.ready(function() {
    ajaxData(bulletinID);
})
var createFragment = function($data, id) {
    var fragment = document.createDocumentFragment();
    var muiCard,
        muiHeader,
        muiHeaderImg,
        muiMediaBody,
        // mui-card-content
        muiCardContent,
        // mui-card-content-inner
        muiCardContentInner,
        // content-img
        muiContentImg,
        pre;

    mui($data.list).each(function(index, contentsArr) {
        var bulletinContent = contentsArr.contents.replace(replaceStr, "<br>");
        if (contentsArr.bulletinid === parseInt(id)) {
            muiCard = document.createElement('div');
            muiCard.className = 'mui-card';
            // 卡片视图头部小标题以及图片
            muiHeader = document.createElement('div');
            muiHeader.className = 'mui-card-header mui-card-media';
            muiHeaderImg = document.createElement('img');
            muiHeaderImg.setAttribute('data-lazyload', 'img/cbd.jpg');
            muiMediaBody = document.createElement('div');
            muiMediaBody.className = 'mui-media-body';
            muiMediaBody.innerHTML = contentsArr.title + '<p>Posted by 广州合利宝支付科技有限公司 ' + timeTranfer(contentsArr.time) + '</p></div>';
            muiHeader.appendChild(muiHeaderImg);
            muiHeader.appendChild(muiMediaBody);
            // 卡片视图内容主体外层容器
            muiCardContent = document.createElement('div');
            muiCardContent.className = 'mui-card-content';
            // 卡片视图内容主体内层容器
            muiCardContentInner = document.createElement('div');
            muiCardContentInner.className = 'mui-card-content-inner';
            // 卡片视图内容主体图片
            muiContentImg = document.createElement('img');
            muiContentImg.setAttribute('data-lazyload', 'img/cbd.jpg');
            muiContentImg.setAttribute('width', '100%');
            muiCardContentInner.appendChild(muiContentImg);
            pre = document.createElement('p');
            pre.innerHTML = bulletinContent;
            muiCardContentInner.appendChild(pre);
            muiCardContent.appendChild(muiCardContentInner);
            muiCard.appendChild(muiHeader);
            muiCard.appendChild(muiCardContent);
            fragment.appendChild(muiCard);
        }
    });
    return fragment;
};
