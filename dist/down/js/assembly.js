var createCardFragment=function(e,a){return a&&1==a?assemblyContainer(e,1):a&&2==a?assemblyContainer(e,2):assemblyContainer(e)},assemblyContainer=function(e,a){var i,t,l,m,c,n,d,r,s,u,o,p,v,b=document.createDocumentFragment();e.length;return mui.each(e,function(e,g){if(!(a&&1==a&&e>=a||a&&2==a&&e<1)){i=document.createElement("div"),i.className="mui-card",t=document.createElement("div"),t.className="mui-card-header mui-card-media",l=document.createElement("img"),l.setAttribute("data-lazyload",g.proImg),m=document.createElement("div"),m.className="mui-media-body",m.innerHTML=g.proName+"<p>Posted by 广州合利宝支付科技有限公司</p></div>",t.appendChild(l),t.appendChild(m),c=document.createElement("div"),c.className="mui-card-content",n=document.createElement("div"),n.className="mui-card-content-inner",d=document.createElement("img"),d.setAttribute("data-lazyload",g.proImg),d.setAttribute("width","100% "),d.setAttribute("alt",g.proName),n.appendChild(d);var h=g.addrArr,f="";if(f+=0==h.faxTel.length?"<p>"+h.adrr+"</br>"+h.coding+"</br>"+h.tel+"</br>"+h.hotTel+"</br>"+h.meil+"<br /></p>":"<p>"+h.adrr+"</br>"+h.coding+"</br>"+h.tel+"</br>"+h.faxTel+"</br>"+h.hotTel+"</br>"+h.meil+"<br /></p>",r=document.createElement("ul"),r.className="mui-table-view",s=document.createElement("li"),s.className="mui-table-view-cell mui-collapse mui-active",s.innerHTML='<a class="mui-navigate-right" href="#">'+g.proName+'简介</a><div class="mui-collapse-content">'+f+"</div>",r.appendChild(s),g.progressbar){var C=g.progressbar,N="";p=document.createElement("ul"),p.className="mui-table-view",v=document.createElement("li"),v.className="mui-table-view-cell mui-collapse",mui.each(C,function(e,a){N+='<div class="mui-row timeline-block line-timeline-block"><div class="mui-col-sm-5 mui-col-xs-5 time-circle line-time-circle"><div class="timeline-img"><a href="#">'+a.progress.title+'</a></div></div><div class="mui-col-sm-7 mui-col-xs-7 vertical-line line-vertical-line"><div class="mui-card"><div class="mui-card-header mui-card-media"><img data-lazyload="'+a.progress.img+'" /><div class="mui-media-body"><div><p>'+a.progress.content+'</p></div></div></div><div class="mui-card-content"><div class="mui-card-content-inner"><img data-lazyload="'+a.progress.img+'" alt="" width="100%" /><p>'+a.progress.content+"</p></div></div></div></div></div>"}),v.innerHTML='<a class="mui-navigate-right" href="#">入网流程</a><div class="mui-collapse-content" style="background-color: transparent;"><div id="timeline" class="timeline-container" >'+N+"</div></div>",r.appendChild(v)}if(g.features){var w=g.features,y="";mui.each(w,function(e,a){y+='<li class="mui-table-view-cell mui-media inner-mui-table-view-customer"><a href="#" class="wrap-box"><img class="mui-media-object mui-pull-left" data-lazyload="'+a.feature.img+'"/><div class="mui-media-body">'+a.feature.title+"<p>"+a.feature.content+"</p></div></a></li>"}),u=document.createElement("li"),u.className="mui-table-view-cell mui-collapse",u.innerHTML='<a class="mui-navigate-right" href="#">'+g.proName+'优势</a><div class="mui-collapse-content"><ul class="mui-table-view">'+y+"</ul></div>",r.appendChild(u)}g.mapID&&(o=document.createElement("li"),o.className="mui-table-view-cell mui-collapse map-view",o.setAttribute("data-map",g.mapID),o.innerHTML='<a class="mui-navigate-right" href="#">点击查看地图</a><div class="mui-collapse-content"><div class="map-container" id="'+g.mapID+'"></div></div>',r.appendChild(o)),n.appendChild(r),c.appendChild(n),i.appendChild(t),i.appendChild(c),b.appendChild(i)}}),b};
//# sourceMappingURL=assembly.js.map