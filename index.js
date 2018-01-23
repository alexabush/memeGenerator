const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const displayArea = document.getElementById('displayArea');

form.addEventListener('submit', function(e) {
  // debugger;
  const val1 = inputs[0].value;
  const val2 = inputs[1].value;
  const val3 = inputs[2].value;
  const newSection = document.createElement('section');
  const newImg = document.createElement('img');
  //add text to image
  const newBtn = document.createElement('button');
  //set btn txt
  newSection.append(newImg);
  newSection.append(newBtn);
  displayArea.append(newSection);
});

displayArea.addEventListener('click', function(e) {
    // if (e.target type equals button) {
        // element deletes parent element and itself
    // }
})
