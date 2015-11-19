$(":checkbox").on('click', function(){
     $(this).parent().toggleClass("checked");
});

$(".optContainer").hide();

$(".showSelect").click(function () {
    $(this).toggleClass("open").siblings("span").removeClass("open");
    $($(this).data("target")).fadeToggle('fast').siblings("div.optContainer").hide();
});
$(".changes button").click(function () {
    var myid = $(this).parent().parent().attr('id');
    $('#'+myid+'Btn').click();
});