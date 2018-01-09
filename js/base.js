var nsi=1;
function topover(){
    $("#topdiv").show();
};
function topout(){
    $("#topdiv").hide();
};
function topjconc(x,y){
    nsi=x;
    $("#topnwd").html(y);
    topout();
};

$(function () {
    var mySwiper = new Swiper ('#banner', {
        loop: true,
        autoplay: 5000,
        pagination: '.swiper-pagination',
        paginationClickable :true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
    $(".bull-bot .type-name").bind('mouseenter', function () {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $(this).parent().siblings(".type-1").eq(index).show().siblings(".type-1").hide();
    });

    $(".pro-list>li").hover(function () {
        $(this).addClass("choosed").siblings().removeClass("choosed");
    });

    $(".btn-sign").hover(function() {
        var str = $(this).attr("_title");
        var color = $(this).attr("color");
        var that = this;
        layer.tips(str, that, {
            tips: [1, color]
        });
    }, function() {
        layer.closeAll('tips');
    });
})
