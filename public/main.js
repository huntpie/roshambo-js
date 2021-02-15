function updatePlayer1ResultRock() {
  const player1ResultChoice = document.querySelector('h2.player1Choice')
  player1ResultChoice.textContent = 'Rock'
}

function updatePlayer2ResultRock(){
  const player2ResultChoice = document.querySelector('h2.player2Choice')
  player2ResultChoice.textContent = 'Rock'
}

function updatePlayer1ResultPaper(){
  const player1ResultChoice = document.querySelector('h2.player1Choice')
  player1ResultChoice.textContent = 'Paper'
}

function updatePlayer2ResultPaper(){
  const player2ResultChoice = document.querySelector('h2.player2Choice')
  player2ResultChoice.textContent = 'Paper'
}

function results() {
  const player1ResultChoice = document.querySelector('h2.player1Choice')
  const player2ResultChoice = document.querySelector('h2.player2Choice')
  p1 = player1ResultChoice.textContent
  p2 = player2ResultChoice.textContent
  if ( (p1 === 'Rock' && p2 === 'Rock') || (p1 === 'Paper' && p2 === 'Paper') ||
      (p1 === 'Scissors' && p2 === 'Scissors') || (p1 === 'Lizard' && p2 === 'Lizard')
      || ((p1 === 'Spock' && p2 === 'Spock'))){
    const draw = document.querySelector('h2.winnerName')
    draw.textContent = 'Draw!'
    player1ResultChoice.style.visibility = 'visible'
    player2ResultChoice.style.visibility = 'visible'
  } else if (( p1 === 'Paper' && p2 === 'Rock') || ( p1 === 'Scissors' && p2 === 'Paper')
    ){
    const win1 = document.querySelector('h2.winnerName')
    win1.textContent = 'Player 1 Wins!'
  } else if (( p1 === 'Rock' && p2 === 'Paper')) {
    const win2 = document.querySelector('h2.winnerName')
    win2.textContent = 'Player 2 Wins!'
  }
    }


function main() {
  if (document.querySelector('h1.roshambo-lizard-spock')) {
    document.querySelector('h1.roshambo-lizard-spock').textContent = 'Roshambo + Lizard + Spock!'
  }
  document.querySelector('button.player1-rock').addEventListener('click', updatePlayer1ResultRock)
  document.querySelector('button.player2-rock').addEventListener('click', updatePlayer2ResultRock)
  document.querySelector('button.player1-rock').addEventListener('click', results)
  document.querySelector('button.player2-rock').addEventListener('click', results)

  document.querySelector('button.player1-paper').addEventListener('click', updatePlayer1ResultPaper)
  document.querySelector('button.player2-paper').addEventListener('click', updatePlayer2ResultPaper)
  document.querySelector('button.player1-paper').addEventListener('click', results)
  document.querySelector('button.player2-paper').addEventListener('click', results)
  
  }
  
  

  

document.addEventListener('DOMContentLoaded', main)
