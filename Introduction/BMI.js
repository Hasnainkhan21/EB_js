let weight = Number(prompt("Enter your weight in kg:"));
let height = Number(prompt("Enter your height in meters:"));

if (isNaN(weight) || isNaN(height) || height <= 0) {
    alert("🚫 Please enter valid numbers for weight and height.");
} else {
    let bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    alert(`Your BMI is ${bmi.toFixed(2)} (${category})`);
}

