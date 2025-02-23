document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const buttons = document.querySelectorAll('.choices button');
    const resultText = document.getElementById('resultText');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            const result = determineWinner(playerChoice, computerChoice);
            resultText.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
        });
    });

    function determineWinner(player, computer) {
        if (player === computer) {
            return "It's a tie!";
        } else if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }
});