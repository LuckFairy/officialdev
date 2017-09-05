;function timeTranfer(e){var t=new Date(e),s=t.getFullYear(),l=t.getMonth()+1;l=l<10?"0"+l:l;var r=t.getDate();return r=r<10?"0"+r:r,s+"-"+l+"-"+r}function GetRequest(){var e=location.search,t=new Object;if(e.indexOf("?")!=-1){var s=e.substr(1);if(s.indexOf("&")!=-1){strs=s.split("&");for(var l=0;l<strs.length;l++)t[strs[l].split("=")[0]]=unescape(strs[l].split("=")[1])}else t[s.split("=")[0]]=unescape(s.split("=")[1])}return t}function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){this.hasClass(e,t)||(e.className+=" "+t)}function removeClass(e,t){if(hasClass(e,t)){var s=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(s," ")}}function toggleClass(e,t){hasClass(e,t)?removeClass(e,t):addClass(e,t)}function addNavClass(){var e=document.getElementById("footer-bar");hasClass(e,"none")||addClass(e,"none")}function removeNavClass(){var e=document.getElementById("footer-bar");hasClass(e,"none")&&removeClass(e,"none")}mui.init({swipeBack:!1,gestureConfig:{tap:!0,doubletap:!0,longtap:!0,swipe:!0,drag:!0,hold:!0,release:!0}}),mui.ready(function(){mui(".scroll-container").scroll({scrollY:!0,scrollX:!1,startX:0,startY:0,indicators:!1,deceleration:6e-4,bounce:!0}),mui(document).on("swipedown",".mui-content",function(){removeNavClass()}),mui(document).on("hold",".mui-content",function(){addNavClass()});var e=[{ele:"home",href:"index.html"},{ele:"about",href:"about.html"},{ele:"history",href:"history.html"},{ele:"news",href:"news.html"},{ele:"bulletin",href:"bulletin.html"},{ele:"product",href:"product.html"},{ele:"solve",href:"solve.html"},{ele:"business",href:"business.html"},{ele:"issue",href:"issue.html"},{ele:"userexp",href:"userexp.html"},{ele:"customer",href:"customer.html"},{ele:"charges",href:"charges.html"},{ele:"wallet",href:"wallet.html"},{ele:"person",href:"person.html"},{ele:"hlqb",href:"hlqb.html"},{ele:"mpos",href:"mpos.html"},{ele:"contact",href:"contactus.html"},{ele:"recruit",href:"recruit.html"},{ele:"more",href:"more.html"}],t=function(e,t){mui(e).each(function(s){var l=document.querySelector("#"+e[s].ele);if(l)return l.addEventListener("tap",function(l){mui.openWindow({url:e[s].href,id:e[s].ele,createNew:!1,show:{autoShow:!0,aniShow:"slide-in-right",duration:t},waiting:{autoShow:!0,title:"正在加载...",options:{width:"300px",height:"300px"}}})})})},s=t;s(e,800)});var insertAfter=function(e,t){var s=t.parentNode;s.lastChild==t?s.appendChild(e):s.insertBefore(e,t.nextSibling)};
function isAndroid(){
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

    if(browser.versions.iso) {
        	return false;
    }
    else{
    	return true;
    }
}
