$(function() {
    toggleTab('.tab-list', '.section-wrapper-ui');
});

function toggleTab(ele, sections) {
    var list = $(ele),
        tab = list.children('.tab-item');
    tab.each(function() {
        $(this).bind('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
            var rel = $(this).attr('data-rel');
            console.log(rel);
            showSection(rel, sections);
        });
    });
}


function showSection(linkRel, secArr) {
    var secs = $(secArr);
    secs.each(function() {
        var self = $(this);
        if ($(this).attr('data-rel') != linkRel) {
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
