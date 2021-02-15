function main() {
  if (document.querySelector('h1.roshambo-lizard-spock')) {
    document.querySelector('h1.roshambo-lizard-spock').textContent = 'Roshambo + Lizard + Spock!'
  }
}

document.addEventListener('DOMContentLoaded', main)
