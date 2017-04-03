/**
 *
 */
function addRow() {

    var myName = document.getElementById("name");
    var age = document.getElementById("age");
    var table = document.getElementById("myTableData");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML= '<input class="smBtn" type="button" value = "Delete" onClick="deleteRow(this)">';
    row.insertCell(1).innerHTML= myName.value;
    row.insertCell(2).innerHTML= age.value;

}

function deleteRow(obj) {

    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
}

function addTable() {

    var myTableDiv = document.getElementById("myDynamicTable");

    var table = document.createElement('table');
    table.border='1';

    var tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    for (var i=0; i<3; i++){
       var tr = document.createElement('tr');
       tableBody.appendChild(tr);

       for (var j=0; j<4; j++){
           var td = document.createElement('td');
           td.width='75';
           td.appendChild(document.createTextNode("Cell " + i + "," + j));
           tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table);

}

function load() {

    console.log("Page load finished");

}
