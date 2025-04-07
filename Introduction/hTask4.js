//square of numbers
// function Square(num){
//     return num **2;
// }
// let output = Square(7);
// console.log(output)

//product
// function product(){
//     let num1 = Number(prompt("Enter a first number"))
//     let num2 = Number(prompt("Enter a secnd number"))
//     alert(`The Product of num1 and num 2 is ${num1 * num2}`)
// }
// product()

//array of colors
// let colors = ["red", "green", "blue", "yellow"];
// console.log(colors)
// colors.push("purple")
// console.log(colors)
// colors.shift()
// console.log(colors)

//array of numbers
// let numbers = [10, 20, 30, 40, 50]
// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     sum = numbers[i] + sum;
//     console.log(sum)
// }

//object car
// const Car = {
//     Name: "GLI",
//     Model: 2011,
//     Color: "White",
//     Use: "300km"
// }
// console.log(Car.Name);
// console.log(Car.Model)
// console.log(Car.Color)
// console.log(Car.Use)

//isEven
// let num = Number(prompt("Enter a number"))
// let isEven = (num) =>{
//     if(num % 2 === 0){
//         alert("The number is Even")
//     } else{
//         alert("The number is odd")
//     }
// } ;
// isEven(num);

//array of student
// let students = ["Hasnain", "Sami", "Afnan", "Aimal", "Hanzala", "Shayan"]
// for(let i = 0; i < students.length; i++){
//     console.log(students[i]);
// }

//function returning the largest number in an array
// let arr = [10, 20, 30, 40, 51, 60, 70, 80, 90, 100];
// function largestNumber(arr){
//     let largest = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){
//             console.log(arr[i]);
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// console.log("The largest number in array is " + largestNumber(arr));


//function to display full Name
// let person = {
//     fName : "Muhammad",
//     lName: "Hasnain"
// }

// function fullName(person){
//     console.log(`The full Name is ${person.fName} ${person.lName}`);
     
// }
// fullName(person)

//reverse of array
let number = [1, 2, 3, 4, 5, 6, 7]
let reverse = [];
for(let i = number.length - 1; i >= 0; i--){
    reverse.push(number[i])
}
console.log(reverse);
