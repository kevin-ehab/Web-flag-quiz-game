const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const result = document.getElementById('result');
const end = document.getElementById('end')
function disable(state) {
  option1.disabled = state;
  option2.disabled = state;
  option3.disabled = state;
  option4.disabled = state;
}

let score = 0;
let rounds = 0;
if (localStorage.getItem('rounds')){
  score = Number(localStorage.getItem('score'))
  rounds = Number(localStorage.getItem('rounds'))
}
result.innerText = `${score}/${rounds}`;
let correct = "";

function question() {
  disable(false);

  fetch('/next')
    .then(res => res.json())
    .then(data => {
      option1.innerText = data.country_choice[0];
      option2.innerText = data.country_choice[1];
      option3.innerText = data.country_choice[2];
      option4.innerText = data.country_choice[3];

      correct = data.correct;
      document.getElementById('flag-img').src = data.image;

      // Reset button colors
      [option1, option2, option3, option4].forEach(btn => {
        btn.style.backgroundColor = '#e9ecef';
      });
    });
}


function handleClick(optionButton) {
  if (optionButton.innerText === correct) {
    optionButton.style.backgroundColor = 'green';
    score += 1;
  } else {
    optionButton.style.backgroundColor = 'red';
  }
  rounds += 1;
  result.innerText = `${score}/${rounds}`;
  disable(true);
}

option1.addEventListener('click', () => handleClick(option1));
option2.addEventListener('click', () => handleClick(option2));
option3.addEventListener('click', () => handleClick(option3));
option4.addEventListener('click', () => handleClick(option4));

end.addEventListener('click', function(){
  localStorage.setItem('score', score)
  localStorage.setItem('rounds', rounds)
  window.location.href = '/end'
})

window.onload = question;
