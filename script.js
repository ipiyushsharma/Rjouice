function loaderAnimation() {

    var tl = gsap.timeline()

    tl.from("#loader h3", {
        x: 50,
        // y:100,
        opacity: 0,
        duration: 1,
        stagger: 0.4
    })
    tl.to("#loader h3", {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.3
    })
    tl.to("#loader", {
        opacity: 0
    })
    tl.from("#page1-content h1 span", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        delay: -0.5
    })
    tl.to("#loader", {
        display: "none"
    })
}

loaderAnimation()


function page1Animation() {
    var page1Content = document.querySelector("#page1-content");
    var cursor = document.querySelector("#cursor");

    page1Content.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
        })
    })
    page1Content.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })
    page1Content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })
}

page1Animation();

function page3Animation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 40,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
    });
}

page3Animation();
