/* Testimonials Swiper Code */
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    929: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

/* Show and Hide Navigation Menu */
const body = document.querySelector("body");
const menuToggle = document.querySelector(".menu-toggle");
const overlay = document.querySelector(".overlay");

menuToggle.addEventListener("click", () => {
  body.classList.toggle("open");
});

overlay.addEventListener("click", () => {
  body.classList.remove("open");
});
