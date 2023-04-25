const swiper = new Swiper('.swiper', {
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    // when window width is >= 501px
    501: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  spaceBetween: 20,
  speed: 400,
  slidesPerView: 1
})
