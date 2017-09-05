$(function() {
    doHeadrom();
});

function doHeadrom() {
    $('html').stop(false,true);
    $('body').stop(false,true);
    var elem = document.querySelector('header');
    var headroom = new Headroom(elem, {
        "tolerance": {
            up: 120,
            down: 0
        },
        "classes": {
            "initial": "headroom",
            "pinned": "headroom--pinned",
            "unpinned": "headroom--unpinned"
        }
    });
    headroom.init();
}
