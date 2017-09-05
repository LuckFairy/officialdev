/**
 * 元素是否在可视区
 * visual.js
 * @authors Your Name (you@example.org)
 * @date    2017-05-31 11:45:25
 * @version $Id$
 */


// mui.ready(function() {
//     mui(document).on('swipeup', '#timeline', function() {
//         var rows = $('.mui-row');
//         $.each(rows, function(index, row) {
//             if (isElementInViewport(row)) {
//                 addClass(this, 'current');
//             }
//         });
//     });
// })
mui(document).on('swipeup', '#timeline', function() {
        var rows = $('.mui-row');
        $.each(rows, function(index, row) {
            if (isElementInViewport(row)) {
                addClass(this, 'current');
                // var imgs = this.find('img')
            }
        });
    });

// 元素是否可见
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}
