$(document).ready(function () {
    // Sticky navbar on scroll
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up button
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll on menu click
    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle navbar menu
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing animations
    var typed = new Typed(".typing", {
        strings: ["Quality Controller"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Quality Controller"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl Carousel initialization
    var owl = $(".carousel");
    owl.owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: false,         // Disable default autoplay
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        },
        slideBy: 3              // Slide 3 items at a time
    });

    // Custom autoplay: move 3 items every 3 seconds
    var autoplayInterval = setInterval(function () {
        owl.trigger('next.owl.carousel', [3]);
    }, 3000);

    // Pause on hover
    owl.on('mouseenter', function () {
        clearInterval(autoplayInterval);
    });

    // Resume on mouse leave
    owl.on('mouseleave', function () {
        autoplayInterval = setInterval(function () {
            owl.trigger('next.owl.carousel', [3]);
        }, 3000);
    });
});
