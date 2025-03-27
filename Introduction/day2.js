// //task 1
// let name = prompt("Enter Your name");
// console.log(`the name is ${name} and the type is ${typeof(name)}`)

// //task 2 : conversion
// let num = Number(name);
// let multi = num*2;
// console.log(`the number is num: ${num}, its type is "${typeof(num)}" and the double of num is 2num: "${multi}"`);

// //comparison
// console.log(`the comparison of both is ${typeof(num)===typeof(multi)}`)

// //swaping
// let temp = multi;
// multi = num;
// num = temp;
// console.log(`num : ${num} and multi: ${multi}`)

let userResponse = confirm("Do you want to continue?");
if (userResponse) {
    console.log("User clicked OK!");
} else {
    console.log("User clicked Cancel!");
}
