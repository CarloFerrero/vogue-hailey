// SLIDER MODELLI // SLIDER MODELLI // SLIDER MODELLI // SLIDER MODELLI // SLIDER MODELLI // SLIDER MODELLI
new Splide("#slider_modelli", {
  //isNavigation: true,
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "30rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows model-arrows",
    arrow: "splide__arrow model-arrow",
    prev: "splide__arrow--prev model-prev",
    next: "splide__arrow--next model-next",
    // Add classes for pagination.
    pagination: "splide__pagination model-pagination", // container
    page: "splide__pagination__page model-page", // each button
  },
}).mount();

// Custom pagination for #slider_modelli
const splideModel = new Splide("#slider_modelli");

splideModel.on("pagination:mounted", function (data) {
  // You can add your class to the UL element
  for (i = 0; i < data.items.length; i++) {
    data.items[i].button.classList.add("model-page");
  }
  data.list.classList.add("model-pagination");
  const imageSrc = [
    "https://uploads-ssl.webflow.com/61baf97d47f6ba4a1a641a16/61baf9b89142bdb1a3bba7ee_0VO4242S__515273__P21__shad__cfr.png",
    "https://uploads-ssl.webflow.com/61baf97d47f6ba4a1a641a16/61baf9ec25593276466195d0_0VO4243__352__P21__shad__cfr.png",
    "https://uploads-ssl.webflow.com/61baf97d47f6ba4a1a641a16/61baf9fe1418ddcd0e5a71a3_0VO4244__848__P21__shad__cfr.png",
    "https://uploads-ssl.webflow.com/61baf97d47f6ba4a1a641a16/61bafa174fa3d322e83e955a_0VO4245S__515273__P21__shad__cfr.png",
    "https://uploads-ssl.webflow.com/61baf97d47f6ba4a1a641a16/61bafa33a285394cf25fe393_0VO5438S__279280__P21__shad__cfr.png",
    "https://uploads-ssl.webflow.com/61baf97d47f6ba4a1a641a16/61bafa7995f7bd6380d0ab6d_0VO5439__W656__P21__shad__cfr.png",
    "https://uploads-ssl.webflow.com/61baf97d47f6ba4a1a641a16/61bafa8f2559323157619698_0VO5440S__W44_87__P21__shad__cfr.png",
    "https://uploads-ssl.webflow.com/61baf97d47f6ba4a1a641a16/61bafaafcc8e191228c97c04_0VO5441__2914__P21__shad__cfr.png",
  ];
  // `items` contains all dot items
  data.items.forEach(function (item) {
    var myImage = new Image(30, 30);
    myImage.src = imageSrc[item.page];
    item.button.style.backgroundImage = `url(${myImage.src})`;
  });
});

splideModel.mount();

// slider_colori_mod01 // slider_colori_mod01 // slider_colori_mod01 // slider_colori_mod01 // slider_colori_mod01 // slider_colori_mod01
new Splide("#slider_colori_mod01", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "28rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows colors-arrows",
    arrow: "splide__arrow colors-arrow",
    prev: "splide__arrow--prev colors-prev",
    next: "splide__arrow--next colors-next",

    // Add classes for pagination.
    pagination: "splide__pagination colors-pagination", // container
    page: "splide__pagination__page colors-page", // each button
  },
}).mount();

// Custom pagination for #slider_colori_mod01
const splideColorsMod01 = new Splide("#slider_colori_mod01", { speed: 0 });

splideColorsMod01.on("pagination:mounted", function (data) {
  // You can add your class to the UL element
  for (i = 0; i < data.items.length; i++) {
    data.items[i].button.classList.add("colors-page");
  }
  data.list.classList.add("colors-pagination");
  const dotColors = ["#976D4A", "#78605D", "#7B2515", "#070707"];
  // `items` contains all dot items
  data.items.forEach(function (item) {
    item.button.style.backgroundColor = dotColors[item.page];
  });
});

splideColorsMod01.mount();

// slider_colori_mod02 // slider_colori_mod02 // slider_colori_mod02 // slider_colori_mod02 // slider_colori_mod02 // slider_colori_mod02
new Splide("#slider_colori_mod02", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "28rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows colors-arrows",
    arrow: "splide__arrow colors-arrow",
    prev: "splide__arrow--prev colors-prev",
    next: "splide__arrow--next colors-next",

    // Add classes for pagination.
    pagination: "splide__pagination colors-pagination", // container
    page: "splide__pagination__page colors-page", // each button
  },
}).mount();

// Custom pagination for #slider_colori_mod02
const splideColorsMod02 = new Splide("#slider_colori_mod02");

splideColorsMod02.on("pagination:mounted", function (data) {
  // You can add your class to the UL element
  for (i = 0; i < data.items.length; i++) {
    data.items[i].button.classList.add("colors-page");
  }
  data.list.classList.add("colors-pagination");
  const dotColors = ["#976D4A", "#78605D", "#7B2515", "#070707"];
  // `items` contains all dot items
  data.items.forEach(function (item) {
    item.button.style.backgroundColor = dotColors[item.page];
  });
});

splideColorsMod02.mount();

// slider_colori_mod03 // slider_colori_mod03 // slider_colori_mod03 // slider_colori_mod03 // slider_colori_mod03 // slider_colori_mod03
new Splide("#slider_colori_mod03", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "28rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows colors-arrows",
    arrow: "splide__arrow colors-arrow",
    prev: "splide__arrow--prev colors-prev",
    next: "splide__arrow--next colors-next",

    // Add classes for pagination.
    pagination: "splide__pagination colors-pagination", // container
    page: "splide__pagination__page colors-page", // each button
  },
}).mount();

// Custom pagination for #slider_colori_mod03
const splideColorsMod03 = new Splide("#slider_colori_mod03");

splideColorsMod03.on("pagination:mounted", function (data) {
  // You can add your class to the UL element
  for (i = 0; i < data.items.length; i++) {
    data.items[i].button.classList.add("colors-page");
  }
  data.list.classList.add("colors-pagination");
  const dotColors = ["#976D4A", "#78605D", "#7B2515", "#070707"];
  // `items` contains all dot items
  data.items.forEach(function (item) {
    item.button.style.backgroundColor = dotColors[item.page];
  });
});

splideColorsMod03.mount();

// slider_colori_mod04 // slider_colori_mod04 // slider_colori_mod04 // slider_colori_mod04 // slider_colori_mod04 // slider_colori_mod04
new Splide("#slider_colori_mod04", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "28rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows colors-arrows",
    arrow: "splide__arrow colors-arrow",
    prev: "splide__arrow--prev colors-prev",
    next: "splide__arrow--next colors-next",

    // Add classes for pagination.
    pagination: "splide__pagination colors-pagination", // container
    page: "splide__pagination__page colors-page", // each button
  },
}).mount();

// Custom pagination for #slider_colori_mod04
const splideColorsMod04 = new Splide("#slider_colori_mod04");

splideColorsMod04.on("pagination:mounted", function (data) {
  // You can add your class to the UL element
  for (i = 0; i < data.items.length; i++) {
    data.items[i].button.classList.add("colors-page");
  }
  data.list.classList.add("colors-pagination");
  const dotColors = ["#976D4A", "#78605D", "#7B2515", "#070707"];
  // `items` contains all dot items
  data.items.forEach(function (item) {
    item.button.style.backgroundColor = dotColors[item.page];
  });
});

splideColorsMod04.mount();

// slider_colori_mod05 // slider_colori_mod05 // slider_colori_mod05 // slider_colori_mod05 // slider_colori_mod05 // slider_colori_mod05
new Splide("#slider_colori_mod05", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "28rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows colors-arrows",
    arrow: "splide__arrow colors-arrow",
    prev: "splide__arrow--prev colors-prev",
    next: "splide__arrow--next colors-next",

    // Add classes for pagination.
    pagination: "splide__pagination colors-pagination", // container
    page: "splide__pagination__page colors-page", // each button
  },
}).mount();

// Custom pagination for #slider_colori_mod05
const splideColorsMod05 = new Splide("#slider_colori_mod05");

splideColorsMod05.on("pagination:mounted", function (data) {
  // You can add your class to the UL element
  for (i = 0; i < data.items.length; i++) {
    data.items[i].button.classList.add("colors-page");
  }
  data.list.classList.add("colors-pagination");
  const dotColors = ["#976D4A", "#78605D", "#7B2515", "#070707"];
  // `items` contains all dot items
  data.items.forEach(function (item) {
    item.button.style.backgroundColor = dotColors[item.page];
  });
});

splideColorsMod05.mount();

// slider_colori_mod06 // slider_colori_mod06 // slider_colori_mod06 // slider_colori_mod06 // slider_colori_mod06 // slider_colori_mod06
new Splide("#slider_colori_mod06", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "28rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows colors-arrows",
    arrow: "splide__arrow colors-arrow",
    prev: "splide__arrow--prev colors-prev",
    next: "splide__arrow--next colors-next",

    // Add classes for pagination.
    pagination: "splide__pagination colors-pagination", // container
    page: "splide__pagination__page colors-page", // each button
  },
}).mount();

// Custom pagination for #slider_colori_mod06
const splideColorsMod06 = new Splide("#slider_colori_mod06");

splideColorsMod06.on("pagination:mounted", function (data) {
  // You can add your class to the UL element
  for (i = 0; i < data.items.length; i++) {
    data.items[i].button.classList.add("colors-page");
  }
  data.list.classList.add("colors-pagination");
  const dotColors = ["#976D4A", "#78605D", "#7B2515", "#070707"];
  // `items` contains all dot items
  data.items.forEach(function (item) {
    item.button.style.backgroundColor = dotColors[item.page];
  });
});

splideColorsMod06.mount();
// slider_colori_mod07 // slider_colori_mod07 // slider_colori_mod07 // slider_colori_mod07 // slider_colori_mod07 // slider_colori_mod07
new Splide("#slider_colori_mod07", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "28rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows colors-arrows",
    arrow: "splide__arrow colors-arrow",
    prev: "splide__arrow--prev colors-prev",
    next: "splide__arrow--next colors-next",

    // Add classes for pagination.
    pagination: "splide__pagination colors-pagination", // container
    page: "splide__pagination__page colors-page", // each button
  },
}).mount();

// Custom pagination for #slider_colori_mod07
const splideColorsMod07 = new Splide("#slider_colori_mod07");

splideColorsMod07.on("pagination:mounted", function (data) {
  // You can add your class to the UL element
  for (i = 0; i < data.items.length; i++) {
    data.items[i].button.classList.add("colors-page");
  }
  data.list.classList.add("colors-pagination");
  const dotColors = ["#976D4A", "#78605D", "#7B2515", "#070707"];
  // `items` contains all dot items
  data.items.forEach(function (item) {
    item.button.style.backgroundColor = dotColors[item.page];
  });
});

splideColorsMod07.mount();

// slider_colori_mod08 // slider_colori_mod08 // slider_colori_mod08 // slider_colori_mod08 // slider_colori_mod08 // slider_colori_mod08
new Splide("#slider_colori_mod08", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "28rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows colors-arrows",
    arrow: "splide__arrow colors-arrow",
    prev: "splide__arrow--prev colors-prev",
    next: "splide__arrow--next colors-next",

    // Add classes for pagination.
    pagination: "splide__pagination colors-pagination", // container
    page: "splide__pagination__page colors-page", // each button
  },
}).mount();

// Custom pagination for #slider_colori_mod08
const splideColorsMod08 = new Splide("#slider_colori_mod08");

splideColorsMod08.on("pagination:mounted", function (data) {
  // You can add your class to the UL element
  for (i = 0; i < data.items.length; i++) {
    data.items[i].button.classList.add("colors-page");
  }
  data.list.classList.add("colors-pagination");
  const dotColors = ["#976D4A", "#78605D", "#7B2515", "#070707"];
  // `items` contains all dot items
  data.items.forEach(function (item) {
    item.button.style.backgroundColor = dotColors[item.page];
  });
});

splideColorsMod08.mount();

// slider_viste__mod01_col01 // slider_viste__mod01_col01 // slider_viste__mod01_col01 // slider_viste__mod01_col01 // slider_viste__mod01_col01 // slider_viste__mod01_col01
new Splide("#slider_viste__mod01_col01", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: "slider",
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
}).mount();

// slider_viste__mod01_col02 // slider_viste__mod01_col02 // slider_viste__mod01_col02 // slider_viste__mod01_col02 // slider_viste__mod01_col02 // slider_viste__mod01_col02
new Splide("#slider_viste__mod01_col02", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
}).mount();

// slider_viste__mod01_col03 // slider_viste__mod01_col03 // slider_viste__mod01_col03 // slider_viste__mod01_col03 // slider_viste__mod01_col03 // slider_viste__mod01_col03
new Splide("#slider_viste__mod01_col03", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
}).mount();

// slider_viste__mod01_col04 // slider_viste__mod01_col04 // slider_viste__mod01_col04 // slider_viste__mod01_col04 // slider_viste__mod01_col04 // slider_viste__mod01_col04
new Splide("#slider_viste__mod01_col04", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
}).mount();

// slider_viste__mod02_col01 // slider_viste__mod02_col01 // slider_viste__mod02_col01 // slider_viste__mod02_col01 // slider_viste__mod02_col01 // slider_viste__mod02_col01
new Splide("#slider_viste__mod02_col01", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: "slider",
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
}).mount();

// slider_viste__mod02_col02 // slider_viste__mod02_col02 // slider_viste__mod02_col02 // slider_viste__mod02_col02 // slider_viste__mod02_col02 // slider_viste__mod02_col02
new Splide("#slider_viste__mod02_col02", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod02_col03 // slider_viste__mod02_col03 // slider_viste__mod02_col03 // slider_viste__mod02_col03 // slider_viste__mod02_col03 // slider_viste__mod02_col03
new Splide("#slider_viste__mod02_col03", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod02_col04 // slider_viste__mod02_col04 // slider_viste__mod02_col04 // slider_viste__mod02_col04 // slider_viste__mod02_col04 // slider_viste__mod02_col04
new Splide("#slider_viste__mod02_col04", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod03_col01 // slider_viste__mod03_col01 // slider_viste__mod03_col01 // slider_viste__mod03_col01 // slider_viste__mod03_col01 // slider_viste__mod03_col01
new Splide("#slider_viste__mod03_col01", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: "slider",
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
}).mount();

// slider_viste__mod03_col02 // slider_viste__mod03_col02 // slider_viste__mod03_col02 // slider_viste__mod03_col02 // slider_viste__mod03_col02 // slider_viste__mod03_col02
new Splide("#slider_viste__mod03_col02", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod03_col03 // slider_viste__mod03_col03 // slider_viste__mod03_col03 // slider_viste__mod03_col03 // slider_viste__mod03_col03 // slider_viste__mod03_col03
new Splide("#slider_viste__mod03_col03", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod03_col04 // slider_viste__mod03_col04 // slider_viste__mod03_col04 // slider_viste__mod03_col04 // slider_viste__mod03_col04 // slider_viste__mod03_col04
new Splide("#slider_viste__mod03_col04", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod04_col01 // slider_viste__mod04_col01 // slider_viste__mod04_col01 // slider_viste__mod04_col01 // slider_viste__mod04_col01 // slider_viste__mod04_col01
new Splide("#slider_viste__mod04_col01", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: "slider",
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
}).mount();

// slider_viste__mod04_col02 // slider_viste__mod04_col02 // slider_viste__mod04_col02 // slider_viste__mod04_col02 // slider_viste__mod04_col02 // slider_viste__mod04_col02
new Splide("#slider_viste__mod04_col02", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod04_col03 // slider_viste__mod04_col03 // slider_viste__mod04_col03 // slider_viste__mod04_col03 // slider_viste__mod04_col03 // slider_viste__mod04_col03
new Splide("#slider_viste__mod04_col03", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod04_col04 // slider_viste__mod04_col04 // slider_viste__mod04_col04 // slider_viste__mod04_col04 // slider_viste__mod04_col04 // slider_viste__mod04_col04
new Splide("#slider_viste__mod04_col04", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod05_col01 // slider_viste__mod05_col01 // slider_viste__mod05_col01 // slider_viste__mod05_col01 // slider_viste__mod05_col01 // slider_viste__mod05_col01
new Splide("#slider_viste__mod05_col01", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: "slider",
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
}).mount();

// slider_viste__mod05_col02 // slider_viste__mod05_col02 // slider_viste__mod05_col02 // slider_viste__mod05_col02 // slider_viste__mod05_col02 // slider_viste__mod05_col02
new Splide("#slider_viste__mod05_col02", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod05_col03 // slider_viste__mod05_col03 // slider_viste__mod05_col03 // slider_viste__mod05_col03 // slider_viste__mod05_col03 // slider_viste__mod05_col03
new Splide("#slider_viste__mod05_col03", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod05_col04 // slider_viste__mod05_col04 // slider_viste__mod05_col04 // slider_viste__mod05_col04 // slider_viste__mod05_col04 // slider_viste__mod05_col04
new Splide("#slider_viste__mod05_col04", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod06_col01 // slider_viste__mod06_col01 // slider_viste__mod06_col01 // slider_viste__mod06_col01 // slider_viste__mod06_col01 // slider_viste__mod06_col01
new Splide("#slider_viste__mod06_col01", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: "slider",
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
}).mount();

// slider_viste__mod06_col02 // slider_viste__mod06_col02 // slider_viste__mod06_col02 // slider_viste__mod06_col02 // slider_viste__mod06_col02 // slider_viste__mod06_col02
new Splide("#slider_viste__mod06_col02", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod06_col03 // slider_viste__mod06_col03 // slider_viste__mod06_col03 // slider_viste__mod06_col03 // slider_viste__mod06_col03 // slider_viste__mod06_col03
new Splide("#slider_viste__mod06_col03", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod06_col04 // slider_viste__mod06_col04 // slider_viste__mod06_col04 // slider_viste__mod06_col04 // slider_viste__mod06_col04 // slider_viste__mod06_col04
new Splide("#slider_viste__mod06_col04", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod07_col01 // slider_viste__mod07_col01 // slider_viste__mod07_col01 // slider_viste__mod07_col01 // slider_viste__mod07_col01 // slider_viste__mod07_col01
new Splide("#slider_viste__mod07_col01", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: "slider",
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
}).mount();

// slider_viste__mod07_col02 // slider_viste__mod07_col02 // slider_viste__mod07_col02 // slider_viste__mod07_col02 // slider_viste__mod07_col02 // slider_viste__mod07_col02
new Splide("#slider_viste__mod07_col02", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod07_col03 // slider_viste__mod07_col03 // slider_viste__mod07_col03 // slider_viste__mod07_col03 // slider_viste__mod07_col03 // slider_viste__mod07_col03
new Splide("#slider_viste__mod07_col03", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod07_col04 // slider_viste__mod07_col04 // slider_viste__mod07_col04 // slider_viste__mod07_col04 // slider_viste__mod07_col04 // slider_viste__mod07_col04
new Splide("#slider_viste__mod07_col04", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod08_col01 // slider_viste__mod08_col01 // slider_viste__mod08_col01 // slider_viste__mod08_col01 // slider_viste__mod08_col01 // slider_viste__mod08_col01
new Splide("#slider_viste__mod08_col01", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: "slider",
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
}).mount();

// slider_viste__mod08_col02 // slider_viste__mod08_col02 // slider_viste__mod08_col02 // slider_viste__mod08_col02 // slider_viste__mod08_col02 // slider_viste__mod08_col02
new Splide("#slider_viste__mod08_col02", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod08_col03 // slider_viste__mod08_col03 // slider_viste__mod08_col03 // slider_viste__mod08_col03 // slider_viste__mod08_col03 // slider_viste__mod08_col03
new Splide("#slider_viste__mod08_col03", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();

// slider_viste__mod08_col04 // slider_viste__mod08_col04 // slider_viste__mod08_col04 // slider_viste__mod08_col04 // slider_viste__mod08_col04 // slider_viste__mod08_col04
new Splide("#slider_viste__mod08_col04", {
  type: "slide",
  speed: 0,
  width: "100%",
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: true,
  lazyLoad: "nearby",
  keyboard: true,
  direction: "ltr",
  height: "25rem",
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows viste-arrows",
    arrow: "splide__arrow viste-arrow",
    prev: "splide__arrow--prev viste-prev",
    next: "splide__arrow--next viste-next",

    // Add classes for pagination.
    pagination: "splide__pagination viste-pagination", // container
    page: "splide__pagination__page viste-page", // each button
  },
}).mount();
