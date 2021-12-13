$(function(){
    $("#menu").click(function(){
        $(".a").slideToggle();
    });
});

$(window).resize(function(){
    if(window.innerWidth<=600){
        $('.a').hide();
    }else{
        $('.a').show();
    }
});