//查看、预览
$(function() {
    var baseInfoUrl = "public/datas/base_info.json";
    var baseInputUrl = "public/datas/base_input.json";
    var detaliUrl = "public/datas/base_detail.json";
    getJsonInfo('#base-body', baseInfoUrl, 1);
    getJsonInfo('#input-body', baseInputUrl, 2);
    getJsonInfo('#detail-body', detaliUrl, 3);
    viewAnnex('#base-body', magnifyImg);
    goToAnchor('.anchor');
});



function viewAnnex(table, callback) {
    // 此方法为动态插入的元素绑定事件
    $(table).delegate("td a", "click", function(event) {
        var $src = $(this).attr('data-src');
        var _offLeft = ($(this).offset().left) / 2 - 70 + 'px',
            _offTop = $(this).offset().top - 50 + 'px';
        $('.viewBox').remove();
        createViewBox($src, _offTop, _offLeft);
        callback();
        if (event.preventDefault) {
            event.preventDefault(); //支持DOM标准的浏览器
        } else {
            event.returnValue = false; //IE
        }
    });
}

// 创建预览容器
function createViewBox(src, top, left) {
    var viewBox = $('<div class="viewBox">' +
        '<img src="' + src + '" class="magnify"/>' +
        '</div>');
    viewBox.css({ "top": top, "left": left });
    $('.guide-content-ui').append(viewBox);
    showViewBox();
}
//    show viewBox
function showViewBox() {
    $('.viewBox').fadeIn(600);
}
$(function() {
    // 点击空白隐藏图片
    $(document).bind("click", function(event) {
        var target = $(event.target);
        if (target.closest('.viewBox,.view-link').length === 0) {
            $('.viewBox').fadeOut(400);
        }
    });

});
// 查看大图
function magnifyImg() {
    // 仅能放大一次
    $('.magnify').one("click", function() {
        var imgWidth = $(this).width(),
            imgHeight = $(this).height();
        if (imgWidth < 800) {
            $(this).animate({
                width: imgWidth * 2,
                height: imgHeight * 2
            });
        }
        changImgSrc($(this), "small", "big");
    });
}

function changImgSrc(ele, oldSrc, newSrc) {
    $(ele).each(function() {
        var newSrcs = $(this).attr("src").replace(oldSrc, newSrc);
        $(this).css({ 'opacity': '0' });
        $(this).attr("src", newSrcs);
        $(this).css({ 'opacity': '' });
    })
}
//    锚点跳转
function getAnchor(anchorID) {
    var $target = $(anchorID).offset().top;
    $('body,html').animate({ scrollTop: $target }, 2000);
}

function goToAnchor(link) {
    var $link = $(link);
    $link.on('click', function(event) {
        var $href = $(this).attr('href').split('#')[1];
        getAnchor('#' + $href);
        if (event.preventDefault) {
            event.preventDefault(); //支持DOM标准的浏览器
        } else {
            event.returnValue = false; //IE
        }
    });
}


function getJsonInfo(ele, url, id) {
    var eleID = $(ele);
    eleID.empty();
    var flag = "true";
    $.ajax({
        type: "get",
        async: true,
        dataType: "json",
        url: url,
        success: getDataCallBack
    });

    function getDataCallBack(data, status, xhr) {
        $.each(data, function(index, value) {
            var className = (value.isRequired === flag) ? "required" : "optional";
            var txt = (value.isRequired === flag) ? "必须" : "可选";
            var html = (value.downUrl) ? "<a target='_blank'  href='public/docs/" + value.downUrl + value.type + "'>查看</a> " : "-";
            if (id == 3) {
                eleID.append(
                    "<tr>" +
                    "<td>" + value.id + "</td>" +
                    "<td>" + value.docName + "<a download='" + value.docName + value.type + "' href='public/docs/" + value.downUrl + value.type + "'>下载</a> </td>" +
                    "<td>" + value.docAmount + "</td>" +
                    "<td>" + value.seal + "</td>" +
                    "<td><a target='_blank'  href='public/docs/" + value.downUrl + ".pdf'>预览</a>  </td>" +
                    "<td>" + value.desc + "</td>" +
                    "</tr>"
                )
            } else if (id == 2) {
                eleID.append(
                    "<tr>" +
                    "<td>" + value.id + "</td>" +
                    "<td>" + value.docName + "</td>" +
                    "<td>" + value.docAmount + "</td>" +
                    "<td  class='" + className + "'>" + txt + "</td>" +
                    "<td>" + value.seal + "</td>" +
                    "<td>" + html + "</td>" +
                    "<td>" + value.desc + "</td>" +
                    "</tr>"
                )
            } else {
                eleID.append(
                    "<tr>" +
                    "<td>" + value.id + "</td>" +
                    "<td>" + value.docName + "</td>" +
                    "<td>" + value.docAmount + "</td>" +
                    "<td  class='" + className + "'>" + txt + "</td>" +
                    "<td>" + value.seal + "</td>" +
                    "<td><a href='' data-src='dist/images/guide/small/" + value.imgName + ".jpg' class='view-link'>查看</a> </td>" +
                    "<td>" + value.desc + "</td>" +
                    "</tr>"
                )
            }
        })
    }
}
