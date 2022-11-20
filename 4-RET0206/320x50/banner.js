const tl = gsap.timeline();
const rectPercent = [61, 66, 71];
const rectFrame4Percent = [25, 28, 31];

const rectAnimation = {
  xPercent: (i) => -rectPercent[i],
  duration: 0.7,
  stagger: 0.13,
  ease: "power3.out",
};
const hideY = {
  opacity: 0,
  y: 12,
};

tl.to(".banner-container", {
  opacity: 1,
  duration: 0.7,
});

// frame 1 animation
tl.to("#frame-1 .rect-outer", rectAnimation);
tl.to("#frame-1 .rect-inner", rectAnimation, "<0.15");
tl.from(["#date01", "#disc01"], { ...hideY, stagger: 0.2 }, "-=0.5");
tl.from("#frame-1 .rect-full", {
  ...rectAnimation,
  xPercent: 100,
});
tl.from("#frame-1 #txt01", hideY);

// frame 2 animation
tl.to(
  "#mask01 .rect-mask",
  {
    ...rectAnimation,
    xPercent: -100,
    stagger: 0.2,
  },
  "+=0.5"
);
tl.to(
  "#frame-2 .rect-outer",
  {
    ...rectAnimation,
    stagger: 0.2,
  },
  "-=0.5"
);
tl.to(
  "#frame-2 .rect-inner",
  {
    ...rectAnimation,
    stagger: 0.2,
  },
  "<0.15"
);
tl.from("#frame-2 .rect-full", { ...rectAnimation, xPercent: 100 });
tl.from("#frame-2 #txt02", hideY);

//frame 3 animation
tl.to(
  "#mask02 .rect-mask",
  {
    ...rectAnimation,
    xPercent: -100,
  },
  "+=0.5"
);
tl.to(
  "#frame-3 .rect-outer",
  {
    ...rectAnimation,
    stagger: 0.2,
  },
  "-=0.5"
);
tl.to(
  "#frame-3 .rect-inner",
  {
    ...rectAnimation,
    stagger: 0.2,
  },
  "<0.15"
);
tl.from("#nowstreaming", hideY);
tl.from("#frame-3 .rect-full", { ...rectAnimation, xPercent: 100 });
tl.from(["#txt03", "#disc02"], { ...hideY, stagger: 0.2 });

// frame 4 animation
tl.to(
  "#mask03 .rect-mask",
  {
    ...rectAnimation,
    xPercent: -100,
  },
  "+=0.5"
);
tl.to("#frame-4 .rect-inner", rectAnimation, "-=0.5");
tl.from("#frame-4 .rect-full", { ...rectAnimation, xPercent: 100 });
tl.from("#txt04", hideY);
tl.from("#disc03", hideY, "-=0.2");
tl.from(".rect-mask-border", {
  scaleY: 0,
  duration: 1,
  transformOrigin: "center",
});
tl.from(
  ["#border", ".rect-mask-offer"],
  {
    scaleX: 0,
    duration: 0.7,
    stagger: 0.15,
    transformOrigin: "center",
  },
  "-=1.5"
);
tl.from(
  "#getitnow",
  {
    opacity: 0,
    transformOrigin: "center",
    duration: 0.7,
    scale: 1,
  },
  "-=0.5"
);
tl.to(
  "#getitnow",
  {
    scale: 1.1,
    duration: 0.2,
  },
  "-=0.5"
);
