const num = Math.floor(Math.random() * 10) + 1;
let attempts = 1;
let guess = prompt("Guess the number between 1 & 10?")

while (true) {
    if(guess === '' ) {
        guess = prompt("Nothing entered, retry")
    } else if(isNaN(guess)) {
        guess = prompt('Not a number entered')
    } else if (parseInt(guess) < num) {
        guess = prompt("Too low", '');
    } else if (parseInt(guess) > num) {
        guess = prompt("Too high", '');
    } else if (guess === "answer") {
        guess = prompt(`The number is ${num}, enter guess!`);
    } else if (parseInt(guess) == num) {
        alert('Congrats')
        break
    } else {
        alert('not a dirty liar')   
        break
    }
    attempts ++
}