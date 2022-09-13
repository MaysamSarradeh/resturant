/*-- Initialize Swiper --*/

  var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
   centeredSlidesBounds: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });


  


  /******** Swiper View ********/
function myFunction(x) {
  if (x.matches) { // If media query matches
    /***  Initialize Swiper **/
    var swiper1 = new Swiper(".mySwiper1", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  } else {
    /***  Initialize Swiper **/
    var swiper1 = new Swiper(".mySwiper1", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }
}

var x = window.matchMedia("(max-width: 720px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)