importScripts("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.js")

$.js = function (el) {
    return $("[data-js=" + el + "]");
};

function carousel() {
    $.js("timeline-carousel").slick({
        infinite: false,
        arrows: false,
        dots: true,
        autoplay: false,
        speed: 1100,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}

carousel(); 