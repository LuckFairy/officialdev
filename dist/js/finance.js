function setImgSection(i){for(var e=$(".tab-ul li"),t=$(i),r=[],c=0;c<e.length;c++)r.push(e.eq(c).find("a").children("img").attr("src"));r[4]=r[0].slice(0,-14)+"@12x.png",e.each(function(i){$(this).bind("click",function(c){switch(i){case 0:set($(this),t),e.eq(1).find("a").children("img").attr("src",r[1]),e.eq(2).find("a").children("img").attr("src",r[2]),e.eq(3).find("a").children("img").attr("src",r[3]);break;case 1:set($(this),t),e.eq(0).find("a").children("img").attr("src",r[4]),e.eq(2).find("a").children("img").attr("src",r[2]),e.eq(3).find("a").children("img").attr("src",r[3]);break;case 2:set($(this),t),e.eq(1).find("a").children("img").attr("src",r[1]),e.eq(0).find("a").children("img").attr("src",r[4]),e.eq(3).find("a").children("img").attr("src",r[3]);break;case 3:set($(this),t),e.eq(0).find("a").children("img").attr("src",r[4]),e.eq(1).find("a").children("img").attr("src",r[1]),e.eq(2).find("a").children("img").attr("src",r[2])}c.preventDefault?c.preventDefault():c.returnValue=!1})})}function mouseEnterHandler(){for(var i=$(".scenes-box .scenes-item"),e=[],t=0;t<i.length;t++)e.push(i.eq(t).find(".item-img").children("img").attr("src"));e[4]=e[0].slice(0,-14)+"@12x.png",i.each(function(t){$(this).bind("mouseenter",function(){switch(t){case 0:setImg($(this)),i.eq(1).find(".item-img").children("img").attr("src",e[1]),i.eq(2).find(".item-img").children("img").attr("src",e[2]),i.eq(3).find(".item-img").children("img").attr("src",e[3]);break;case 1:setImg($(this)),i.eq(0).find(".item-img").children("img").attr("src",e[4]),i.eq(2).find(".item-img").children("img").attr("src",e[2]),i.eq(3).find(".item-img").children("img").attr("src",e[3]);break;case 2:setImg($(this)),i.eq(1).find(".item-img").children("img").attr("src",e[1]),i.eq(0).find(".item-img").children("img").attr("src",e[4]),i.eq(3).find(".item-img").children("img").attr("src",e[3]);break;case 3:setImg($(this)),i.eq(0).find(".item-img").children("img").attr("src",e[4]),i.eq(1).find(".item-img").children("img").attr("src",e[1]),i.eq(2).find(".item-img").children("img").attr("src",e[2])}}),$("#scenes-items").bind("mouseleave",function(){i.eq(0).addClass("active").find(".item-img").children("img").attr("src",e[0]),i.eq(1).removeClass("active").find(".item-img").children("img").attr("src",e[1]),i.eq(2).removeClass("active").find(".item-img").children("img").attr("src",e[2]),i.eq(3).removeClass("active").find(".item-img").children("img").attr("src",e[3])})})}function set(i,e){var t=/([^_]*)\@[^@]+$/,r=$(i).data("id"),c=$(e),n=$(i).find("a").children("img").attr("src"),a=n.match(t)[1],s=a.slice(0,1),m=s+"active",d=n.replace(a,m);$(i).find("a").addClass("active").children("img").attr("src",d),$(i).siblings().find("a").removeClass("active"),showSection(r,c)}function showSection(i,e){var t=$(e);t.each(function(){var e=$(this);$(this).attr("data-id")!=i?setTimeout(function(){e.hide()},60):setTimeout(function(){e.show()},60)})}function setImg(i){var e,t=/([^_]*)\@[^@]+$/,r=$(i).find(".item-img").children("img").attr("src"),c=r.match(t)[1];e=c.length>1&&c.length<3?c.slice(0,2):c.slice(0,1);var n=e+"active",a=r.replace(c,n);$(i).addClass("active").find(".item-img").children("img").attr("src",a),$(i).siblings().removeClass("active")}
//# sourceMappingURL=finance.js.map
