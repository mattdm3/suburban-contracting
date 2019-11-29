// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('myImg');


const glideArrows = document.querySelectorAll('.glide__arrow');


var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var modalImgs = document.querySelectorAll(".modalImage");

//loop attempt 
window.onload = function loop() {
  for (i = 0; i < modalImgs.length; i++) {
    modalImgs[i].addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      glideArrows[1].style.visibility = "hidden";
      glideArrows[0].style.visibility = "hidden";
      modalImg.alt = this.alt;
    });

  }
};

// original code
// img1.onclick = function () {
//   console.log(this);
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   modalImg.alt = this.alt;
//   captionText.innerHTML = this.alt;
// }


//removes the arrows on click (added to loop function)

// img1.addEventListener("click", function () {
//   glideArrows[1].style.visibility = "hidden";
//   glideArrows[0].style.visibility = "hidden";
// })


// When the user clicks on <span> (x), close the modal - click anywwhere and it's gone 
modal.onclick = function () {
  img01.className += " out";
  setTimeout(function () {
    modal.style.display = "none";
    img01.className = "modal-content";
  }, 400);
  glideArrows[1].style.visibility = "visible";
  glideArrows[0].style.visibility = "visible";
}


//closes modal on keydown

window.addEventListener("keydown", event => {
  if (modal.style.display === "block") {
    img01.className += " out";
    setTimeout(function () {
      modal.style.display = "none";
      img01.className = "modal-content";
    }, 400);
    glideArrows[1].style.visibility = "visible";
    glideArrows[0].style.visibility = "visible";
  } else false;
})