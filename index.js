'Use strict'

let myNumber = document.querySelector('.number');
let message = document.querySelector('.message')
let checkBtn = document.querySelector('.check');
let resetBtn = document.querySelector('.again');
let initialScore = document.querySelector('.score')
let initialhighscore = document.querySelector('.highscore')

const secretNumber = Math.trunc(Math.random() * 20 ) + 1;

let  score = 20;
let highscore = 0;

checkBtn.addEventListener('click', () =>{
  const guess = Number(document.querySelector('.guess').value); 
    if(!guess){
      message.textContent = "🚫 No input"
    } else if (guess === secretNumber){
     message.textContent = "🎉 Congratulations, your guess is correct"
      myNumber.textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = 	'#4ecf4e';
      if(score > highscore){
        highscore = score;
        initialhighscore.textContent = highscore;
      }
     
    } else if (guess !== secretNumber) {
      if(score > 1){
        message.textContent = guess > secretNumber ? 'Your guess is too high' : 'Your guess is too low';
        score--
        document.querySelector('.score').textContent = score;
      } else {
        message.textContent = '.💥 You lost the game!'
        initialScore.textContent = 0;
      }
    }
})


// Reset
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber;
  initialScore.textContent = score;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor ='#222';
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.number').textContent = '?';
});
