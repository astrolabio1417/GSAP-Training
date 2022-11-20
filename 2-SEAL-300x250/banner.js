function timeline() {
  const tl = gsap.timeline();
  const hide = {
    opacity: 0,
    ease: "expo.in",
  };
  const show = {
    opacity: 1,
    ease: "expo.out",
  };

  tl.set(".banner-container", { opacity: 1 });
  tl.set(".frame-item-hidden", { opacity: 0 });

  // frame 1
  tl.set("#frame-1 .frame-item-hidden", {
    scale: 1.6,
  });

  tl.to("#frame-1", show)
    .from("#frame1-bg", {
      transformOrigin: "right bottom",
      scale: 1.5,
      duration: 5,
    })
    .to(
      "#frame1-seal",
      {
        scale: 1.1,
        duration: 5,
        transformOrigin: "right bottom",
      },
      "<"
    )
    .to(
      "#frame-1 .frame-item-hidden",
      {
        stagger: 0.5,
        ...show,
      },
      "<"
    );

  // frame 2
  tl.set("#frame-2", {
    opacity: 1,
    ease: "expo.out",
  }).set("#frame-2 .frame-item-hidden", { y: 10 });

  tl.to(
    "#frame-2 .frame-item-hidden",
    {
      y: 0,
      duration: 0.65,
      stagger: 0.1,
      ...show,
    },
    "+=0.5"
  ).to(
    "#frame-2 .frame-item-hidden",
    {
      duration: 1,
      ...hide,
    },
    "+=1"
  );

  // frame 3
  tl.set("#frame-3", { opacity: 1 })
    .set(
      "#frame-3 .frame-item-hidden",
      {
        y: 10,
      },
      "+=0.5"
    )
    .to("#frame-3 .frame-item-hidden", {
      y: 0,
      duration: 0.65,
      stagger: 0.1,
      ...show,
    })
    .to(
      ["#frame-3 .frame-item-hidden", "#frame2-iq3", "#frame2-text"],
      {
        duration: 1,
        ...hide,
      },
      "+=1"
    );

  // frame 4
  tl.to("#frame-4", { opacity: 1, duration: 0.65 })
    .set("#frame-4 .frame-item-hidden", {
      y: 10,
    })
    .to(
      "#frame-4 .frame-item-hidden",
      {
        y: 0,
        duration: 0.65,
        stagger: 0.1,
        ...show,
      },
      "+=0.5"
    );

  return timeline;
}

timeline();
