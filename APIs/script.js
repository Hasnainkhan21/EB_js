let div = document.createElement("div");
document.body.appendChild(div);
div.setAttribute("id", "container");

// input field
let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter Id");
div.appendChild(input);

// button field
let btn = document.createElement("button");
btn.innerHTML = "Submit";
div.appendChild(btn);

// table field
let table = document.createElement("table");
table.setAttribute("border", "1");
table.setAttribute("cellspacing", "10");
div.appendChild(table);

let fields = ["Name", "Username", "Email", "Phone", "Website"];
let valueTds = [];

fields.forEach((field) => {
    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = field;

    let td2 = document.createElement("td");
    td2.innerText = ""; // placeholder
    valueTds.push(td2);

    row.appendChild(td1);
    row.appendChild(td2);
    table.appendChild(row);
});

// API call and table update
btn.addEventListener("click", async () => {
    // Set loading for all cells
    valueTds.forEach(td => {
        td.innerText = "Loading...";
    });

    let api = `https://jsonplaceholder.typicode.com/users/${input.value}`;
    
    try {
        let response = await fetch(api);
        let data = await response.json();

        let { name, username, email, phone, website } = data;
        let userArray = [name, username, email, phone, website];

        userArray.forEach((item, index) => {
            valueTds[index].innerText = item;
        });

        console.log("User Info Array:", userArray);
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Invalid ID or unable to fetch data.");

        valueTds.forEach(td => {
            td.innerText = "Error";
        });
    }
});
