function viewAnnex(t,e){$(t).delegate("td a","click",function(t){var a=$(this).attr("data-src"),n=$(this).offset().left/2-70+"px",d=$(this).offset().top-50+"px";$(".viewBox").remove(),createViewBox(a,d,n),e(),t.preventDefault?t.preventDefault():t.returnValue=!1})}function createViewBox(t,e,a){var n=$('<div class="viewBox"><img src="'+t+'" class="magnify"/></div>');n.css({top:e,left:a}),$(".guide-content-ui").append(n),showViewBox()}function showViewBox(){$(".viewBox").fadeIn(600)}function magnifyImg(){$(".magnify").one("click",function(){var t=$(this).width(),e=$(this).height();t<800&&$(this).animate({width:2*t,height:2*e}),changImgSrc($(this),"small","big")})}function changImgSrc(t,e,a){$(t).each(function(){var t=$(this).attr("src").replace(e,a);$(this).css({opacity:"0"}),$(this).attr("src",t),$(this).css({opacity:""})})}function getAnchor(t){var e=$(t).offset().top;$("body,html").animate({scrollTop:e},2e3)}function goToAnchor(t){var e=$(t);e.on("click",function(t){var e=$(this).attr("href").split("#")[1];getAnchor("#"+e),t.preventDefault?t.preventDefault():t.returnValue=!1})}function getJsonInfo(t,e,a){function n(t,e,n){$.each(t,function(t,e){var n=e.isRequired===i?"required":"optional",o=e.isRequired===i?"必须":"可选",c=e.downUrl?"<a target='_blank'  href='public/docs/"+e.downUrl+e.type+"'>查看</a> ":"-";3==a?d.append("<tr><td>"+e.id+"</td><td>"+e.docName+"<a download='"+e.docName+e.type+"' href='public/docs/"+e.downUrl+e.type+"'>下载</a> </td><td>"+e.docAmount+"</td><td>"+e.seal+"</td><td><a target='_blank'  href='public/docs/"+e.downUrl+".pdf'>预览</a>  </td><td>"+e.desc+"</td></tr>"):2==a?d.append("<tr><td>"+e.id+"</td><td>"+e.docName+"</td><td>"+e.docAmount+"</td><td  class='"+n+"'>"+o+"</td><td>"+e.seal+"</td><td>"+c+"</td><td>"+e.desc+"</td></tr>"):d.append("<tr><td>"+e.id+"</td><td>"+e.docName+"</td><td>"+e.docAmount+"</td><td  class='"+n+"'>"+o+"</td><td>"+e.seal+"</td><td><a href='' data-src='dist/images/guide/small/"+e.imgName+".jpg' class='view-link'>查看</a> </td><td>"+e.desc+"</td></tr>")})}var d=$(t);d.empty();var i="true";$.ajax({type:"get",async:!0,dataType:"json",url:e,success:n})}$(function(){var t="public/datas/base_info.json",e="public/datas/base_input.json",a="public/datas/base_detail.json";getJsonInfo("#base-body",t,1),getJsonInfo("#input-body",e,2),getJsonInfo("#detail-body",a,3),viewAnnex("#base-body",magnifyImg),goToAnchor(".anchor")}),$(function(){$(document).bind("click",function(t){var e=$(t.target);0===e.closest(".viewBox,.view-link").length&&$(".viewBox").fadeOut(400)})});
//# sourceMappingURL=guide.js.map
