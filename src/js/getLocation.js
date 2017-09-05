/*
 * @Author: Irving
 * @Date:   2017-02-20 23:34:06
 * @Last Modified by:   Irving
 * @Last Modified time: 2017-02-21 00:11:49
 */


$(function() {
    toggleMapLink();
    // 点击文档时无需取消默认事件，否则其他地方的点击事件将全部被取消
    $(document).bind("click", function() {
        var target = $(event.target);
        if (target.closest('.map-container,.map-link').length === 0) {
            $('.map-container').fadeOut(400);
        }
    });
});

var lonArr1 = 113.3262611464,
    latArr1 = 23.1238397108,
    contArr1 = '亲<br>这里是越秀金融大厦';
var lonArr2 = 113.933652,
    latArr2 = 22.51731,
    contArr2 = '亲<br>这里是中洲控股金融中心';
var lonArr3 = 121.434353,
    latArr3 = 31.171084,
    contArr3 = '亲<br>这里是航天大厦南楼';
var lonArr4 = 116.463577,
    latArr4 = 39.921328,
    contArr4 = '亲<br>这里是安联大厦';
function toggleMapLink() {
    var long,
        lat,
        cont;
    $('.map-link').bind('click', function(event) {
        var dataRel = $(this).attr('data-rel');
        $('.map-container').toggle();
        if (dataRel == 'guangzhou') {
            long = lonArr1;
            lat = latArr1;
            cont = contArr1;
            getGuangzhou('container', long, lat, cont);
        }
        if (dataRel == 'shenzhen') {
            long = lonArr2;
            lat = latArr2;
            cont = contArr2;
            getGuangzhou('container', long, lat, cont);
        }
        if (dataRel == 'shanghai') {
            long = lonArr3;
            lat = latArr3;
            cont = contArr3;
            getGuangzhou('container', long, lat, cont);
        }
        if (dataRel == 'beijing') {
            long = lonArr4;
            lat = latArr4;
            cont = contArr4;
            getGuangzhou('container', long, lat, cont);
        }
        if (event.preventDefault) {
            event.preventDefault(); //支持DOM标准的浏览器
        } else {
            event.returnValue = false; //IE
        }
    });
}
// longitude:经度
// latitude:纬度
// mapID:map容器
function getGuangzhou(mapID, longitude, latitude, content) {
    var map = new AMap.Map(mapID, {
        resizeEnable: true,
        mapStyle: 'normal',
        zoom: 1,
        center: [longitude, latitude],
        isHotspot: true,
        showButton: true
    });

    AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.OverView', 'AMap.MapType', 'AMap.Geolocation'],
        function() {
            map.addControl(new AMap.ToolBar());

            map.addControl(new AMap.Scale());

            map.addControl(new AMap.OverView({
                isOpen: true
            }));

            map.addControl(new AMap.MapType());

            map.addControl(new AMap.Geolocation());
        });



    var marker = new AMap.Marker({
        position: [longitude, latitude]
    });
    marker.setMap(map);
    var circle = new AMap.Circle({
        center: [longitude, latitude],
        radius: 100,
        fillOpacity: 0.2,
        strokeWeight: 1
    })
    circle.setMap(map);
    map.setFitView()
    var info = new AMap.InfoWindow({
        content: content,
        offset: new AMap.Pixel(0, -28)
    })
    info.open(map, marker.getPosition());

    map.plugin(["AMap.ToolBar"], function() {
        map.addControl(new AMap.ToolBar());
    });
    if (location.href.indexOf('&guide=1') !== -1) {
        map.setStatus({ scrollWheel: false })
    }
}
