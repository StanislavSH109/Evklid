// import Swiper from 'swiper';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

//   const swiper = new Swiper();


const container = document.querySelector(".container")
const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
   }

})
let actIndex;
swiper.on('activeIndexChange', function (item) {
  if (item.activeIndex > 0) {
    container.classList.add(`white`);
  } else {
    container.classList.remove(`white`);
  }
  
});
