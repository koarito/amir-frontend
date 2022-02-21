function createCell(data) {
    let td = document.createElement("td");
    td.innerHTML = data;
    return td;
}

function createRow(team, points) {
    let tr = document.createElement("tr");
    tr.appendChild(createCell(team));
    tr.appendChild(createCell(points));
    return tr;
}


function createTable(dataList) {
    let appDiv = document.getElementById("app");
    let table = document.createElement("table");
    appDiv.appendChild(table);

    let trH = document.createElement("tr");
    let th1 = document.createElement("th");
    th1.innerHTML = "Team";
    let th2 = document.createElement("th");
    th2.innerHTML = "Points"
    trH.appendChild(th1);
    trH.appendChild(th2);
    table.appendChild(trH);

    table.appendChild(trH);
    for (let i = 0; i < dataList.lenght; i++) {
        table.appendChild(createRow(dataList[i].name, dataList[i].points))
    }

    setTimeout(age, 3000);

    function age() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/js/data.json");
        xhr.onload = function(){
            var data = JSON.parse(this.response);
            createTable(data);
        }
        xhr.send();
    }
}