$(".panel").click(function () {
    removeActiveClass();
    $(this).toggleClass("panel-active");
})

$(".images").click(function(){
    removeActiveTile();
    $(this).toggleClass("title-active");
})


function removeActiveClass(){
    $(".panel").each(function(panel){
        $(this).removeClass("panel-active");
    })
}

function removeActiveTile(){
    $(".images").each(function(images){
        $(this).removeClass("title-active");
    })
}

