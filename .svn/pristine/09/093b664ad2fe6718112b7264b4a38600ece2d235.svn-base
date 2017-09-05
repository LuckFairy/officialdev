/**
 * 全局函数
 * global.js
 * @authors beyondouyuan (beyondouyuan.github.io)
 * @date    2017-05-23 17:43:14
 * @version $1.0.0$
 */


/**
 * params：
 * init：初始化
 * ready：文档结构渲染就绪
 * browser：客户端设备检测
 * linkArr：侧滑菜单
 * createAddEventListenerArr：侧滑菜单监控
 * timeTranfer：时间格式化
 * GetRequest：获取URL参数
 * insertAfter：元素之后插入动态dom
 * hasClass：样式检测
 * addClass：增加样式
 * removeClass：移除样式
 * toggleClass：样式切换
 * addNavClass：增加底部导航条样式
 * removeNavClass：移除底部导航条样式
 **/

// tips:在顶部即调用，则使用函数表达式function fn() 而不使用声明式var fn = function()，以解决变量提升

mui.init({
    swipeBack: false,
    gestureConfig: {
        tap: true, //默认为true
        doubletap: true, //默认为false
        longtap: true, //默认为false
        swipe: true, //默认为true
        drag: true, //默认为true
        hold: true, //默认为false，不监听
        release: true //默认为false，不监听
    }
});
mui.ready(function() {
    mui('.scroll-container').scroll({
        scrollY: true, //是否竖向滚动
        scrollX: false, //是否横向滚动
        startX: 0, //初始化时滚动至x
        startY: 0, //初始化时滚动至y
        indicators: false, //是否显示滚动条
        deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
        bounce: true //是否启用回弹
    });
    // 监听手势，切换底部导航栏
    mui(document).on('swipedown', '.mui-content', function() {
        removeNavClass();
    });
    mui(document).on('hold', '.mui-content', function() {
        addNavClass();
    });
    var browser = {
        versions: function() {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return { //移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };

    if (browser.versions.mobile || browser.versions.ios || browser.versions.android ||
        browser.versions.iPhone || browser.versions.iPad) {} else {
        mui.alert('您好，请勿使用PC端访问移动站点，请使用移动设备访问', '温馨提示');
    }

    function maskClikHandle() {
        mui.alert('您好，请勿使用PC端访问移动站点，请使用移动设备访问');
    }
    var createAddEventListener = function($eleID, $url) {
        return document.querySelector('#' + $eleID).addEventListener('tap', function(event) {
            mui.openWindow({
                url: $url + '.html',
                id: $eleID,
                show: {
                    autoShow: true,
                    aniShow: 'slide-in-right',
                    duration: 5000,
                },
            });
        });
    };
    //  var openHome = createAddEventListener;
    //  openHome('about','about');
    //  openHome('home','index');
    // 待修改功能
    // 将createAddEventListener库里化或者使用循环，一次性将所有需要执行打开窗哦口的链接以数组对象形式传入函数，一次性调用遍历执行函数
    // 侧滑栏url
    var linkArr = [{
        ele: 'home',
        href: 'index.html'
    }, {
        ele: 'about',
        href: 'about.html'
    }, {
        ele: 'history',
        href: 'history.html'
    }, {
        ele: 'news',
        href: 'news.html'
    }, {
        ele: 'bulletin',
        href: 'bulletin.html'
    }, {
        ele: 'product',
        href: 'product.html'
    }, {
        ele: 'solve',
        href: 'solve.html'
    }, {
        ele: 'business',
        href: 'business.html'
    }, {
        ele: 'issue',
        href: 'issue.html'
    }, {
        ele: 'userexp',
        href: 'userexp.html'
    }, {
        ele: 'customer',
        href: 'customer.html'
    }, {
        ele: 'charges',
        href: 'charges.html'
    }, {
        ele: 'wallet',
        href: 'wallet.html'
    }, {
        ele: 'person',
        href: 'person.html'
    }, {
        ele: 'hlqb',
        href: 'hlqb.html'
    }, {
        ele: 'mpos',
        href: 'mpos.html'
    }, {
        ele: 'contact',
        href: 'contactus.html'
    }, {
        ele: 'recruit',
        href: 'recruit.html'
    }, {
        ele: 'more',
        href: 'more.html'
    }];
    var createAddEventListenerArr = function($arr, timer) {
        mui($arr).each(function(i) {
            var eleArr = document.querySelector('#' + $arr[i].ele);
            if (eleArr) {
                return eleArr.addEventListener('tap', function(event) {
                    mui.openWindow({
                        url: $arr[i].href,
                        id: $arr[i].ele,
                        createNew: false,
                        show: {
                            autoShow: true, //页面loaded事件发生后自动显示，默认为true
                            aniShow: 'slide-in-right', //页面显示动画，默认为”slide-in-right“；
                            duration: timer, //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
                        },
                        waiting: {
                            autoShow: true, //自动显示等待框，默认为true
                            title: '正在加载...', //等待对话框上显示的提示内容
                            options: {
                                width: '300px', //等待框背景区域宽度，默认根据内容自动计算合适宽度
                                height: '300px', //等待框背景区域高度，默认根据内容自动计算合适高度
                            }
                        }
                    });
                });
            }
        })
    };
    var oppenLink = createAddEventListenerArr;
    oppenLink(linkArr, 800);
});

// 格式化时间格式
function timeTranfer(dt) {
    var date = new Date(dt);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}


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

var insertAfter = function(newEl, targetEl) {
    var parentEl = targetEl.parentNode;

    if (parentEl.lastChild == targetEl) {
        parentEl.appendChild(newEl);
    } else {
        parentEl.insertBefore(newEl, targetEl.nextSibling);
    }
};

function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

function toggleClass(obj, cls) {
    if (hasClass(obj, cls)) {
        removeClass(obj, cls);
    } else {
        addClass(obj, cls);
    }
}

function addNavClass() {
    var obj = document.getElementById('footer-bar');
    if (!hasClass(obj, 'none')) {
        addClass(obj, "none");
    } else {
        return;
    }
}

function removeNavClass() {
    var obj = document.getElementById('footer-bar');
    if (hasClass(obj, 'none')) {
        removeClass(obj, "none");
    } else {
        return;
    }
}
