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


function main() {
  if (document.querySelector('h1.roshambo-lizard-spock')) {
    document.querySelector('h1.roshambo-lizard-spock').textContent = 'Roshambo + Lizard + Spock!'
  }
  document.querySelector('button.player1-rock').addEventListener('click', updatePlayer1ResultRock)
  document.querySelector('button.player2-rock').addEventListener('click', updatePlayer2ResultRock)

  document.querySelector('button.player1-paper').addEventListener('click', updatePlayer1ResultPaper)
  
  if (document.querySelector('h2.player1Choice').textContent === 'Rock') {
    const draw = document.querySelector('h2.winnerName')
    draw.textContent = 'Draw!'
  }
  

  
}

document.addEventListener('DOMContentLoaded', main)
