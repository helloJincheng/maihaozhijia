// 搜索


$(function () {

    var nsi=1;
    function topover(){
        $("#topdiv").bind('mouseenter',function () {
            this.show();
        })
    }
    function topout(){
        $("#topdiv").hide();
    }
    function topjconc(x,y){
        nsi=x;
        $("#topnwd").html(y);
        topout();
    }
    
    
    
    
    
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
