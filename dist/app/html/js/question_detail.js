/**
 * 问题详情
 * question_detail.js
 * @authors beyondouyuan (beyondouyuan.github.io)
 * @date    2017-05-23 17:43:14
 * @version $1.0.0$
 */

/**
 * params：
 * myRootPath：请求根路径
 * myQuestionMethod：请求方法
 * ajaxData：ajax方法
 * id：ajax方法初始参数(根据问题keyword查询数据)
 * req：url参数
 * questionID：url的问题ID参数
 * questionKey：url的问题关键字参数
 * replaceStr：数据中换行符转移正则
 **/



var req = new GetRequest();
var questionID = req.id;
var questionKey = req.classifyFir;
var myPathConfig = pathConfig;
var myRootPath = myPathConfig.rootPath;
var myQuestionMethod = myPathConfig.kQuestionMethod;
var replaceStr = new RegExp("\r\n", "gm");

var ajaxData = function(id, keyword) {
    jQuery.ajax({
        url: myRootPath + myQuestionMethod + keyword,
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
        var container = document.getElementById("question-wrapper");
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
            placeholder: '../images/60x60.gif',
            diff: true,
            duration: 300
        });
    }
};

mui.ready(function() {
    ajaxData(questionID, questionKey);
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
        questionTit,
        descPre,
        slovePre;

    mui($data).each(function(index, contentsArr) {
        if (contentsArr.questionid === parseInt(id)) {
            var questiondescContent = contentsArr.questiondesc.replace(replaceStr, "<br>");
            var questionsolutionContent = contentsArr.solution.replace(replaceStr, "<br>");
            muiCard = document.createElement('div');
            muiCard.className = 'mui-card';
            // 卡片视图头部小标题以及图片
            muiHeader = document.createElement('div');
            muiHeader.className = 'mui-card-header mui-card-media';
            muiHeaderImg = document.createElement('img');
            muiHeaderImg.setAttribute('data-lazyload', '../images/cbd.jpg');
            muiMediaBody = document.createElement('div');
            muiMediaBody.className = 'mui-media-body';
            muiMediaBody.innerHTML = contentsArr.title + '<p>Posted by 广州合利宝支付科技有限公司</p></div>';
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
            muiContentImg.setAttribute('data-lazyload', '../images/cbd.jpg');
            muiContentImg.setAttribute('width', '100%');
            muiCardContentInner.appendChild(muiContentImg);
            questionTit = document.createElement('p');
            questionTit.innerHTML = '<br /><p>Q&A</p> <br />';
            muiCardContentInner.appendChild(questionTit);
            descPre = document.createElement('p');
            descPre.innerHTML = '<p>Q：</p> <br />' + questiondescContent;
            muiCardContentInner.appendChild(descPre);
            slovePre = document.createElement('p');
            slovePre.innerHTML = '<p>A：</p> <br />' + questionsolutionContent;
            muiCardContentInner.appendChild(slovePre);
            muiCardContent.appendChild(muiCardContentInner);
            muiCard.appendChild(muiHeader);
            muiCard.appendChild(muiCardContent);
            fragment.appendChild(muiCard);
        }
    });
    return fragment;
};
