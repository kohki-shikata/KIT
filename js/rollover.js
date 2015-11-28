function rollover(){
    $("img[src*='_on']").addClass("current");

    $("img,input[type='image']").hover(function(){
        if ($(this).attr("src")){
            $(this).attr("src",$(this).attr("src").replace("_off.", "_on."));
        }
    },function(){
        if ($(this).attr("src") && !$(this).hasClass("current") ){
            $(this).attr("src",$(this).attr("src").replace("_on.", "_off."));
        }
    });
}