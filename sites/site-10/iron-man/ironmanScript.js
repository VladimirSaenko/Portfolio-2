// "use strict";

gsap.to('#bg', {
    scrollTrigger : {
        scrub: true
    },
    y: 200,
    scale: 1.5
})

gsap.to('#moon', {
    scrollTrigger : {
        scrub: true
    },
    x: -400,
    scale: 4
})

gsap.to('#cloud1', {
    scrollTrigger : {
        scrub: true
    },
    x: -400
})

gsap.to('#cloud2', {
    scrollTrigger : {
        scrub: true
    },
    x: 400
})

gsap.to('#jet', {
    scrollTrigger : {
        scrub: true
    },
    x: 1000,
    y: 200,
    scale: 4,
    rotation: -50
})

gsap.to('#ironman', {
    scrollTrigger : {
        scrub: true
    },
    x: 0,
    y: -1800,
    scale: 50
})
