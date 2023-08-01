// var slide = new Swiper('.swiper', {
//   slidesPerView: '1', // 한 슬라이드에 보여줄 갯수
//   spaceBetween: 0, // 슬라이드 사이 여백
//   loop: true, // 슬라이드 반복 여부
//   pagination: false, // pager 여부
//   autoplay: { // 자동 슬라이드 설정 
//       delay: 3000, // 시간 설정
//       disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
//   },
//   navigation: { // 버튼 사용자 지정
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//   }
// })

export const swiper = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-main',
    prevEl: '.swiper-button-prev-main',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
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