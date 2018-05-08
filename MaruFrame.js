/* IMG슬라이더 아래에 추가해주세요. */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dotonIMGs = document.getElementsByClassName("dotonIMG");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dotonIMGs.length; i++) {
      dotonIMGs[i].className = dotonIMGs[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dotonIMGs[slideIndex-1].className += " active";
}
