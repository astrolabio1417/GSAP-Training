const tl = gsap.timeline();

// frame 1
tl.set("#banner-logo", { opacity: 0 })
  .set("#frame-1 .ribbon", { xPercent: -100 })
  .to(["#frame-1", "#banner-logo"], { stagger: 1, opacity: 1, duration: 0.3 })
  .to("#frame-1 .ribbon", { xPercent: 0, ease: "expo.out" });

// frame 2
tl.set("#frame-2 .ribbon", { xPercent: -100 });
slideAnimation(tl, "#frame-2", "#svg-mask-poly2");
tl.to("#frame-2 .ribbon", { xPercent: 0, ease: "expo.out" }, "-=0.8");

// frame 3 - 4
slideAnimation(tl, "#frame-3", "#svg-mask-poly3");
slideAnimation(tl, "#frame-4", "#svg-mask-poly4");

// frame 5
tl.set("#frame-5 .ribbon", { xPercent: -100 });
slideAnimation(tl, "#frame-5", "#svg-mask-poly5");
tl.to("#frame-5 .ribbon", { xPercent: 0, ease: "expo.out" }, "-=0.8");

function slideAnimation(tl, frameId, maskId) {
  return tl
    .set(maskId, { xPercent: -100, delay: 1.3 })
    .set(frameId, { opacity: 1 })
    .to(maskId, { xPercent: 0, duration: 1.3, ease: "power3.inOut" });
}
