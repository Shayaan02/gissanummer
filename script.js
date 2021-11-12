const body = document.body;
body.style.backgroundColor = 'Lightgreen';
let numOfGuesses = 0;

let randomNum = Math.round(Math.random() * 100);
console.log(randomNum);
const knapp = document.querySelector('button');

knapp.addEventListener('click', function () {
    numOfGuesses++;
    document.getElementById('guesses').innerText = `Antal gissningar: ${numOfGuesses}`;
    console.log(numOfGuesses);
    const input = document.querySelector('input');
    const guess = input.value;
    input.value = '';


    if (guess == randomNum) {
        alert(`Du vann! På ${numOfGuesses} försök. Du har även blivit hackad :)))`)
        numOfGuesses = 0;
        randomNum = Math.round(Math.random() * 100);
        document.getElementById('guesses').innerText = `Antal gissningar: ${numOfGuesses}`;
        console.log('New random number', randomNum);
    }

    else {
        if(guess> randomNum){
            document.getElementById('high-low').innerText = 'Gissa Lägre';
        }
        else{
            document.getElementById('high-low').innerText = 'Gissa Högre';
        }
        console.log('Due bajs');
    }


});
