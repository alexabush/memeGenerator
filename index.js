const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const displayArea = document.getElementById('displayArea');

form.addEventListener('submit', function(e) {
  // debugger;
  const text1 = inputs[0].value;
  const text2 = inputs[1].value;
  const text3 = inputs[2].value;

  const section = document.createElement('section');
  const image = document.createElement('img');
  const topText = document.createElement('p');
  const bottomText = document.createElement('p');
  const newBtn = document.createElement('button');

  section.classList.add('imgSection');
  topText.classList.add('topText');
  topText.style["background-color"] = "orange;"
  bottomText.classList.add('bottomText')

  image.src = text1;
  topText.textContent = text2;
  bottomText.textContent = text3;
  newBtn.textContent = "X";

  setStyle(section, topText, bottomText, newBtn);

  section.append(image)
  section.append(topText);
  section.append(bottomText)
  section.append(newBtn);

  displayArea.append(section);

  form.reset();
});

displayArea.addEventListener('click', function(e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
})


function setStyle(section, topText, bottomText, button) {
  setPStyle(topText)
  setPStyle(bottomText)

  section.style["position: relative"];
  section.style["color: white"];
  section.style["display: flex"];
  section.style["justify-content: center"]

  topText.style["position: absolute"];
  topText.style["top: 10px"]
  topText.style["left: 30%"]
  topText.style["color: orange"];

  bottomText.style["position: absolute"]
  bottomText.style["bottom: 20px"]
  bottomText.style["left: 30%"]
  bottomText.style["color: purple"]

  // button.style["position: block"]
  // // button.style["top: 0px"]
  // // button.style["right: 0px"]
  // button.innerText = "Button"

  function setPStyle(p) {
    p.style["font-size: 42px"];
    p.style["weight: bold"]
  }

}