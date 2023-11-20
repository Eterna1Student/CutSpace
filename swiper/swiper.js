const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 4000,
    autoplay: {
        delay: 0,
      },
    slidesPerView: 4,
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2
      }
    },
  });
