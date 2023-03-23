
let paragraph = document.getElementById("para1");
let text = paragraph.innerHTML;
paragraph.innerHTML = "";
let i = 0;
function displayLetter() {
  let nextLetter = text.charAt(i);
  paragraph.innerHTML += nextLetter;
  i++;
  if (i < text.length) {
    setTimeout(displayLetter, 20);
  }
}
displayLetter();


let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});