
$(function(){
    $('.menu').mouseenter(function(){
        $(".sub, .subListBack").stop().slideDown(200);
    });

    $('.menu').mouseleave(function(){
        $(".sub, .subListBack").stop().slideUp(200);
    });

    $('.ham').click(function(){
        $('.ham').toggleClass('close');
        $('.peti').toggleClass('close');
        $('.fullMenu').toggleClass('active');
        $('#header').attr({'border-bottom-color':'#f00'});
        $('body').toggleClass('scrollLock')

        if($('.ham').hasClass('close')){
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }; 

    });
    

});

$(window).on("wheel", function (event){    

    if (event.originalEvent.deltaY > 0) {

        $('#header').addClass('headerUP');
        // wheel up
    }
    else {
        $('#header').removeClass('headerUP');
        // wheel down
    }
});
