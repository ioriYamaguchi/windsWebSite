gsap.registerPlugin(ScrollTrigger);
gsap.to(".navbar", {
    autoAlpha: 1,
    scrollTrigger: {
        trigger: '.content2',
        start: "right 50%",
        scrub: true,
        // markers: true,
    }
})