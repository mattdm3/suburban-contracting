const images = [
  {
    href: "/img/portfolio-img/bathroom3.jpg",
    src: "/img/portfolio-img/bathroom3.jpg",
    caption: "Bathroom Tiles & Shower",
    alt: "",
  },
  {
    href: "/img/portfolio-img/bathtub-tiles.JPG",
    src: "/img/portfolio-img/bathtub-tiles.jpg",
    caption: "Shower Tiles",
    alt: "",
  },
  {
    href: "/img/portfolio-img/bathroom2.jpg",
    src: "/img/portfolio-img/bathroom2.jpg",
    caption: "Bathroom Counter Top",
    alt: "",
  },
  {
    href: "/img/portfolio-img/bathroom-sink1.JPG",
    src: "/img/portfolio-img/bathroom-sink1.JPG",
    caption: "Bathroom Sink",
    alt: "",
  },
  {
    href: "/img/portfolio-img/bathroom-sink4.JPG",
    src: "/img/portfolio-img/bathroom-sink4.JPG",
    caption: "Bathroom Sink",
    alt: "",
  },
  {
    href: "/img/portfolio-img/kitchen-cabinets.jpg",
    src: "/img/portfolio-img/kitchen-cabinets.jpg",
    caption: "Kitchen Cabinets",
    alt: "",
  },
  {
    href: "/img/portfolio-img/counter-top.jpg",
    src: "/img/portfolio-img/counter-top.jpg",
    caption: "Storage and Counter",
    alt: "",
  },
  {
    href: "/img/portfolio-img/shower-tiles3.jpg",
    src: "/img/portfolio-img/shower-tiles3.jpg",
    caption: "Shower Tiles & Bath",
    alt: "",
  },
  {
    href: "/img/portfolio-img/jan2021-01-min.jpeg",
    src: "/img/portfolio-img/jan2021-01-min.jpeg",
    caption: "Door",
    alt: "door",
  },

  {
    href: "/img/portfolio-img/bathroom-sink5.jpg",
    src: "/img/portfolio-img/bathroom-sink5.jpg",
    caption: "Bathroom Sink",
    alt: "sink",
  },
  {
    href: "/img/portfolio-img/feb2020-1.jpg",
    src: "/img/portfolio-img/feb2020-1.jpg",
    caption: "Shower",
    alt: "",
  },
  {
    href: "/img/portfolio-img/feb2020-2.jpg",
    src: "/img/portfolio-img/feb2020-2.jpg",
    caption: "Shower Tiles",
    alt: "",
  },
  {
    href: "/img/portfolio-img/feb2020-5.jpg",
    src: "/img/portfolio-img/feb2020-5.jpg",
    caption: "Bathtub",
    alt: "",
  },
  {
    href: "/img/portfolio-img/feb2020-6.jpg",
    src: "/img/portfolio-img/feb2020-6.jpg",
    caption: "Shower",
    alt: "",
  },
  {
    href: "/img/portfolio-img/sept2020-1.jpg",
    src: "/img/portfolio-img/sept2020-1.jpg",
    caption: "Shower",
    alt: "",
  },
  {
    href: "/img/portfolio-img/april2021.jpeg",
    src: "/img/portfolio-img/april2021.jpeg",
    caption: "Shower",
    alt: "shower",
  },
  {
    href: "/img/portfolio-img/feb2022.jpeg",
    src: "/img/portfolio-img/feb2022.jpeg",
    caption: "Shower",
    alt: "shower",
  },
  {
    href: "/img/portfolio-img/feb2022-2.jpeg",
    src: "/img/portfolio-img/feb2022-2.jpeg",
    caption: "Shower",
    alt: "shower",
  },
  {
    href: "/img/portfolio-img/bathtub_tiles.jpg",
    src: "/img/portfolio-img/bathtub_tiles.jpg",
    caption: "Tub & tiles",
    alt: "Tub & tiles",
  },
  {
    href: "/img/portfolio-img/shed.jpg",
    src: "/img/portfolio-img/shed.jpg",
    caption: "Shed",
    alt: "Shed",
  },
  {
    href: "img/portfolio-img/kitchen-stove.jpg",
    src: "img/portfolio-img/kitchen-stove.jpg",
    caption: "Kitchen & Cabinets",
    alt: "Kitchen & Cabinets",
  },

  {
    href: "/img/portfolio-img/shower_tiles.jpg",
    src: "/img/portfolio-img/shower_tiles.jpg",
    caption: "Shower & Tiles",
    alt: "Shower & Tiles",
  },
  {
    href: "/img/portfolio-img/kitchen_backsplash.jpg",
    src: "/img/portfolio-img/kitchen_backsplash.jpg",
    caption: "Kitchen & Backsplash",
    alt: "Kitchen & Backsplash",
  },
  {
    href: "/img/portfolio-img/IMG_5249.jpg",
    src: "/img/portfolio-img/IMG_5249.jpg",
    caption: "Bathroom",
    alt: "Bathroom",
  },
  {
    href: "/img/portfolio-img/IMG_5250.jpg",
    src: "/img/portfolio-img/IMG_5250.jpg",
    caption: "Bathroom & Vanity",
    alt: "Bathroom & Vanity",
  },
  {
    href: "/img/portfolio-img/IMG_5251.jpg",
    src: "/img/portfolio-img/IMG_5251.jpg",
    caption: "Shower Tiles",
    alt: "Bathroom Tiles",
  },
];

const gallery = document.getElementById("gallery");

// Generate the gallery items
images.forEach((image) => {
  const listItem = document.createElement("li");
  listItem.className = "glide__slide";

  const link = document.createElement("a");
  link.href = image.href;
  link.setAttribute("data-fancybox", "gallery");
  link.setAttribute("data-caption", image.caption);

  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt || "";
  img.className = "modalImage";

  link.appendChild(img);
  listItem.appendChild(link);
  gallery.appendChild(listItem);
});

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
  animationDuration: 400,
  animationTimingFunc: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  breakpoints: {
    1500: {
      perView: 3,
    },
    1200: {
      perView: 2,
      focusAt: 0,
    },
    810: {
      perView: 1,
      focusAt: "center",
    },
    400: {
      perView: 1,
      focusAt: 0,
      gap: 15,
    },
  },
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

//HIDE NAVBAR ON SCROLL DOWN and reappear on scroll up (only works on desktop)

// let menuHover = function () {
//   let firstPosY = event.deltaY;
//   let newPosY = firstPosY + event.deltaY;
//   if (window.innerWidth <= 768 && firstPosY < newPosY) {

//     navbar.style.transitionDuration = ".2s";
//     navbar.style.opacity = "0";
//     navbar.style.transform = "translate(0, -80px)";

//   } else if (window.innerWidth <= 768 && firstPosY > newPosY) {
//     navbar.style.opacity = "1";
//     navbar.style.transform = "translate(0, 0px)";

//   }

// }

// SECOND TRY with inner width!

let initialTop = 0;

let mobileMenuHide = function () {
  let newTop = pageYOffset;

  if (window.innerWidth <= 768 && newTop > initialTop) {
    // console.log("scrolling down")
    initialTop = newTop;
    navbar.style.transitionDuration = ".4s";
    navbar.style.opacity = "0";
    navbar.style.transform = "translate(0, -80px)";
  } else if (window.innerWidth <= 768 && newTop < initialTop) {
    // console.log("scrolling up");
    navbar.style.opacity = "1";
    navbar.style.transform = "translate(0, 0px)";
  }
};

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

// window.addEventListener("mousewheel", menuHover);
window.addEventListener("scroll", mobileMenuHide);
