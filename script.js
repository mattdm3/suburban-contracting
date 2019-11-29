// let hammer = document.querySelector(".hammer");

// let menu = document.querySelector(".menu");
// let menuLinks = menu.querySelectorAll("a");

// menu.addEventListener("mouseover", function() {
//   hammer.style.color = "blue";
// });

let hamburger = document.querySelector("#toggle");
let menu = document.querySelector(".menu");


hamburger.addEventListener('click', function () {
  (menu.style.transition = "all 1s ease");
});

window.onresize = function () {
  if (window.innerWidth > 718) {
    menu.style.transition = "none"
  }
}

//glider - options https://glidejs.com/docs/options/

const config = {
  type: 'carousel',
  perView: 3,
  focusAt: 'center',
  gap: 8,
  keyboard: true,
  animationDuration: 500,
  animationTimingFunc: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  breakpoints: {
    1140: {
      perView: 2,
      focusAt: 0
    },
    750: {
      perView: 1,
      focusAt: "center"
    }
  }
}
new Glide('.glide', config).mount()