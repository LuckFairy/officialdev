$(function() {
	
    var btn = $('.merchant');
    var dropdown = $('.dropdown');
    btn.bind('click', function(event) {
        dropdown.slideToggle(600);
        if (event.preventDefault) {
            event.preventDefault(); //支持DOM标准的浏览器
        } else {
            event.returnValue = false; //IE
        }
    });
})
