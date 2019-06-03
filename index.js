window.onload = function() {
  var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 10000,
      disableOnInteraction: true,
    },
    speed: 2000,
    spaceBetween: 500,
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  })
}
