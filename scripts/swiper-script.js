const swiper = new Swiper('.swiper', {
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.custom-swiper-pagination',
    type: 'bullets',
    enabled: true,
    horizontalClass: 'swiper-pagination-horizontal',
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active'
  },
  breakpoints: {
    // when window width is >= 801px
    801: {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        enabled: false,
        paginationDisabledClass: 'swiper-pagination-disabled'
      }
    }
  },
  spaceBetween: 20,
  speed: 400,
  slidesPerView: 1
})
