/* Header Functionality */
// Header Transitions
let oldValue = 0;
let newValue = 0;
window.addEventListener("scroll", function (e) {
    if (scrollY >= "100") {
        jQuery(".header").addClass("header--stick");
    } else {
        jQuery(".header").removeClass("header--stick");
    }
    newValue = window.pageYOffset;
    if (oldValue < newValue && scrollY >= "80") {
        jQuery(".header").addClass("header--hide");
    } else if (oldValue > newValue) {
        jQuery(".header").removeClass("header--hide");
    }
    oldValue = newValue;
});
// Main Menu
jQuery(document).on("click", ".menubtn button", function (e) {
    jQuery(".navigation").toggleClass("open");
    jQuery(".menubtn button").toggleClass("open");
    jQuery("body").toggleClass("hide-overflow");
    jQuery(".modalbox__overlay").toggleClass("active");
});
/*  */

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