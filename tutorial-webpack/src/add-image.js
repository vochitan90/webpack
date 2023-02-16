import kiwi from "./kiwi.jpeg";
import altText from "./altText.txt";

function addImage() {
  const img = document.createElement("img");
  img.alt = altText;
  img.width = 1000;
  img.src = kiwi;
  const body = document.querySelector("body");
  body.appendChild(img);
}

// dont forget to export
export default addImage;
