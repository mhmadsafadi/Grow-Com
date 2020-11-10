$(function(){

    $(window).on('scroll', function(){
        var sc = $(window).scrollTop();
    });

    

    $('.my-progress span').each(function(){
        $(this).animate({
            width: $(this).attr('data-progress') + '%'
        }, 2000);
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

    $(".slider").slick({

        autoplay: true,
        dots: false,
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            return '<a><img src="'+thumb+'"></a>';
        },
    
        responsive: [{ 
            breakpoint: 500,
            settings: {
                dots: false,
                arrows: false,
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 2
            } 
        }]
    });
    
});