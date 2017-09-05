// const http = require("http"),
//     jade = require("jade");

// var members = {
//     "AidanDai": 13,
//     "zp1996": 14,
//     "zhongjin": 14,
//     "lsgoSunshine": 14,
//     "GiantDwarf": 14,
//     "ll": 14,
//     "西北苏三": 14,
//     "zln": 15,
//     "lgc": 15
// };
// // http.createServer((req, res) => {
// //     res.writeHead(200, {
// //         "Content-Type": "text/html"
// //     });
// //     const html = jade.renderFile("src/jade/index.jade", {
// //         author: "zp1996",
// //         members: members,
// //         pretty: true
// //     });

// //     res.end(html);
// // }).listen(3000);
// // console.log("Server is on 3000");

// (function() {
//     const html = jade.renderFile("src/jade/index.jade", {
//         author: "zp1996",
//         members: members,
//         pretty: true
//     });
// })();


// // add by Ou yuan
// /**
//  * Designed by @Taras Shypka
//  * https://dribbble.com/Bugsster
//  * Coded by @Balaj Marius for @Designmodo
//  * http://mariusbalaj.com | http://designmodo.com
//  */

// var $poster = $('.poster'),
//     $shine = $('.shine'),
//     $layer = $('div[class*="layer-"]');

// $('.poster').on('mousemove', function(e) {
//     var w = $(this).width();
//     var h = $(this).height();
//     var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
//     var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
//     var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
//     console.log(direction)
//         // var w = $(window).width(), //window width
//         // h = $(window).height(), //window height
//     var offsetX = 0.5 - e.pageX / w, //cursor position X
//         offsetY = 0.5 - e.pageY / h, //cursor position Y
//         dy = e.pageY - h / 2, //@h/2 = center of poster
//         dx = e.pageX - w / 2, //@w/2 = center of poster
//         theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
//         angle = theta * 180 / Math.PI - 90, //convert rad in degrees
//         offsetPoster = $poster.data('offset'),
//         transformPoster = 'translateY(' + -offsetX * offsetPoster + 'px) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

//     //get angle between 0-360
//     if (angle < 0) {
//         angle = angle + 360;
//     }

//     //gradient angle and opacity
//     $shine.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + e.pageY / h * .5 + ') 0%,rgba(255,255,255,0) 80%)');

//     //poster transform
//     $poster.css('transform', transformPoster);

//     //parallax foreach layer
//     $layer.each(function() {
//         var $this = $(this),
//             offsetLayer = $this.data('offset') || 0,
//             transformLayer = 'translateX(' + offsetX * offsetLayer + 'px) translateY(' + offsetY * offsetLayer + 'px)';

//         $this.css('transform', transformLayer);
//     });

// });


// $(function() {
//     function move() {
//         $('.poster').on("mousemove", function(e) {
//             $this = $(this).e;
//             $ofx = e.offsetX;
//             $ofy = e.offsetY;
//             var x,
//                 y;
//             this.my = function() {
//                 x = $ofx;
//                 y = $ofy;
//                 console.log(y);
//             };
//             setTimeout(this.my, 300);
//             // console.log(y);
//         });
//     }
//     move();
//     $('.poster').on("mouseenter mouseleave", function(e) {
//         var oe = e || event;
//         var x = oe.offsetX;
//         var y = oe.offsetY;
//         var w = $(this).width(),
//             h = $(this).height(),
//             xpos = w / 2,
//             ypos = h / 2;
//         var angle = Math.atan((x - xpos) / (y - ypos)) * 180 / Math.PI;
//         if (angle > -45 && angle < 45 && y > ypos) {
//             direct = "down";
//         }
//         if (angle > -45 && angle < 45 && y < ypos) {
//             direct = "up";
//         }
//         if (((angle > -90 && angle < -45) || (angle > 45 && angle < 90)) && x > xpos) {
//             direct = "right";
//         }
//         if (((angle > -90 && angle < -45) || (angle > 45 && angle < 90)) && x < xpos) {
//             direct = "left";
//         }
//         move(e.type, direct)
//     });
// });
