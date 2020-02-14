// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img1 = document.getElementById('myImg');

const glideArrows = document.querySelectorAll(".glide__arrow");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var modalImgs = document.querySelectorAll(".modalImage");

const firstSibling = document.getElementById("firstImg");
const lastSibling = document.getElementById("lastImg");

//solved loop issue by getting the sibling of the active element.

var activeElement = document.getElementsByClassName("glide__slide--active");

//loop attempt on zoom and actual zoom
window.onload = function loop() {
  for (i = 0; i < modalImgs.length; i++) {
    modalImgs[i].addEventListener("click", function() {
      modal.style.display = "block";
      var clickedImg = this;
      modalImg.src = clickedImg.src;
      modalImg.alt = this.alt;
      glideArrows[0].classList.add("zoomed");
      glideArrows[1].classList.add("zoomed");
      glideArrows[0].style.color = "white";
      glideArrows[1].style.color = "white";
      glideArrows[0].style.margin = "0px -10px";
      glideArrows[1].style.margin = "0px -10px";

      //loop attempt is here

      glideArrows[1].addEventListener("click", function() {
        modalImg.src = activeElement[0].nextElementSibling.childNodes[1].src;
      });

      glideArrows[0].addEventListener("click", function() {
        modalImg.src =
          activeElement[0].previousElementSibling.childNodes[1].src;
      });
    });
  }
};

// When the user clicks on <span> (x), close the modal - click anywwhere and it's gone
modal.onclick = function() {
  img01.className += " out";

  setTimeout(function() {
    modal.style.display = "none";
    img01.className = "modal-content";

    glideArrows[0].classList.remove("zoomed");
    glideArrows[1].classList.remove("zoomed");
    glideArrows[0].style.color = "black";
    glideArrows[1].style.color = "black";
    glideArrows[0].style.margin = "0px -20px";
    glideArrows[1].style.margin = "0px -20px";
  }, 400);
};

//closes modal on keydown

window.addEventListener("keydown", event => {
  if (modal.style.display === "block") {
    img01.className += " out";
    setTimeout(function() {
      modal.style.display = "none";
      img01.className = "modal-content";
      glideArrows[0].classList.remove("zoomed");
      glideArrows[1].classList.remove("zoomed");
      glideArrows[0].style.color = "black";
      glideArrows[1].style.color = "black";
      glideArrows[0].style.margin = "0px -20px";
      glideArrows[1].style.margin = "0px -20px";
    }, 400);
  } else false;
});
