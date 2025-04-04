let i = Number(prompt("Enter a Number"));
let rand = Math.ceil(Math.random() * 10);

while (i !== rand) {

    for(let j = 0; j < 5; j++) {
        j =  Number(prompt(`Wrong! The system guessed ${rand}. Try again:`));
        console.log(`You guessed ${j}`);
        rand = Math.ceil(Math.random() * 10);
    }
}

alert("You got it");