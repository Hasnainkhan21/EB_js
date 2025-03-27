//SMALLEST NUMBER TASK
/* let num1 = Number(prompt("enter number 1"));
let num2 = Number(prompt("enter number 2"));
let num3 = Number(prompt("enter number 3"));

switch (true) {

    case isNaN(num1) || isNaN(num2) || isNaN(num3):
        console.log("You entered not a number")
        break;
    case num1 < num2 && num1 < num3:
        console.log("smallest number is ", num1)
        break;

    case num2 < num1 && num2 < num3:
        console.log("smallest number is ", num2)
        break;

    case num3 < num2 && num3 < num1:
        console.log("smallest number is ", num3)
        break;

    default:
        console.log("equal")
        break;
} */

// Task ATM

var balance = 100000;
let inputPin = prompt("Enter Your 4 digit PIN");


if(inputPin.length === 4 ){
    console.log("entered Succesfulky")
    var amount = Number(prompt("Enter transaction Amount"));

        if(amount > balance){
            alert("You have insufficient balance for this transaction")
        } else{
            confirm("Do you want receipt")
            console.log("Transaction Processing")
            alert(`Thanks for using ATM and Your remaining balance  is, ${balance - amount}`)
        }
}else{
    alert("Invalid Pin Try again")
}

// a3 + b4 + c2
//  let a = Number(prompt("Enter the value of a"));
//  let b = Number(prompt("Enter the value of b"));
//  let c = Number(prompt("Enter the value of c"));

//  let operation = (a**3) + (b**4) + (c**2);

//  alert(`The output of a2 + b2 + c2 is = ${operation}`)