let randomNumber = Math.floor(Math.random() * 100 + 1);
let min = 1;
let max = 100;
do{
function check() {
  const usernumber = parseInt( document.getElementById('guessInput').value);
  const result = document.getElementById('result');
  
  if (usernumber == randomNumber) {
      result.textContent = `Congrats! You guessed the correct number ${randomNumber} `;
  } else if (usernumber > randomNumber) {
      result.textContent = 'The number you guessed is greater than the correct number. Try again';
      max = usernumber - 1;
  } else if (usernumber < randomNumber) {
      result.textContent = 'The number you guessed is smaller than the correct number. Try again';
      min = usernumber + 1;
  }

  document.getElementById('guessInput').min = min;
  document.getElementById('guessInput').max = max;
}
}while(usernumber != randomNumber);
