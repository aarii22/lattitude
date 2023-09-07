jQuery(function () {
    /* Testimonial Slider */
    jQuery(".slider--testimonial").slick({
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            },
        },
        ],
    });
    /*  */
    /* Jobs Slider */
    jQuery(".slider--jobs").slick({
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            },
        },
        ],
    });
    /*  */
});