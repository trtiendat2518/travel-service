$(document).ready(function () {
    // responsive menu
    $('.hamburger-menu').click(function (to) {
        $('.hamburger-menu span').toggleClass('current');
        $(".top-header-right").toggleClass('open col-md-12 col-12');
    })

    $('.close-menu').click(function () {
        $(".top-header-right").removeClass('open col-md-12 col-12');
    })

    $("li.nav-item > a.nav-link").on("click", function (e) {
        e.preventDefault();

    });

    $(window).resize(function () {

        var flag = 0;
        var win_size = $(document).width();

        if (win_size > 974) {
            flag = 1;
        }

        // console.log(win_size);
        if ((flag == 1) && ($(".top-header-right").hasClass('open'))) {
            $(".top-header-right").removeClass("open");
            $('.hamburger-menu span').removeClass("current");
        }

    })

    //    text animation
    var spanText = function spanText(text) {
        var string = text.innerText;
        var spaned = '';
        for (var i = 0; i < string.length; i++) {
            if (string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
            else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
        }
        text.innerHTML = spaned;
    }

    var headline = document.querySelector("h4");
    spanText(headline);
    let animations = document.querySelectorAll('.amimate-caption-title');
    animations.forEach(animation => {
        let letters = animation.querySelectorAll('span');
        letters.forEach((letter, i) => {
            letter.style.animationDelay = (i * 0.1) + 's';
        })
    })

    // end text animate

    /* search box */
    $('.search-show').click(function () {
        $('.form-search').addClass('active')
    })

    // remove class 'active' on all element
    $('.hide').click(function () {
        $('*').removeClass('active')
    })

    /* form show */
    $('#address').click(function () {
        $('.address-show').addClass('active')
    })

    $('#drop-address').click(function () {
        $('.drop-address-show').addClass('active')
    })

    $('.show-list-city').click(function () {
        $('.form-list-city').toggleClass('active')
    })



    // $('#time').click(function () {
    //     $('.time-show').addClass('active')
    // })


    $(function () {
        $('input[name="daterange"]').daterangepicker({

        }, function (start, end, label) {
            console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        });

    });

    $('.date-active').click(function () {
        $('.date-show').addClass('active')
        // alert("ok");
    });


})