$(document).ready(function(){

    $('.carousel').carousel({
        interval:5000
    });

    $('.option-icon').click(function(){
        $('.options').fadeToggle();
    })

    var colorLi = $('.option-box ul li');

    colorLi
    .eq(0).css('backgroundColor','#ec1d1d').end()
    .eq(1).css('backgroundColor','orange').end()
    .eq(2).css('backgroundColor','blue').end()
    .eq(3).css('backgroundColor','purple');

    colorLi.click(function(){
        $('link[href*="theme"]').attr("href",$(this).attr("data-value"))
    });

    var scrollButton = $('.scroll-top');
    $(window).scroll(function()
    {
        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
    });

    scrollButton.click(function(){
        $('html,body').animate({scrollTop:0},1000);
    })

});


// Loading Screen ...
$(window).on('load',function(){
    $('body').css("overflow","auto");
    $('.loading-screen').fadeOut(1000);
})




