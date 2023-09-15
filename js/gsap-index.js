// 横スクロール
window.addEventListener("load", function () {


    gsap.registerPlugin(ScrollTrigger);

    const wrapper = document.querySelector("#wrapper");
    const panel = document.querySelector(".panel");
    const content = document.querySelectorAll(".content");
    const num = content.length;


    gsap.set(panel, { width: num * 100 + "%" });
    gsap.set(content, { width: 100 / num + "%" });

    gsap.to(content, {
        xPercent: -100 * (num - 1),
        ease: "none",
        scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: () => `+=${wrapper.offsetWidth + 800}`,
            pin: true,
            anticipatePin: 1,
            pinSpacing: true,
            scrub: true,
        }
    });
});

// back-top
gsap.to(".back-top", {
    autoAlpha: 1,
    scrollTrigger: {
        trigger: '.content2',
        start: "right 50%",
        scrub: true,
        // markers: true,
    }
})




// gsap文法
// gsap.to("", {
//     x: 200,
//     autoAlpha: 0,
//     color: "#0000FF",
//     duration: 1,
//     ease: "power4.out",
//     stagger: 0.02,

//     scrollTrigger: {
//         trigger: '.box',
//         start: 'top 80%',
//         end: 'bottom 20%',
//         markers: true,
//         scrub: true,
//     }
// })