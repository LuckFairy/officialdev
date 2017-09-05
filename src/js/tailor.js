
function setImgSection(containers) {
    var lists = $('.tab-ul li');
    var container = $(containers);
    var defaultImg = [];
    for (var i = 0; i < lists.length; i++) {
        defaultImg.push(lists.eq(i).find('a').children('img').attr('src'));
    }
    var last_nderline;
    defaultImg[5] = defaultImg[0].slice(0,-14) + '@12x.png';
    lists.each(function(index) {
        $(this).bind('click', function(event) {
            switch (index) {
                case 0:
                    set($(this),container);
                    lists.eq(1).find('a').children('img').attr('src',defaultImg[1])
                    lists.eq(2).find('a').children('img').attr('src',defaultImg[2])
                    lists.eq(3).find('a').children('img').attr('src',defaultImg[3])
                    lists.eq(4).find('a').children('img').attr('src',defaultImg[4])
                    break;
                case 1:
                    set($(this),container);
                    lists.eq(0).find('a').children('img').attr('src',defaultImg[5])
                    lists.eq(2).find('a').children('img').attr('src',defaultImg[2])
                    lists.eq(3).find('a').children('img').attr('src',defaultImg[3])
                    lists.eq(4).find('a').children('img').attr('src',defaultImg[4])
                    break;
                case 2:
                    set($(this),container);
                    lists.eq(1).find('a').children('img').attr('src',defaultImg[1])
                    lists.eq(0).find('a').children('img').attr('src',defaultImg[5])
                    lists.eq(3).find('a').children('img').attr('src',defaultImg[3])
                    lists.eq(4).find('a').children('img').attr('src',defaultImg[4])
                    break;
                case 3:
                    set($(this),container);
                    lists.eq(0).find('a').children('img').attr('src',defaultImg[5])
                    lists.eq(1).find('a').children('img').attr('src',defaultImg[1])
                    lists.eq(2).find('a').children('img').attr('src',defaultImg[2])
                    lists.eq(4).find('a').children('img').attr('src',defaultImg[4])
                    break;
                case 4:
                    set($(this),container);
                    lists.eq(0).find('a').children('img').attr('src',defaultImg[5])
                    lists.eq(1).find('a').children('img').attr('src',defaultImg[1])
                    lists.eq(2).find('a').children('img').attr('src',defaultImg[2])
                    lists.eq(3).find('a').children('img').attr('src',defaultImg[3])
                    break;
                default:
            }
            if (event.preventDefault) {
                event.preventDefault(); //支持DOM标准的浏览器
            } else {
                event.returnValue = false; //IE
            }
        });
    });
}


function set(ele,container) {
    var reg = /([^_]*)\@[^@]+$/;
    var linkId = $(ele).attr('data-id');
    var secArray = $(container);
    console.log(linkId);
    var $href = $(ele).find('a').children('img').attr('src');
    // 以下划线为匹配
    var search = $href.match(reg)[1];
    // 分离出当前被点击不包含'active'部分，用于默认不激活项的图片名
    var imgNum = search.slice(0, 1);
    // 当前被点击激活项img下划线之后的名称
    var activeImg = imgNum + "active";
    var activeImgUrl = $href.replace(search, activeImg);
    $(ele).find('a').addClass('active').children('img').attr('src', activeImgUrl);
    $(ele).siblings().find('a').removeClass('active');
    showSection(linkId, secArray)
}



function showSection(linkID, secArr) {
    var secs = $(secArr);
    secs.each(function() {
        var self = $(this);
        if ($(this).attr('data-id') != linkID) {
            setTimeout(function() {
                self.hide();
            }, 60);
        } else {
            setTimeout(function() {
                self.show();
            }, 60);
        }
    });
}