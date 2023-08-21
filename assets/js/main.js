!(function (e) {
    "use strict";

    e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var a = e(this.hash);
            if ((a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")).length)
                return (
                    e("html, body").animate(
                        { scrollTop: a.offset().top - 60 },
                        1e3,
                        "easeInOutExpo"
                    ),
                    !1
                );
        }
    }),
        e(".js-scroll-trigger").click(function () {
            e(".navbar-collapse").collapse("hide");
        }),

        e("body").scrollspy({ target: "#nav", offset: 100 });

    function a() {
        if (100 < e("#nav").offset().top) {
            e("#nav").addClass("navbar-shrink");
            e(".navbar-brand").addClass("active");
            e(".nav-link").removeClass("text-white");
        } else {
            $(".home").addClass('active');
            e(".nav-link").addClass("text-white");
            e(".navbar-brand").removeClass("active");
            e("#nav").removeClass("navbar-shrink");
        }
    }
    a(), e(window).scroll(a);

    var nav = $('nav');
    var navHeight = nav.outerHeight();

    $('.navbar-toggler').on('click', function () {
        if (!$('#nav').hasClass('navbar-reduce')) {
            $('#nav').addClass('navbar-reduce');
        }
    })

    $(window).on('load', function () {
        // Preloader
        $("#body").show();
        if ($('#preloader').length) {
            setTimeout(
                function () {
                    $('#preloader').delay(100).fadeOut('slow', function () {
                        $(this).remove();
                    });
                }, 1000);
        }
    });


    $('a[href="#"]').on('click', function (event) {
        return;
    });


    if ($.isFunction($.fn.fluidbox)) {
        $('a').fluidbox();
    }


})(jQuery);

const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
const numBalls = 50;
const balls = [];
let theme = 0;

AOS.init();

function isExists(elem) {
    if ($(elem).length > 0) {
        return true;
    }
    return false;
}

for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;
    balls.push(ball);
    document.body.append(ball);
}

balls.forEach((el, i, ra) => {
    let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
    };

    let anim = el.animate(
        [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
            duration: (Math.random() + 1) * 2000,
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );
});

function darkMode() {
    transition();
    setTimeout(function () {
        changeTheme();
    }, 500);
}

function transition() {
    $("#nav").stop().fadeOut(700);
    $("#main").stop().fadeOut(700);
    var layerClass = ".left-layer";
    var layers = document.querySelectorAll(layerClass);
    for (const layer of layers) {
        layer.classList.toggle("active");
    }
}

function changeTheme() {
    $("#nav").stop().fadeIn(500);
    $("#main").stop().fadeIn(500);
    if (theme == 0) {
        $("#mode").html(`<link href="assets/css/template-dark.css" rel="stylesheet">`);
        $("#btnThemeText").text("Dark");
        theme = 1;
    } else {
        $("#mode").html(`<link href="assets/css/template-light.css" rel="stylesheet">`);
        $("#btnThemeText").text("Light");
        theme = 0;
    }
}

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $(".button-top").stop().fadeIn(500);
    } else {
        $(".button-top").stop().fadeOut(500);
    }
}

function topFunction() {
    $(".home").trigger("click");
}

filterSelection("all")
function filterSelection(className) {
    $(".portfolio-item").fadeOut(300);
    if (className == "all") {
        setTimeout(function () {
            $(".portfolio-item").fadeIn(300);
        }, 300);
        return;
    } else {
        setTimeout(function () {
            $(`.${className}`).fadeIn(500);
        }, 300);
    }
}

$(".button-filter").each(function () {
    $(this).click(function () {
        $(".button-filter-active").removeClass("button-filter-active");
        $(this).addClass("button-filter-active");
    });
});