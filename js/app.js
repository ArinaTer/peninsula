document.addEventListener("DOMContentLoaded", function () {
    window.onload = function () {

        GSAPInit();

        SmoothScroll({
            animationTime: 800,
            stepSize: 80,
            accelerationDelta: 30,
            accelerationMax: 2,
            keyboardSupport: true,
            arrowScroll: 50,
            touchpadSupport: true,
        });
    }
});

// loading

window.addEventListener('load', function () {
    setTimeout(function () {

        document.getElementById('loading').style.opacity = '0';
        setTimeout(function () {
            document.getElementById('loading').style.display = 'none';
        }, 100);

    }, 800);
});

function sliderGSAP(sliderOffsetX = 0) {

}

// navbar color

function toDark(navbar) {
    navbar.classList.add('navbar-dark');
    navbar.classList.remove('navbar-light');
}

function toLight(navbar) {
    navbar.classList.add('navbar-light');
    navbar.classList.remove('navbar-dark');
}


function GSAPInit() {
    ScrollTrigger.matchMedia({

        "all": function () {

            // navbar

            const navbar = document.querySelector('.navbar');

            gsap.registerPlugin(ScrollTrigger);

            gsap.utils.toArray(".dark").forEach((dark) => {
                gsap.to('.navbar', {
                    scrollTrigger: {
                        trigger: dark,
                        start: "top top",
                        end: "bottom top",
                        onEnter: () => {
                            toDark(navbar);
                        },
                        onLeave: () => {
                            toLight(navbar);
                        },
                        onEnterBack: () => {
                            toDark(navbar);
                        },
                        onLeaveBack: () => {
                            toLight(navbar);
                        },
                    },
                });
            });

            sliderGSAP(300);

            // a href

            const anchors = document.querySelectorAll('a[href*="#"]')

            for (let anchor of anchors) {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault()

                    const blockID = anchor.getAttribute('href').substr(1)

                    document.getElementById(blockID).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })
                })
            }

            //paralax header

            // let bg = document.querySelectorAll('.building');
            // for (let i = 0; i < bg.length; i++) {
            //     window.addEventListener('mousemove', function (e) {
            //         let x = e.clientX / window.innerWidth;
            //         let y = e.clientY / window.innerHeight;
            //         bg[i].style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
            //     });
            // }

            // title text animation

            let mainTitle = gsap.utils.toArray(".main-title");
            let display1 = gsap.utils.toArray(" .display-1");
            let display2 = gsap.utils.toArray(".display-2");
            let mainText = gsap.utils.toArray(".main-text,.headline__white,.headline__black,.lead");
            let animOpacity = gsap.utils.toArray(".disposition,.download__brouchure,.enjoy__ul");

            const headerContetn = document.querySelectorAll('.header__content,.section__content');


            headerContetn.forEach((el) => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    }

                }).fromTo(el,
                    { y: 50 },
                    { y: -50 }
                )
            });


            mainTitle.forEach(elem => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: elem,
                        start: "top +=700",
                    }
                }).from(elem,
                    {
                        duration: 1,
                        y: innerHeight * -.2,
                        opacity: 0,
                        scrub: true,
                    })
            })
            display1.forEach(elem => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: elem,
                        start: "top +=300",
                    }
                }).from(elem,
                    {
                        duration: 1,
                        y: innerHeight * -.2,
                        scrub: true,
                        opacity: 0
                    })
            })
            display2.forEach(elem => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: elem,
                        start: "top +=700",
                    }
                }).from(elem,
                    {
                        duration: 1,
                        x: innerHeight * -.5,
                        scrub: true,
                        opacity: 0
                    })
            })
            mainText.forEach(elem => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: elem,
                        start: "top +=700",
                    }
                }).from(elem,
                    {
                        duration: 1,
                        y: 100,
                        opacity: 0,
                        scrub: true,
                    })
            })
            animOpacity.forEach(elem => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: elem,
                        start: "top +=700",
                    }
                }).from(elem,
                    {
                        duration: 1,
                        y: 100,
                        opacity: 0,
                        scrub: true,
                    })
            })

            // apartament animation desktop

            const order1 = document.querySelectorAll('.apartments__position_left');
            const order2 = document.querySelectorAll('.apartments__position_right');

            order1.forEach((el) => {
                gsap.from(el, 1, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom",
                    },
                    x: -100,
                    opacity: 0
                })
            });

            order2.forEach((el) => {
                gsap.from(el, 1, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom",
                    },
                    x: 100,
                    opacity: 0
                })
            });

        },
        "(min-width: 992px)": function () {

            // apartament animation mobile

            const order1 = document.querySelectorAll('.apartments__position_left');
            const order2 = document.querySelectorAll('.apartments__position_right');

            order1.forEach((el) => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    }
                }).fromTo(el,
                    {x: -100},
                    {x: 0}
                );
            });

            order2.forEach((el) => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    }
                }).fromTo(el,
                    {x: 100},
                    {x: 0}
                )
            });

            // interior slide

            let sections = gsap.utils.toArray(".interior__slide");

            gsap.to(sections, {
                xPercent: -38 * (sections.length - 1),
                x: 100,
                ease: "none",
                scrollTrigger: {
                    trigger: ".interior__slider",
                    pin: '#scroll-slide',
                    scrub: 2,
                    snap: 1 / (sections.length - 1),
                    start: "top 30%",
                    end: "+=2000",
                }
            });

        },

    });

    // header animation

    // const headerTl = gsap.timeline({
    //     onComplete: headerRevert
    // });
    // const splitHeader = new SplitText(".header__title", {
    //     type: "chars"
    // });
    // if (navigator.userAgent.search(/Safari/) < 0) {
    //     let scene = document.getElementById("scene");
    //     let parallaxInstance = new Parallax(scene);
    //     gsap.from(".building__bottom", 1.5, {
    //         transform: "scale(5)",
    //     });
    //     gsap.from(".building", 1.5, {
    //         transform: "scale(0.2)",
    //         filter: "blur(50px)"
    //     }, "-=1.5");
    //     gsap.to(".building", {
    //         scrollTrigger: {
    //             trigger: ".header",
    //             scrub: 1,
    //             start: "top 0",
    //         },
    //         yPercent: 40,
    //         stagger: {
    //             each: 0.05
    //         },
    //     });
    // }
    // if (navigator.userAgent.search(/Safari/) > 0) {
    //     gsap.from(".building", 2, {
    //         opacity: 0,
    //         y: 50
    //     });
    // }
    // headerTl.to(".header__parallax", {
    //     scrollTrigger: {
    //         trigger: ".header",
    //         scrub: 0.5,
    //         start: "top 0",
    //     },
    //     yPercent: 10,
    // })
    //     .from(splitHeader.chars, 1, {
    //         delay: 0.5,
    //         y: 100,
    //         opacity: 0,
    //         stagger: {
    //             each: 0.05
    //         }
    //     }, "-=0.5")


    // function headerRevert() { splitHeader.revert(); }

}

const swiperBtnNext = document.querySelectorAll('.swiper-button-next');
const swiperBtnPrev = document.querySelectorAll('.swiper-button-prev');

// swiper interior
document.querySelectorAll('.swiper').forEach(function (el, index) {
    const swiperLS = new Swiper('.interior__slider.swiper', {
        spaceBetween: 30,

        breakpoints: {
            576: {
                slidesPerView: 2,
            },
        },
        navigation: {
            nextEl: swiperBtnNext[index],
            prevEl: swiperBtnPrev[index],
        }
    });
})

// swiper reviews

const swiperReviewBtns = document.querySelectorAll('.swiper-reviews .swiper-buttons');

const swiperReviews = new Swiper('.swiper-reviews .swiper', {
    spaceBetween: 30,

    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        }
    },

    navigation: {
        prevEl: '.swiper-reviews .swiper-buttons > .btn-circle:first-of-type',
        nextEl: '.swiper-reviews .swiper-buttons > .btn-circle:last-of-type',
    },
});

// swiper tabs

const swiperTabsBtns = document.querySelectorAll('.swiper-tabs-content .swiper-tabs-buttons');

document.querySelectorAll('.swiper').forEach(function (el, index) {
    const swiperTabs = new Swiper('.swiper-tabs-content', {
        breakpoints: {
            992: {
                slidesPerView: 3,
            },
        },
        navigation: {
            prevEl: '.section-tabs  .swiper-tabs-buttons > .btn-circle:first-of-type',
            nextEl: '.section-tabs  .swiper-tabs-buttons > .btn-circle:last-of-type',
        },
    });
})



