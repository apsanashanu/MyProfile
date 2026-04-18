/* Ensure jQuery is loaded safely */
jQuery(document).ready(function ($) {

```
// Sticky navbar + scroll button
$(window).on("scroll", function () {
    if (window.scrollY > 20) {
        $(".navbar").addClass("sticky");
    } else {
        $(".navbar").removeClass("sticky");
    }

    if (window.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
    } else {
        $(".scroll-up-btn").removeClass("show");
    }
});

// Scroll to top
$(".scroll-up-btn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

// Smooth scroll
$(".navbar .menu li a").on("click", function () {
    $("html").css("scrollBehavior", "smooth");
});

// Toggle menu
$(".menu-btn").on("click", function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
});

// Typing animation (safe check)
if (typeof Typed !== "undefined") {
    new Typed(".typing", {
        strings: ["Quality Controller"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-2", {
        strings: ["Quality Controller"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
} else {
    console.warn("Typed.js not loaded");
}

// Owl Carousel (safe check)
if ($.fn.owlCarousel) {
    var owl = $(".carousel");

    owl.owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: false,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        },
        slideBy: 3
    });

    // Custom autoplay
    var autoplayInterval = setInterval(function () {
        owl.trigger("next.owl.carousel", [3]);
    }, 3000);

    // Pause on hover
    owl.on("mouseenter", function () {
        clearInterval(autoplayInterval);
    });

    // Resume on leave
    owl.on("mouseleave", function () {
        autoplayInterval = setInterval(function () {
            owl.trigger("next.owl.carousel", [3]);
        }, 3000);
    });

} else {
    console.warn("Owl Carousel not loaded");
}
```

});
