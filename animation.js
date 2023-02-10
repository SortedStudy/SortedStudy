
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

Sahil Wagh
