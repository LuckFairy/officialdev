function toggleMapLink(){var n,r,a;$(".map-link").bind("click",function(o){var t=$(this).attr("data-rel");$(".map-container").toggle(),"guangzhou"==t&&(n=lonArr1,r=latArr1,a=contArr1,getGuangzhou("container",n,r,a)),"shenzhen"==t&&(n=lonArr2,r=latArr2,a=contArr2,getGuangzhou("container",n,r,a)),"shanghai"==t&&(n=lonArr3,r=latArr3,a=contArr3,getGuangzhou("container",n,r,a)),"beijing"==t&&(n=lonArr4,r=latArr4,a=contArr4,getGuangzhou("container",n,r,a)),o.preventDefault?o.preventDefault():o.returnValue=!1})}function getGuangzhou(n,r,a,o){var t=new AMap.Map(n,{resizeEnable:!0,mapStyle:"normal",zoom:1,center:[r,a],isHotspot:!0,showButton:!0});AMap.plugin(["AMap.ToolBar","AMap.Scale","AMap.OverView","AMap.MapType","AMap.Geolocation"],function(){t.addControl(new AMap.ToolBar),t.addControl(new AMap.Scale),t.addControl(new AMap.OverView({isOpen:!0})),t.addControl(new AMap.MapType),t.addControl(new AMap.Geolocation)});var e=new AMap.Marker({position:[r,a]});e.setMap(t);var l=new AMap.Circle({center:[r,a],radius:100,fillOpacity:.2,strokeWeight:1});l.setMap(t),t.setFitView();var i=new AMap.InfoWindow({content:o,offset:new AMap.Pixel(0,(-28))});i.open(t,e.getPosition()),t.plugin(["AMap.ToolBar"],function(){t.addControl(new AMap.ToolBar)}),location.href.indexOf("&guide=1")!==-1&&t.setStatus({scrollWheel:!1})}$(function(){toggleMapLink(),$(document).bind("click",function(){var n=$(event.target);0===n.closest(".map-container,.map-link").length&&$(".map-container").fadeOut(400)})});var lonArr1=113.3262611464,latArr1=23.1238397108,contArr1="亲<br>这里是越秀金融大厦",lonArr2=113.933652,latArr2=22.51731,contArr2="亲<br>这里是中洲控股金融中心",lonArr3=121.434353,latArr3=31.171084,contArr3="亲<br>这里是航天大厦南楼",lonArr4=116.463577,latArr4=39.921328,contArr4="亲<br>这里是安联大厦";
//# sourceMappingURL=getLocation.js.map
