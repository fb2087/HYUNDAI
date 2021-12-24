$(function(){
    $('.blue:nth-of-type(1)').click(function(){
        $(".iblue").fadeIn();
        $(".igold").hide();
        $(".isilver").hide();
    });
    $('.gold:nth-of-type(1)').click(function(){
        $(".igold").fadeIn();
        $(".iblue").hide();
        $(".isilver").hide();
    });
    $('.silver:nth-of-type(1)').click(function(){
        $(".isilver").fadeIn();
        $(".iblue").hide();
        $(".igold").hide();
    });
    
});