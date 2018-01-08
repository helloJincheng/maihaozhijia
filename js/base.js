
// 搜索
var nsi=1;
function topover(){
    $("#topdiv").show();
}
function topout(){
    $("#topdiv").hide();
}
function topjconc(x,y){
    nsi=x;
    $("#topnwd").html(y);
    topout();
}