let hamburger = document.querySelector("#toggle");
let menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  menu.style.transition = "all .5s ease";
});

window.onresize = function () {
  if (window.innerWidth > 718) {
    menu.style.transition = "none";
  }
};

//glider - options https://glidejs.com/docs/options/

const config = {
  type: "carousel",
  perView: 4,
  focusAt: "center",
  gap: 8,
  keyboard: true,
  animationDuration: 500,
  animationTimingFunc: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  breakpoints: {
    1500: {
      perView: 3
    },
    1200: {
      perView: 2,
      focusAt: 0
    },
    810: {
      perView: 1,
      focusAt: "center"
    },
    400: {
      perView: 1,
      focusAt: 0,
      gap: 15
    }
  }
};
new Glide(".glide", config).mount();

//navbar changes on scroll

const navbar = document.querySelector(".nav");
const topHeader = document.querySelector(".topHeader");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 120 && window.innerWidth > 768) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

window.addEventListener("scroll", function () {
  if (window.pageYoffset > 120) {
    topHeader.classList.add("displayNone");
  } else {
    topHeader.classList.add("displayOn");
  }
});


//REMOVE MENU DROPBOWN ON SCROLL 



let menuHover = function () {
  let firstPosY = event.deltaY;
  let newPosY = firstPosY + event.deltaY;
  if (window.innerWidth <= 768 && firstPosY < newPosY) {
    scrollingDown = true;

    navbar.style.transitionDuration = ".2s";
    navbar.style.opacity = "0";
    navbar.style.transform = "translate(0, -80px)";

  } else if (firstPosY > newPosY) {
    navbar.style.opacity = "1";
    navbar.style.transform = "translate(0, 0px)";

  }




}











//appear transition effect

let aboutHeading = document.querySelector(".aboutHeading");
let aboutText = document.querySelector(".aboutText");
let servicesTitle1 = document.querySelector("#box1 h3");
let servicesTitle2 = document.querySelector("#box2 h3");
let servicesTitle3 = document.querySelector("#box3 h3");
let servicesText1 = document.querySelector("#box1 p");
let servicesText2 = document.querySelector("#box2 p");
let servicesText3 = document.querySelector("#box3 p");
let helpTitle = document.querySelector(".helpTitle");
let helpText = document.querySelector(".helpText");
let helpButton = document.querySelector(".helpButton");
let portfolioHeading = document.querySelector(".portfolioHeading");
let contactText = document.querySelector(".contactText");

function scrollAppear(variable) {
  var introPosition = variable.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if (introPosition < screenPosition / 1.2) {
    variable.classList.add("text-appear");
  }
}

document.addEventListener("scroll", function () {
  scrollAppear(aboutHeading);
  scrollAppear(aboutText);
  scrollAppear(servicesTitle1);
  scrollAppear(servicesTitle2);
  scrollAppear(servicesTitle3);
  scrollAppear(servicesText1);
  scrollAppear(servicesText2);
  scrollAppear(servicesText3);
  scrollAppear(helpTitle);
  scrollAppear(helpText);
  scrollAppear(helpButton);
  scrollAppear(portfolioHeading);
  // scrollAppear(contactText);
});

// get label

var label = document.getElementById("label");

var toggle = document.getElementById("toggle");

toggle.addEventListener("change", function () {
  if (this.checked) {
    label.innerHTML = "&#65291;";
    label.style.fontSize = "2.6rem";
    label.style.color = "#E81A16";
  } else {
    label.innerHTML = "&#9776;";
    label.style.fontSize = "1.8em";
    label.style.color = "#051821";
  }
});





// if the menu a get clicked when the toggle is checked, uncheck it. or if user scrolls when checked, uncheck it.

menu.children[0].addEventListener("click", function () {
  toggle.checked = false;
  label.innerHTML = "&#9776;";
  label.style.fontSize = "1.8em";
  label.style.color = "#051821";
});

//smooth scroll js

window.addEventListener("mousewheel", menuHover);
