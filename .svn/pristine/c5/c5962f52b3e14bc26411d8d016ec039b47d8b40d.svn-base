/*
 * @Author: Irving
 * @Date:   2017-02-20 23:34:06
 * @Last Modified by:   Irving
 * @Last Modified time: 2017-02-21 00:11:49
 */


/**
 * params：参数列表
 * latPoint：纬度
 * lonPoint：经度
 **/

var getLocation = function(mapID, posArray) {
    if (navigator.geolocation) {
        var map = new BMap.Map(mapID, { minZoom: 14, maxZoom: 19 });
        var point = new BMap.Point(posArray.lonPoint, posArray.latPoint);
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.centerAndZoom(point, 18);
        map.enableScrollWheelZoom(); //启用滚轮放大缩小
        map.setCurrentCity(posArray.city); // 设置地图显示的城市 此项是必须设置的
        var marker = new BMap.Marker(point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        // 圆圈范围
        var circle = new BMap.Circle(point, 120, { fillColor: "#3BE59D", strokeWeight: 1, fillOpacity: 0.2, strokeOpacity: 0.3 });
        map.addOverlay(circle);
        // 信息窗口
        var options = {
            width: 150, // 信息窗口宽度
            height: 70, // 信息窗口高度
            title: posArray.title, // 信息窗口标题
            enableMessage: true, //设置允许信息窗发送短息
            message: posArray.msg
        };
        var infoWindow = new BMap.InfoWindow(posArray.msg, options); // 创建信息窗口对象
        marker.addEventListener("click", function() {
            map.openInfoWindow(infoWindow, point); //开启信息窗口
        });
        // 强制居中
        map.panBy(205,165);
        return;
    } else {
        alert("你的浏览器不支持获取地理位置！");
    }
};
// 异步加载地图
function loadJScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=GVAs4fifyxzAONaIbauZXUIRq26SMa3k&callback=init(guangzhou, posArray.beijing)";
    document.body.appendChild(script);
}
// 初始化处理程序
function init(mapID, mapArr) {
    var map = new BMap.Map(mapID, { minZoom: 14, maxZoom: 19 }); // 创建Map实例
    var point = new BMap.Point(mapArr.lonPost, mapArr.latPost); // 创建点坐标
    map.centerAndZoom(point, 14);
    map.enableScrollWheelZoom(); //启用滚轮放大缩小
    map.setCurrentCity("越秀金融大厦"); // 设置地图显示的城市 此项是必须设置的
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

    var circle = new BMap.Circle(point, 100, { fillColor: "#3BE59D", strokeWeight: 1, fillOpacity: 0.2, strokeOpacity: 0.3 });
    map.addOverlay(circle);
    var options = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: "合利宝广州总部", // 信息窗口标题
        enableMessage: true, //设置允许信息窗发送短息
        message: "亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
    }
    var infoWindow = new BMap.InfoWindow("地址：广州市天河区珠江东路28号", options); // 创建信息窗口对象
    marker.addEventListener("click", function() {
        map.openInfoWindow(infoWindow, point); //开启信息窗口
    });
}
// window.onload = loadJScript; //异步加载地图
