var main = new Swiper(".members__external-slider", {
  observer: true,
  // noSwipingClass: ".internal-slider__slide",
  breakpoints: {
    767: {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 30,
    },
    1919: {
      slidesPerView: "auto",
      loop: true,
      spaceBetween: 50,
    },
    4000: {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 53,
    },
  },
  pagination: {
    el: ".members__slider__pagination",
    clickable: true,
    observeParents: true,
  },
  navigation: {
    nextEl: ".members-external__btn-next",
    prevEl: ".members-external__btn-prev",
    observeParents: true,
  },
});

new Swiper(".members__internal-slider-one", {
  slideClass: "internal-slider__slide",
  noSwipingClass: "internal-slider__slide",
  noSwipingSelector: "div",
  noSwiping: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  observeParents: true,

  navigation: {
    nextEl: ".members-button-next1",
    prevEl: ".members-button-prev1",
  },
});

new Swiper(".members__internal-slider-two", {
  slideClass: "internal-slider__slide",
  noSwipingClass: "internal-slider__slide",
  noSwipingSelector: "div",
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  observeParents: true,

  navigation: {
    nextEl: ".members-button-next2",
    prevEl: ".members-button-prev2",
  },
});

new Swiper(".members__internal-slider-three", {
  slideClass: "internal-slider__slide",
  noSwipingClass: "internal-slider__slide",
  noSwipingSelector: "div",
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  observeParents: true,

  navigation: {
    nextEl: ".members-button-next3",
    prevEl: ".members-button-prev3",
  },
});

new Swiper(".members__internal-slider-four", {
  slideClass: "internal-slider__slide",
  noSwipingClass: "internal-slider__slide",
  noSwipingSelector: "div",
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  observeParents: true,

  navigation: {
    nextEl: ".members-button-next4",
    prevEl: ".members-button-prev4",
  },
});

new Swiper(".members__internal-slider-five", {
  slideClass: "internal-slider__slide",
  noSwipingClass: "internal-slider__slide",
  noSwipingSelector: "div",
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  observeParents: true,

  navigation: {
    nextEl: ".members-button-next5",
    prevEl: ".members-button-prev5",
  },
});

new Swiper(".members__internal-slider-six", {
  slideClass: "internal-slider__slide",
  noSwipingClass: "internal-slider__slide",
  noSwipingSelector: "div",
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  observeParents: true,

  navigation: {
    nextEl: ".members-button-next6",
    prevEl: ".members-button-prev6",
  },
});





