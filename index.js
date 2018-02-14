document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const inputs = document.querySelectorAll('input');
  const displayArea = document.getElementById('displayArea');
  addRickAndMorty();


  form.addEventListener('submit', function(e) {
    const section = document.createElement('section');
    const image = document.createElement('img');
    const topText = document.createElement('p');
    const bottomText = document.createElement('p');
    const newBtn = document.createElement('button');

    addContent();

    section.append(image, topText, bottomText, newBtn);
    displayArea.append(section);

    form.reset();

    function addContent() {
      section.classList.add('imgSection');
      topText.classList.add('topText');
      topText.style["background-color"] = "orange;"
      bottomText.classList.add('bottomText')

      image.src = inputs[0].value;
      topText.textContent = inputs[1].value;
      bottomText.textContent = inputs[2].value;
      newBtn.textContent = "X";
    }
  });

  displayArea.addEventListener('click', function(e) {
    if (e.target.tagName === "BUTTON") {
      e.target.parentElement.remove();
    }
  });

  function addRickAndMorty() {
    const section = document.createElement('section');
    const image = document.createElement('img');
    const topText = document.createElement('p');
    const bottomText = document.createElement('p');
    const newBtn = document.createElement('button');

    addContent();

    section.append(image, topText, bottomText, newBtn);
    displayArea.append(section);

    form.reset();

    function addContent() {
      section.classList.add('imgSection');
      topText.classList.add('topText');
      topText.style["background-color"] = "orange;"
      bottomText.classList.add('bottomText')

      image.src = "https://i.ytimg.com/vi/0Y4mx6KJAIk/maxresdefault.jpg";
      topText.textContent = "I'm Mr. Meeseeks";
      bottomText.textContent = "Look At Me!";
      newBtn.textContent = "X";
    }
  }
});