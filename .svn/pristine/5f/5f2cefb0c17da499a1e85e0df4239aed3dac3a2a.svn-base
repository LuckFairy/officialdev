/**
 * 装配元素
 * assembly.js
 * @authors beyondouyuan (beyondouyuan.github.io)
 * @date    2017-05-23 17:43:14
 * @version $1.0.0$
 */

/**
 * params
 * createCardFragment：返回所创建虚拟节点对象
 * assemblyContainer：创建虚拟节点对象并组合装配
 * name：关键字名称
 **/

// <ul id="progressbarBtn1" class="mui-pagination"><li><a href="javascript:;" data-progress="10">10%</a></li><li><a href="javascript:;" data-progress="30">30%</a></li><li><a href="javascript:;" data-progress="50">50%</a></li><li><a href="javascript:;" data-progress="100">100%</a></li></ul>
var createCardFragment = function($datas, $flag) {
    if ($flag && $flag == 1) {
        // 行业服务，支取第一条目
        return assemblyContainer($datas, 1)
    } else if ($flag && $flag == 2) {
        // 行业服务，取第一条目外的所有数据
        return assemblyContainer($datas, 2)
    } else {
        return assemblyContainer($datas)
    }
};

// 元素容器装饰器
var assemblyContainer = function($datas, $flag) {
    var fragment = document.createDocumentFragment();
    var len = $datas.length;
    // mui-card
    var muiCard,
        // mui-header
        muiHeader,
        // img
        muiHeaderImg,
        // mui-media-body
        muiMediaBody,

        // mui-card-content
        muiCardContent,
        // mui-card-content-inner
        muiCardContentInner,
        // content-img
        muiContentImg,
        // 描述
        // 折叠ul
        muiView,
        // 折叠li
        muiViewCell,
        // 优势
        muiFViewCell,
        // 地图
        muiMapCell,
        // 进度条
        muiProgressbar,
        muiProgressbarCell;

    mui.each($datas, function(index, $data) {
        if ($flag && $flag == 1) {
            if (index >= $flag) {
                return;
            }
        }
        if ($flag && $flag == 2) {
            if (index < 1) {
                return;
            }
        }
        // 卡片视图容器
        muiCard = document.createElement('div');
        muiCard.className = 'mui-card';
        // 卡片视图头部小标题以及图片
        muiHeader = document.createElement('div');
        muiHeader.className = 'mui-card-header mui-card-media';
        muiHeaderImg = document.createElement('img');
        muiHeaderImg.setAttribute('data-lazyload', $data.proImg);
        muiMediaBody = document.createElement('div');
        muiMediaBody.className = 'mui-media-body';
        muiMediaBody.innerHTML = $data.proName + '<p>Posted by 广州合利宝支付科技有限公司</p></div>';
        muiHeader.appendChild(muiHeaderImg);
        muiHeader.appendChild(muiMediaBody);
        // 卡片视图内容主体外层容器
        muiCardContent = document.createElement('div');
        muiCardContent.className = 'mui-card-content';
        // 卡片视图内容主体内层容器
        muiCardContentInner = document.createElement('div');
        muiCardContentInner.className = 'mui-card-content-inner';
        // 卡片视图内容主体图片
        muiContentImg = document.createElement('img');
        muiContentImg.setAttribute('data-lazyload', $data.proImg);
        muiContentImg.setAttribute('width', '100% ');
        muiContentImg.setAttribute('alt', $data.proName);
        muiCardContentInner.appendChild(muiContentImg);
        // 简介内容遍历
//      var $intros = $data.intros;
        var intros = $data.addrArr;
        var $introBox = '';
//      mui.each($intros, function(index, intros) {
	if(intros.faxTel.length==0){
		$introBox += '<p>' + intros.adrr +'</br>'+intros.coding+'</br>'+intros.tel+'</br>'+intros.hotTel+'</br>'+intros.meil+ '<br /></p>';
	}else{
		
		$introBox += '<p>' + intros.adrr +'</br>'+intros.coding+'</br>'+intros.tel+'</br>'+intros.faxTel+'</br>'+intros.hotTel+'</br>'+intros.meil+ '<br /></p>';
	}
//      });
        // 简介内容
        muiView = document.createElement('ul');
        muiView.className = 'mui-table-view';
        muiViewCell = document.createElement('li');
        muiViewCell.className = 'mui-table-view-cell mui-collapse mui-active';
        muiViewCell.innerHTML = '<a class="mui-navigate-right" href="#">' + $data.proName + '简介</a><div class="mui-collapse-content">' + $introBox + '</div>';
        muiView.appendChild(muiViewCell);
        if ($data.progressbar) {
            var $progressbar = $data.progressbar;
            var $progressbarBox = '';
            muiProgressbar = document.createElement('ul');
            muiProgressbar.className = 'mui-table-view';
            muiProgressbarCell = document.createElement('li');
            muiProgressbarCell.className = 'mui-table-view-cell mui-collapse';
            mui.each($progressbar, function(index, progressbar) {
                $progressbarBox += '<div class="mui-row timeline-block line-timeline-block">'+
                        '<div class="mui-col-sm-5 mui-col-xs-5 time-circle line-time-circle">'+
                            '<div class="timeline-img">'+
                                '<a href="#">'+ progressbar.progress.title +'</a>'
                            +'</div>'
                        +'</div>'+
                        '<div class="mui-col-sm-7 mui-col-xs-7 vertical-line line-vertical-line">'+
                            '<div class="mui-card">'+
                                '<div class="mui-card-header mui-card-media">'+
                                    '<img data-lazyload="'+ progressbar.progress.img +'" />'+
                                    '<div class="mui-media-body">'+
                                        '<div><p>'+ progressbar.progress.content +'</p></div>'
                                    +'</div>'
                                +'</div>'+
                                '<div class="mui-card-content">'+
                                    '<div class="mui-card-content-inner">'+
                                        '<img data-lazyload="'+ progressbar.progress.img +'" alt="" width="100%" />'+
                                        '<p>'+ progressbar.progress.content +'</p>'
                                    +'</div>'
                                +'</div>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
            });
            muiProgressbarCell.innerHTML = '<a class="mui-navigate-right" href="#">入网流程</a>'+
            '<div class="mui-collapse-content" style="background-color: transparent;">'+
                '<div id="timeline" class="timeline-container" >'+ $progressbarBox
                +'</div>'
            +'</div>';
            muiView.appendChild(muiProgressbarCell);
        }
        if ($data.features) {
            // 优势特点遍历
            var $features = $data.features;
            var $featureBox = '';
            mui.each($features, function(index, features) {
                $featureBox += '<li class="mui-table-view-cell mui-media inner-mui-table-view-customer"><a href="#" class="wrap-box"><img class="mui-media-object mui-pull-left" data-lazyload="' + features.feature.img + '"/><div class="mui-media-body">' + features.feature.title + '<p>' + features.feature.content + '</p></div></a></li>';
            });
            // 优势内容
            muiFViewCell = document.createElement('li');
            muiFViewCell.className = 'mui-table-view-cell mui-collapse';
            muiFViewCell.innerHTML = '<a class="mui-navigate-right" href="#">' + $data.proName + '优势</a><div class="mui-collapse-content"><ul class="mui-table-view">' + $featureBox + '</ul></div>';
            muiView.appendChild(muiFViewCell);
        }
        // 插入地图
        if ($data.mapID) {
            muiMapCell = document.createElement('li');
            muiMapCell.className = 'mui-table-view-cell mui-collapse map-view';
            muiMapCell.setAttribute('data-map', $data.mapID)
            muiMapCell.innerHTML = '<a class="mui-navigate-right" href="#">点击查看地图</a><div class="mui-collapse-content"><div class="map-container" id="' + $data.mapID + '"></div></div>';
            muiView.appendChild(muiMapCell);
        }
        muiCardContentInner.appendChild(muiView);
        muiCardContent.appendChild(muiCardContentInner);
        muiCard.appendChild(muiHeader);
        muiCard.appendChild(muiCardContent);
        fragment.appendChild(muiCard);
    });
    return fragment;
};
