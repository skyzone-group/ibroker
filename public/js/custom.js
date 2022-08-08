// Initialise Carousel
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
  Dots: false,
  on: {
    init: (carousel) => {
      carousel.$index = carousel.$container.querySelector(".carousel_index");
      carousel.$count = carousel.$container.querySelector(".carousel_count");
    },
    refresh: (carousel) => {
      if (carousel.$count) {
        carousel.$count.innerHTML = carousel.pages.length;
      }
    },
    change: (carousel) => {
      if (carousel.$index) {
        carousel.$index.innerHTML = carousel.page + 1;
      }
    },
  },
});

// Thumbnails
const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
  Sync: {
    target: mainCarousel,
    friction: 0,
  },
  Dots: false,
  Navigation: false,
  center: true,
  slidesPerPage: 1,
  infinite: false,
});

// Customize Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
  Carousel: {
    on: {
      change: (that) => {
        mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
          friction: 0,
        });
      },
    },
  },
});
