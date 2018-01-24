document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('input');
    const displayArea = document.getElementById('displayArea');

    form.addEventListener('submit', function(e) {
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
    });
});