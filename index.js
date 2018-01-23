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
  image.src = text1;
  topText.textContent = text2;
  bottomText.textContent = text3;
  newBtn.textContent = "Delete";

  section.append(image)
  section.append(topText);
  section.append(bottomText)
  section.append(newBtn);

  displayArea.append(section);
});

displayArea.addEventListener('click', function(e) {
  // if (e.target type equals button) {
  // element deletes parent element and itself
  // }
})

// debugger;
// const sectionList = document.querySelectorAll('.imgSection');
// const section = sectionList[0];
// const trees = document.querySelector('img');
// const topText = document.createElement('p');
// topText.textContent = "Top";
// const bottomText = document.createElement('p');
// bottomText.textContent = "Bottom";
// section.append(topText);
// section.append(bottomText)
// const newBtn = document.createElement('button');
// newBtn.textContent = "Delete";
// section.append(newBtn);

// trees.addEventListener('click', function(e) {

//   console.log('yay')
// })