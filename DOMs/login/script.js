function getValue() {
    let userdata = document.getElementsByClassName("userData");
    let tNAme = document.getElementById("uName");
    let tpassword = document.getElementById("password2");
    let temail = document.getElementById("eMail");

    let arr = [];

    let username = userdata[0].value;
    let password = userdata[1].value;
    let email = userdata[2].value;

    let passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.(com|net|org|edu)(\.pk)?$/;

    for (let i = 0; i < userdata.length; i++) {
        if (userdata[i].value === "") {
            alert("Fill the form completely!");
            return;
        }
    }

    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters, include one uppercase letter and one number.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Enter a valid email address.");
        return;
    }

    for (let i = 0; i < userdata.length; i++) {
        arr.push(userdata[i].value);
        userdata[i].value = "";
    }

    console.log(arr);

    tNAme.innerHTML = arr[0];
    tpassword.innerHTML = arr[1];
    temail.innerHTML = arr[2];
}
