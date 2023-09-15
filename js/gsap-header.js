gsap.registerPlugin(ScrollTrigger);
gsap.to(".navbar", {
    autoAlpha: 1,
    scrollTrigger: {
        trigger: '.content2',
        start: "top 80%",
        scrub: true,
        // markers: true,
    }
})