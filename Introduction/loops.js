let rand = Math.ceil(Math.random() * 10);
let attempts = 0;
let guess = Number(prompt("Guess a number between 1 and 10:"));

while (guess !== rand && attempts < 4) {
    attempts++;
    guess = Number(prompt("Try again:"));
}

if (guess === rand) {
    alert("You got it!");
} else {
    alert(`Sorry! You've used all your attempts. The correct number was ${rand}.`);
}
