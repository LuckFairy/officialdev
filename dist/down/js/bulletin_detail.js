var req=new GetRequest,bulletinID=req.id,myPathConfig=pathConfig,myRootPath=myPathConfig.rootPath,myAllBullMethod=myPathConfig.allBullMethod,replaceStr=new RegExp("\r\n","gm"),ajaxData=function(e){function t(t,a,n){var i=document.getElementById("bulletin-wrapper");i.appendChild(createFragment(t,e))}function a(e,t,a){"timeout"==a?alert("请求超时"):alert("获取数据失败")}function n(){mui(document).imageLazyload({placeholder:"dist/images/60x60.gif",diff:!0,duration:300})}$.ajax({url:myRootPath+myAllBullMethod,type:"GET",dataType:"jsonp",jsonp:"callback",async:!1,timeout:3e4,crossDomain:!0,success:t,complete:n,error:a})};mui.ready(function(){ajaxData(bulletinID)});var createFragment=function(e,t){var a,n,i,d,l,m,r,c,o=document.createDocumentFragment();return mui(e.list).each(function(e,u){var p=u.contents.replace(replaceStr,"<br>");u.bulletinid===parseInt(t)&&(a=document.createElement("div"),a.className="mui-card",n=document.createElement("div"),n.className="mui-card-header mui-card-media",i=document.createElement("img"),i.setAttribute("data-lazyload","dist/images/bg_about.png"),d=document.createElement("div"),d.className="mui-media-body",d.innerHTML=u.title+"<p>Posted by 广州合利宝支付科技有限公司 "+timeTranfer(u.time)+"</p></div>",n.appendChild(i),n.appendChild(d),l=document.createElement("div"),l.className="mui-card-content",m=document.createElement("div"),m.className="mui-card-content-inner",r=document.createElement("img"),r.setAttribute("data-lazyload","dist/images/bg_about.png"),r.setAttribute("width","100%"),m.appendChild(r),c=document.createElement("p"),c.innerHTML=p,m.appendChild(c),l.appendChild(m),a.appendChild(n),a.appendChild(l),o.appendChild(a))}),o};
//# sourceMappingURL=bulletin_detail.js.map