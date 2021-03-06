function age() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://amir-spring-backend.herokuapp.com/footballtable");
    xhr.onload = function(){
        console.log()
        var data = JSON.parse(this.response);
        createTable(data);
    }
    xhr.send();
}
setTimeout(age, 3000);


function createTable(data) {
    console.log(data)
    let appDiv = document.getElementById("app");
    let table = document.createElement("table");
    appDiv.appendChild(table);

    let th1 = document.createElement("th");
    th1.innerHTML = "Teams";
    let th2 = document.createElement("th");
    th2.innerHTML = "Points"
    
    table.appendChild(th1);
    table.appendChild(th2);

    for(dataRow of data.teams){
        table.appendChild(createRow(dataRow));
    }       
}

function createRow(dataRow) {
    let tr = document.createElement("tr");
    tr.appendChild(createCell(dataRow.name));
    tr.appendChild(createCell(dataRow.points));
    return tr;
}

function createCell(data) {
    let td = document.createElement("td");
    td.innerHTML = data;
    return td;
}
