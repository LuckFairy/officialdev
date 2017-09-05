/**
 * 常见问题
 * question.js
 * @authors beyondouyuan (beyondouyuan.github.io)
 * @date    2017-05-24 11:33:18
 * @version $1.0.0$
 */

/**
 * params：
 * myPathConfig：请求根路径
 * myQuestionMethod：请求方法
 * questionArr：问题分类/关键字数组
 * keyword：关键字参数
 * id：插入位置元素ID
 * name：关键字名称
 **/

var myPathConfig = pathConfig;
var myRootPath = myPathConfig.rootPath;
var myQuestionMethod = myPathConfig.kQuestionMethod;


var questionArr = [{ 'keyword': '1', 'id': 'open', 'name': '开户问题' }, { 'keyword': '2', 'id': 'account', 'name': '账户问题' }, { 'keyword': '3', 'id': 'trade', 'name': '交易问题' }, { 'keyword': '4', 'id': 'other', 'name': '其他问题' }];

// TIPS:
// 以下调用方式不存在变量提升
// 因为在ajaxDataByKeyword定义时并没有直接调用了ajaxData，而是通过传值方式调用ajaxData
// 虽然ajaxDataByKeyword早于ajaxData，
// 但调用ajaxDataByKeyword晚于ajaxData的定义


// var ajaxDataByKeyword = function($arrs, callback) {
// mui($arrs).each(function(index, keywords) {
//     return callback(keywords);
// });
// };

// ajax获取数据

// var ajaxData = function(keyArr) {
//     var keyword = keyArr.keyword,
//         id = keyArr.id,
//         name = keyArr.name;
//     jQuery.ajax({
//         url: myRootPath + myQuestionMethod + keyword,
//         type: 'GET',
//         dataType: 'jsonp',
//         jsonp: 'callback',
//         async: true,
//         timeout: 60000,
//         crossDomain: true,
//         success: successHandler,
//         error: errorCallBack
//     });

//     function successHandler(data, status, xhr) {
//         var list = document.getElementById(id);
//         insertAfter(createFragment(data), list);
//     }

//     function errorCallBack(xhr, textStatus, errorMessage) {
//         if (errorMessage == 'timeout') {
//             alert('请求超时');
//         } else {
//             alert('获取数据失败');
//         }
//     }
// };
// 调用晚于ajaxData的定义位置

// ajaxDataByKeyword(questionArr, ajaxData);
// var createFragment = function($data) {
//     var fragment = document.createDocumentFragment();
//     var li,
//         dataValue,
//         dataTags;
//     mui($data).each(function(index, contents) {
//         console.log(contents);
//         dataValue = contents.title.slice(0, 5);
//         dataTags = contents.title.slice(0, 5);
//         li = document.createElement('li');
//         li.setAttribute('data-value', dataValue);
//         li.setAttribute('data-tags', dataTags);
//         li.className = 'mui-table-view-cell mui-indexed-list-item';
//         li.innerHTML = contents.title;
//         fragment.appendChild(li);
//     });
//     return fragment;
// };

// TIPS:
// 以下调用方式存在变量提升
// 因为在ajaxDataByKeyword定义时就直接调用了ajaxData，
// 若ajaxDataByKeyword早于ajaxData则存在变量提升

var ajaxData = function(keyArr) {
    var keyword = keyArr.keyword,
        id = keyArr.id,
        name = keyArr.name;
    jQuery.ajax({
        url: myRootPath + myQuestionMethod + keyword,
        type: 'GET',
        dataType: 'jsonp',
        jsonp: 'callback',
        async: true,
        timeout: 60000,
        crossDomain: true,
        success: successHandler,
        error: errorCallBack
    });

    function successHandler(data, status, xhr) {
        var list = document.getElementById(id);
        insertAfter(createFragment(data, keyword), list);
        // 此处的列表必须在success或者complete初始化，否则mui将无法获取数据并初始化组件
        mui.ready(function() {
            var header = document.querySelector('header.mui-bar');
            var list = document.getElementById('question-list');
            //calc hieght
            list.style.height = (document.body.offsetHeight - header.offsetHeight) + 'px';
            //create
            window.indexedList = new mui.IndexedList(list);
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
var createFragment = function($data, keyword) {
    var fragment = document.createDocumentFragment();
    var li,
        dataValue,
        dataTags;
    mui($data).each(function(index, contents) {
        dataValue = contents.title.slice(0, 5);
        dataTags = contents.title.slice(0, 5);
        li = document.createElement('li');
        li.setAttribute('data-value', dataValue);
        li.setAttribute('data-tags', dataTags);
        li.className = 'mui-table-view-cell mui-indexed-list-item indexed-scroll-list';
        li.innerHTML = '<a class="mui-navigate-right" href="issue_detail.html?&id=' + contents.questionid + '&classifyFir=' + keyword + '">' + contents.title + '</a>';
        fragment.appendChild(li);
    });
    return fragment;
};


var ajaxDataByKeyword = function($arrs) {
    for (keys in $arrs) {
        var key = $arrs[keys];
        ajaxData(key);
        // TIPS:
        // 不可使用：
        // return ajaxData(key);
        // 否则将会只得到最后一组数据
        // 这与全局作用域以及闭包有关，ajaxData在全局中定义，若使用return则之前的ajaxData变量将会被最后一个覆盖
    }
};

ajaxDataByKeyword(questionArr);
