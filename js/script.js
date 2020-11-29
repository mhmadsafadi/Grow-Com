$(function(){

    $(window).on('scroll', function(){
        var sc = $(window).scrollTop();
    });

    

    $('.my-progress span').each(function(){
        $(this).animate({
            width: $(this).attr('data-progress') + '%'
        }, 2000);
    });

    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    });
    

    
    $('.my-slider').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        mobileFirst: true
    });
    
});