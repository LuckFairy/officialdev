!function(e,t,i){function n(e,t){var i=f({},R,t||{},m(e));i.imageSelector&&(i.image=s(i.imageSelector).map(function(e){return e.src}).join("||")),u(e,"share-component social-share"),r(e,i),a(e,i),e.initialized=!0}function r(e,t){var i=o(t),n="prepend"==t.mode;w(n?i.reverse():i,function(i){var r=c(i,t),a=t.initialized?h(e,"icon-"+i):p('<a class="social-share-icon icon-'+i+'"></a>');return!a.length||(a[0].href=r,"wechat"===i?a[0].tabindex=-1:a[0].target="_blank",void(t.initialized||(n?e.insertBefore(a[0],e.firstChild):e.appendChild(a[0]))))})}function a(e,t){var i=h(e,"icon-wechat","a");if(0===i.length)return!1;var n=p('<div class="wechat-qrcode"><h4>'+t.wechatQrcodeTitle+'</h4><div class="qrcode"></div><div class="help">'+t.wechatQrcodeHelper+"</div></div>"),r=h(n[0],"qrcode","div");i[0].appendChild(n[0]),new QRCode(r[0],{text:t.url,width:t.wechatQrcodeSize,height:t.wechatQrcodeSize})}function o(e){e.mobileSites.length||(e.mobileSites=e.sites);var t=(I?e.mobileSites:e.sites).slice(0),i=e.disabled;return"string"==typeof t&&(t=t.split(/\s*,\s*/)),"string"==typeof i&&(i=i.split(/\s*,\s*/)),S&&i.push("wechat"),i.length&&w(i,function(e){t.splice(g(e,t),1)}),t}function c(e,t){return t.summary=t.description,C[e].replace(/\{\{(\w)(\w*)\}\}/g,function(n,r,a){var o=e+r+a.toLowerCase();return a=(r+a).toLowerCase(),encodeURIComponent((t[o]===i?t[a]:t[o])||"")})}function s(i){return(t.querySelectorAll||e.jQuery||e.Zepto||l).call(t,i)}function l(e){var i=[];return w(e.split(/\s*,\s*/),function(n){var r=n.match(/([#.])(\w+)/);if(null===r)throw Error("Supports only simple single #ID or .CLASS selector.");if(r[1]){var a=t.getElementById(r[2]);a&&i.push(a)}i=i.concat(h(e))}),i}function u(e,t){if(t&&"string"==typeof t){var i=(e.className+" "+t).split(/\s+/),n=" ";w(i,function(e){n.indexOf(" "+e+" ")<0&&(n+=e+" ")}),e.className=n.slice(1,-1)}}function d(e){return(t.getElementsByName(e)[0]||0).content}function h(e,t,i){if(e.getElementsByClassName)return e.getElementsByClassName(t);var n=[],r=e.getElementsByTagName(i||"*");return t=" "+t+" ",w(r,function(e){(" "+(e.className||"")+" ").indexOf(t)>=0&&n.push(e)}),n}function p(e){var i=t.createElement("div");return i.innerHTML=e,i.childNodes}function f(){var e=arguments;if(y)return y.apply(null,e);var t={};return w(e,function(e){w(e,function(e,i){t[i]=e})}),e[0]=t}function m(e){if(e.dataset)return e.dataset;var t={};return e.hasAttributes()?(w(e.attributes,function(e){var i=e.name;return 0!==i.indexOf("data-")||(i=i.replace(/^data-/i,"").replace(/-(\w)/g,function(e,t){return t.toUpperCase()}),void(t[i]=e.value))}),t):{}}function g(e,t,i){var n;if(t){if(E)return E.call(t,e,i);for(n=t.length,i=i?i<0?Math.max(0,n+i):i:0;i<n;i++)if(i in t&&t[i]===e)return i}return-1}function w(e,t){var n=e.length;if(n===i){for(var r in e)if(e.hasOwnProperty(r)&&t.call(e[r],e[r],r)===!1)break}else for(var a=0;a<n&&t.call(e[a],e[a],a)!==!1;a++);}function v(i){var n="addEventListener",r=t[n]?"":"on";~t.readyState.indexOf("m")?i():"load DOMContentLoaded readystatechange".replace(/\w+/g,function(a,o){(o?t:e)[r?"attachEvent":n](r+a,function(){i&&(o<6||~t.readyState.indexOf("m"))&&(i(),i=0)},!1)})}var E=Array.prototype.indexOf,y=Object.assign,S=/MicroMessenger/i.test(navigator.userAgent),I=t.documentElement.clientWidth<=768,L=(t.images[0]||0).src||"",T=d("site")||d("Site")||t.title,b=d("title")||d("Title")||t.title,q=d("description")||d("Description")||"",R={url:location.href,origin:location.origin,source:T,title:b,description:q,image:L,imageSelector:i,weiboKey:"",wechatQrcodeTitle:"微信扫一扫：分享",wechatQrcodeHelper:"<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>",wechatQrcodeSize:100,sites:["weibo","qq","wechat","tencent","douban","qzone","linkedin","diandian","facebook","twitter","google"],mobileSites:[],disabled:[],initialized:!1},C={qzone:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary={{SUMMARY}}&site={{SOURCE}}",qq:"http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}",tencent:"http://share.v.t.qq.com/index.php?c=share&a=index&title={{TITLE}}&url={{URL}}&pic={{IMAGE}}",weibo:"http://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}&appkey={{WEIBOKEY}}",wechat:"javascript:",douban:"http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11",diandian:"http://www.diandian.com/share?lo={{URL}}&ti={{TITLE}}&type=link",linkedin:"http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin",facebook:"https://www.facebook.com/sharer/sharer.php?u={{URL}}",twitter:"https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{ORIGIN}}",google:"https://plus.google.com/share?url={{URL}}"};e.socialShare=function(e,t){e="string"==typeof e?s(e):e,e.length===i&&(e=[e]),w(e,function(e){e.initialized||n(e,t)})},v(function(){socialShare(".social-share, .share-component")})}(window,document);
//# sourceMappingURL=social-share.js.map