$(document).ready(function () {
    $(".header-p span").each(function () {
        $(this).mouseover(function () {
            $(this).addClass("S");
            setTimeout(function(){
                $(this).removeClass("S");
            }.bind(this),1000
            );
        });
    });
});