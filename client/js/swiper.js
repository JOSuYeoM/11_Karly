export const swiper = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next-main',
    prevEl: '.swiper-button-prev-main',
  },
});

export const swiper2 = new Swiper('.swiper2', {
  slidesPerView: '4',
  spaceBetween: 20,
  loop : true,
  navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
  },
});


export const swiper3 = new Swiper('.swiper3', {
  direction: 'vertical',
  slidesPerView: 'auto',
  spaceBetween: 10,
  freeMode: true,
  navigation: {
    nextEl: '.swiper3 .swiper-button-next',
    prevEl: '.swiper3 .swiper-button-prev',
  },
});