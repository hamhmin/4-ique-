$(function() {
    $('.col').mouseover(function() {
        $(this).css('z-index', '150');
        $('.shadow').stop().fadeIn(200);
    });
    
    $('.col').mouseout(function() {
        $(this).css('z-index', '50');
        $('.shadow').stop().fadeOut(100);
    });

});