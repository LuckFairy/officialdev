// 音乐播放器控制器
window.onload = function() {
    var bgMusic = document.getElementById('bg-music');
    var val = null;
    var musicBox = document.getElementById('music-box');
    var mySwiper = new Swiper('#music', {
        noSwiping: false,
        onTap: function(swiper) {
            if (bgMusic.paused) {
                bgMusic.play();
                updateBgImag(musicBox, "url(dist/images/music-active@12x.png)");
                musicBox.classList.add('active');
            } else {
                bgMusic.pause();
                updateBgImag(musicBox, "url(dist/images/music-default@12x.png)");
                musicBox.classList.remove('active');
            }
        }
    });
    // getVisied();
};

function updateBgImag(ele, url) {
    ele.style.backgroundImage = url;
}

// share.js
// var $config = {
//     url: 'http://www.helipay.com/manual/',
//     title: '合利宝产品介绍',
//     description: '广州唯一拥有全牌照的第三方支付公司，与你共创未来！',
//     // image: 'http://beyondouyuan.github.io/manual/dist/images/share.png'
// };

// socialShare('#share', $config);

// 获取阅读量

// function getVisied() {
//     var caution = false;

//     function setCookie(name, value, expires, path, domain, secure) {
//         var curCookie = name + "=" + escape(value) +
//             ((expires) ? "; expires=" + expires.toGMTString() : "") +
//             ((path) ? "; path=" + path : "") +
//             ((domain) ? "; domain=" + domain : "") +
//             ((secure) ? "; secure" : "");
//         if (!caution || (name + "=" + escape(value)).length <= 4000)
//             document.cookie = curCookie;
//         else
//         if (confirm("Cookie exceeds 4KB and will be cut!"))
//             document.cookie = curCookie;
//     }

//     function getCookie(name) {
//         var prefix = name + "=";
//         var cookieStartIndex = document.cookie.indexOf(prefix);
//         if (cookieStartIndex == -1)
//             return null;
//         var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);
//         if (cookieEndIndex == -1)
//             cookieEndIndex = document.cookie.length;
//         return (document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));
//     }

//     function deleteCookie(name, path, domain) {
//         if (getCookie(name)) {
//             document.cookie = name + "=" +
//                 ((path) ? "; path=" + path : "") +
//                 ((domain) ? "; domain=" + domain : "") +
//                 "; expires=Thu, 01-Jan-70 00:00:01 GMT";
//         }
//     }

//     function fixDate(date) {
//         var base = new Date(0);
//         var skew = base.getTime();
//         if (skew > 0) {
//             date.setTime(date.getTime() - skew);
//         }
//     }
//     var now = new Date();
//     fixDate(now);
//     now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000);
//     var visits = getCookie("counter");
//     if (!visits) {
//         visits = 1;
//     }
//     else {
//         visits = parseInt(visits) + 1;
//     }
//     setCookie("counter", visits, now);
//     var visited = document.getElementById('visited');
//     visited.innerHTML ='阅读量 ' +  visits;
//     console.log("您是第" + visits + "访问本专题的！");

// }
