const assets = {
  logo: "./img/foxtelLogo.png",
  images: [
    {
      images: ["./img/img01.jpg"],
    },
    {
      images: ["./img/img02.jpg"],
    },
    {
      images: ["./img/img03.jpg"],
    },
    {
      images: ["./img/img04.jpg"],
    },
    {
      images: [
        "./img/img05.jpg",
        "./img/txt01.png",
        "./img/txt02.png",
        "./img/btn.png",
      ],
    },
  ],
};

function init() {
  // frames
  assets.images.map((images, idx) => {
    $(".banner-container").append(`
        <svg class="frames frame-${idx}" width="300" height="250" viewbox="0 0 300 250" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            ${images.images.map((src) => {
              var srcId = src.replace("./img/", "").replace(".png", "");
              return `<image id="${srcId}" href="${src}"  height="100%" width="100%" alt="" />`;
            })}
        </svg>
        `);
  });

  // logo
  $(".banner-container").append(
    `
        <svg  class="frames overlay-container" width="300" height="250" viewbox="0 0 300 250" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <image href="${assets.logo}" height="100%" width="100%" alt=""></image>
        </svg>  
        `
  );
}

function timeline() {
  var tl = gsap.timeline();

  // start
  tl.set("#btn", {
    x: 50,
    y: 143,
    width: 202,
    height: 32,
    opacity: 0,
  });

  tl.to([".banner-container", ".overlay-container"], {
    opacity: 1,
    duration: 0.4,
    delay: 0.3,
  });

  // frame 1-4
  tl.to(
    [".frame-0", ".frame-1", ".frame-2", ".frame-3", ".frame-4"],
    {
      duration: 0.7,
      opacity: 1,
      stagger: 2,
      ease: "expo.out",
    },
    "<+0.3"
  );

  // frame 4
  tl.from(["#txt01", "#txt02"], {
    y: 30,
    duration: 0.7,
    opacity: 0,
    stagger: 0.7,
    ease: "expo.out",
  });

  tl.to(
    "#btn",
    {
      duration: 1,
      opacity: 1,
      scale: 1,
      ease: "expo.out",
      transformOrigin: "center",
    },
    "-=0.5"
  );

  tl.to(
    "#btn",
    {
      duration: 0.15,
      scale: 1.1,
      ease: "none",
      transformOrigin: "center",
    },
    ">-0.17"
  );

  return tl;
}

init();
timeline();
