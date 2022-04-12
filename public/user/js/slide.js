$(document).ready(function () {
    var owl = $('.owl-carousel');
    $('.owl-banner').owlCarousel({
        loop: true,
        // autoplay: true,
        animateOut: 'slideOutDown',
        margin: 0,
        nav: true,
        navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
        items: 1,
        dots: false

    })

    // owl.on('translate.owl.carousel', function (event) {

    //     $("h4.amimate-caption-title").addClass('fadeOutRightBig');
    // })

    // owl.on('translated.owl.carousel', function (event) {
    //     $("h4.amimate-caption-title").removeClass('fadeOutRightBig');
    // })

    $('.prodrive-content').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        nav: false,
        dots: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    nav: false,
                    // centerPadding: '40px',
                    slidesToShow: 2,
                    lidesToScroll: 1,
                    // centerMode: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    nav: false,
                    // centerMode: false,
                    // centerPadding: '40px',
                    slidesToShow: 1,
                    lidesToScroll: 1,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    arrows: false,
                    // centerMode: false,
                    // centerPadding: '40px',
                    slidesToShow: 1,
                    lidesToScroll: 1,
                }
            }]
    });

    $('.Articles-content').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        cssEase: 'linear',
        speed: 1200,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,

                    // centerPadding: '40px',
                    slidesToShow: 2,
                    lidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,

                    // centerPadding: '40px',
                    slidesToShow: 2,
                    lidesToScroll: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    arrows: false,

                    // centerPadding: '40px',
                    slidesToShow: 1,
                    lidesToScroll: 1,
                }
            }]

    });


})