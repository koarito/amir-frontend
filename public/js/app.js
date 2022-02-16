// Creating Table
let app = document.getElementById("app");
let table = document.createElement("table");
app.appendChild(table);

let trHeader = document.createElement("tr");
let tr1 = document.createElement("tr");
let tr2 = document.createElement("tr");

let th1 = document.createElement("th");
th1.innerHTML = "Company";
let th2 = document.createElement("th");
th2.innerHTML = "Contact";
let th3 = document.createElement("th");
th3.innerHTML = "Country";
const trHeaderChilds = [th1, th2, th3];
trHeaderChilds.forEach(x => trHeader.appendChild(x));

let td1 = document.createElement("td");
td1.innerHTML = "Bärasken Ab"
let td2 = document.createElement("td");
td2.innerHTML = "Sebastian Öhman"
let td3 = document.createElement("td");
td3.innerHTML = "Sweden"
const tr1Childs = [td1, td2, td3];
tr1Childs.forEach(x => tr1.appendChild(x));

let td4 = document.createElement("td");
td4.innerHTML = "Microsoft"
let td5 = document.createElement("td");
td5.innerHTML = "Bill Gates"
let td6 = document.createElement("td");
td6.innerHTML = "USA"
const tr2Childs = [td4, td5, td6];
tr2Childs.forEach(x => tr2.appendChild(x));

const tableChilds = [trHeader, tr1, tr2];
tableChilds.forEach(x => table.appendChild(x));
