
$(function() {
    toggleSectionLink('.tab-ul li', '.content-container');
})

function toggleSectionLink(list, secs) {
    var $lists = $(list);
    $lists.each(function() {
        var reg = /([^_]*)\@[^@]+$/;
        var $link = $(this).find('a');
        var dataID = $link.attr('data-id');
        $link.attr('data-set', dataID);
        $link.bind('click', function(event) {
            // 获取当前点击链接的img链接
            var $href = $(this).children('img').attr('src');
            // 以下划线为匹配
            var search = $href.match(reg)[1];
            // 分离出当前被点击不包含'active'部分，用于默认不激活项的图片名
            var imgNum = search.slice(0,1);
            // 当前被点击激活项img下划线之后的名称
            var activeImg = imgNum+"active";
            // var defaultImgUrl = $href.replace(search, imgNum);
            // 拼接当前被点击激活项img的新src
            var activeImgUrl = $href.replace(search, activeImg);
            // 获取未被点击想的img src
            var $defaultSrc = $(this).parent().siblings().children('a').children('img').attr('src');
            // 下划线匹配
            var defaultSrcName = $defaultSrc.match(reg)[1];
            // 非激活状态下图片名称
            var defaultSrcNameNum = defaultSrcName.slice(0,1);
            // 非激活状态下图片路径
            var defaultImgUrl = $defaultSrc.replace(defaultSrcName, defaultSrcNameNum);
            console.log(defaultImgUrl);
            $(this).addClass('active').children('img').attr('src',activeImgUrl);
            // 置其他项为非激活状态
            $(this).parent().siblings().children('a').removeClass('active').find('img').attr('src',defaultImgUrl);
            var setDesc = $(this).attr('data-set');
            toggleSection(setDesc, secs);
            if (event.preventDefault) {
                event.preventDefault(); //支持DOM标准的浏览器
            } else {
                event.returnValue = false; //IE
            }
        });
    });
}

function toggleSection(linkID, secArr) {
    var secs = $(secArr);
    secs.each(function() {
        var self = $(this);
        if ($(this).attr('data-id') != linkID) {
            setTimeout(function() {
                self.fadeOut(300);
                // footerPosition();
            }, 60);
        } else {
            setTimeout(function() {
                self.fadeIn(300);
                footerPosition();
            }, 60);
        }
    });
}


