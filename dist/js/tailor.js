function setImgSection(i){for(var t=$(".tab-ul li"),e=$(i),r=[],a=0;a<t.length;a++)r.push(t.eq(a).find("a").children("img").attr("src"));r[5]=r[0].slice(0,-14)+"@12x.png",t.each(function(i){$(this).bind("click",function(a){switch(i){case 0:set($(this),e),t.eq(1).find("a").children("img").attr("src",r[1]),t.eq(2).find("a").children("img").attr("src",r[2]),t.eq(3).find("a").children("img").attr("src",r[3]),t.eq(4).find("a").children("img").attr("src",r[4]);break;case 1:set($(this),e),t.eq(0).find("a").children("img").attr("src",r[5]),t.eq(2).find("a").children("img").attr("src",r[2]),t.eq(3).find("a").children("img").attr("src",r[3]),t.eq(4).find("a").children("img").attr("src",r[4]);break;case 2:set($(this),e),t.eq(1).find("a").children("img").attr("src",r[1]),t.eq(0).find("a").children("img").attr("src",r[5]),t.eq(3).find("a").children("img").attr("src",r[3]),t.eq(4).find("a").children("img").attr("src",r[4]);break;case 3:set($(this),e),t.eq(0).find("a").children("img").attr("src",r[5]),t.eq(1).find("a").children("img").attr("src",r[1]),t.eq(2).find("a").children("img").attr("src",r[2]),t.eq(4).find("a").children("img").attr("src",r[4]);break;case 4:set($(this),e),t.eq(0).find("a").children("img").attr("src",r[5]),t.eq(1).find("a").children("img").attr("src",r[1]),t.eq(2).find("a").children("img").attr("src",r[2]),t.eq(3).find("a").children("img").attr("src",r[3])}a.preventDefault?a.preventDefault():a.returnValue=!1})})}function set(i,t){var e=/([^_]*)\@[^@]+$/,r=$(i).attr("data-id"),a=$(t);console.log(r);var c=$(i).find("a").children("img").attr("src"),n=c.match(e)[1],s=n.slice(0,1),d=s+"active",h=c.replace(n,d);$(i).find("a").addClass("active").children("img").attr("src",h),$(i).siblings().find("a").removeClass("active"),showSection(r,a)}function showSection(i,t){var e=$(t);e.each(function(){var t=$(this);$(this).attr("data-id")!=i?setTimeout(function(){t.hide()},60):setTimeout(function(){t.show()},60)})}
//# sourceMappingURL=tailor.js.map
