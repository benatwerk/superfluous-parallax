const controller = new ScrollMagic.Controller();

document.querySelectorAll(".letter").forEach((letter) => {
    const speed = parseFloat(letter.getAttribute("data-speed"));
    const moveDistance = letter.offsetHeight * speed;

    new ScrollMagic.Scene({
        triggerElement: "#parallaxContainer",
        duration: 500,
        triggerHook: 0,
    })
        .setTween(letter, { top: moveDistance, ease: "none" })
        .addTo(controller);
});

new ScrollMagic.Scene({
    triggerElement: "#parallaxContainer",
    duration: "200%",
    triggerHook: 0,
})
    .setTween("#building", { x: 0, y: 0, scale: 1.2 })
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#parallaxContainer",
    duration: "120%",
    triggerHook: 0,
})
    .setTween("#monster", { y: 0, x: "-40%", scale: 1.1 })
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#parallaxContainer",
    duration: "200%",
    triggerHook: 0,
})
    .setTween("#falling", { x: "-300%", y: "3470%", scale: 1.2 })
    .addTo(controller);
