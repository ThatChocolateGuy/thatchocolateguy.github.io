$(document).ready(function () {
    // Define helper function
    $.js = function (el) {
        return $("[data-js=" + el + "]");
    };

    // Define carousel initialization
    function carousel() {
        $.js("timeline-carousel").slick({
            infinite: false,
            arrows: false,
            dots: true,
            autoplay: false,
            speed: 800,
            slidesToShow: 3,
            slidesToScroll: 2,
            accessibility: true,
            adaptiveHeight: true,
            edgeFriction: 0.1,
            // mobileFirst: true,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    },
                }
            ]
        });
    }

    // Initialize the carousel
    carousel();
});