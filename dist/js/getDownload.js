function timeTranfer(a){var n=new Date(a),t=n.getFullYear(),o=n.getMonth()+1;o=o<10?"0"+o:o;var e=n.getDate();return e=e<10?"0"+e:e,t+"-"+o+"-"+e}function ajaxDownload(a){function n(n,t,o){showDownload(n,a)}function t(a,n,t){"timeout"==n?alert("请求超时！"):"403"==n?alert("无法访问！"):"404"==n?alert("未找到数据！"):"500"==n?alert("服务器出错！"):alert("请求数据出错！")}function o(){var a=$("#mask-ui");a&&setTimeout(function(){a.hide("fast")},1500)}$.ajax({url:downloadRootPath+downloadMethod+a+"&pageNum=6&classifyNum=3",type:"GET",dataType:"jsonp",jsonp:"callback",async:!0,timeout:3e4,crossDomain:!0,success:n,complete:o,error:t})}function showDownload(a,n){var t=$("#down-box");t.empty();var o=$('<ul class="bulletin-main"></ul>'),e=parseInt(a.totalPage);$.each(a.list,function(a,n){var t=$('<li><a href="'+n.fileUrl+'" download="'+n.fileName+'"><span>'+n.fileName+'</span><span><button class="down-btn">立即下载</button></span></a></li>');o.append(t)}),o.appendTo(t);var l=$("#down-pagination");l.empty(),initPagination(l,e)}function ajaxDownload_my(a){function n(n,t,o){showDownload_my(n,parseInt(a+1))}function t(a,n,t){"timeout"==n?alert("请求超时！"):"403"==n?alert("无法访问！"):"404"==n?alert("未找到数据！"):"500"==n?alert("服务器出错！"):alert("请求数据出错！")}function o(){var a=$("#mask-ui");a&&setTimeout(function(){a.hide("fast")},1500)}$.ajax({url:downloadRootPath+downloadMethod+parseInt(a+1)+"&pageNum=6&classifyNum=3",type:"GET",dataType:"jsonp",jsonp:"callback",async:!0,timeout:3e4,crossDomain:!0,success:n,complete:o,error:t})}function showDownload_my(a,n){var t=$("#down-box");t.empty();var o=$('<ul class="bulletin-main"></ul>');parseInt(a.totalPage);$.each(a.list,function(a,n){var t=$('<li><a href="'+n.fileUrl+'"><span>'+n.fileName+'</span><span><button class="down-btn">立即下载</button></span></a></li>');o.append(t)}),o.appendTo(t)}$(function(){ajaxDownload(1)});var downloadRootPath="http://119.147.172.215:8088/BMS/",downloadMethod="page/downloadCenterpageList.do?pageIndex=",initPagination=function(a,n){var t=n;$(a).pagination(t,{num_edge_entries:1,num_display_entries:4,items_per_page:1,ajaxPageFn:ajaxDownload_my,prev_text:"上一页",next_text:"下一页"})};
//# sourceMappingURL=getDownload.js.map
