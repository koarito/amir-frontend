function age() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/data.json");
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

    let trH = document.createElement("tr");
    let th1 = document.createElement("th");
    
    th1.innerHTML = data.headers.col1;
    let th2 = document.createElement("th");
    
    th2.innerHTML = data.headers.col2
    trH.appendChild(th1);
    trH.appendChild(th2);
    table.appendChild(trH);
    table.appendChild(trH);

    for(dataRow of data.table){
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
