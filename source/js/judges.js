var swiperJudge = new Swiper(".judges-slider", {
  loop: true,
  autoHeight:true,
  observer:true,

  breakpoints: {
    767: {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 48,
    },
    1919: {
      slidesPerView: "auto",
      loop: true,
      spaceBetween: 48,
    },
    4000: {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 48,
    },
  },
  pagination: {
    el: ".judges-slider-pagination",
    clickable: true,
    observeParents: true,
  },
  navigation: {
    nextEl: ".judges-slider__btn-next",
    prevEl: ".judges-slider__btn-prev",
    observeParents: true,
  },


});
