$(function(){
    $('.black1:nth-of-type(1)').click(function(){
        $(".black2").show();
        $(".cgrey2").hide();


        $(".black").fadeIn();
        $(".cgrey").hide();
        $(".ggrey").hide();
        $(".sgrey").hide();
        $(".white").hide();
        $(".gold").hide();
        $(".blue").hide();
        $(".olive").hide();
        $(".dgreen").hide();
    });
    $('.cgrey1:nth-of-type(2)').click(function(){
        $(".cgrey2").show();
        $(".black2").hide();

        
        $(".cgrey").fadeIn();
        $(".black").hide();
        $(".ggrey").hide();
        $(".sgrey").hide();
        $(".white").hide();
        $(".gold").hide();
        $(".blue").hide();
        $(".olive").hide();
        $(".dgreen").hide();
    });
    $('.silver:nth-of-type()').click(function(){
        $(".isilver").fadeIn();
        $(".iblue").hide();
        $(".igold").hide();
    });
    
});