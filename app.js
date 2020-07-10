$(function () {
    // === Fixed Header ===
    let header = $('#header');
    let about = $('#about');
    let aboutH = about.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function () {
        aboutH = about.innerHeight();
        scrollPos = $(this).scrollTop();
        if (scrollPos > aboutH) {
            header.addClass('fixed');

        } else {

            header.removeClass('fixed');
        }

    });
    // === / Fixed Header

    // === Smooth scroll ===
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $('html, body').animate({
            scrollTop: elementOffset - 90
        }, 700);
    });
    // === / Smooth scroll ===

    // === Nav Togle ===
    let nav = $('#nav');
    let navToggle = $("#navToggle");

        navToggle.on("click", function(event){
        event.preventDefault();
        nav.toggleClass("show");
    });

});