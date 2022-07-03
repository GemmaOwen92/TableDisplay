function clear(){
	document.getElementById("fName").value = "";
	document.getElementById("lName").value = "";
}


function myFunction(){
	var table = document.getElementById("myTable");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = document.getElementById("fName").value;
	cell2.innerHTML = document.getElementById("lName").value;
	clear();
}

function calcResult() {
	var q = document.getElementById("quantity").value;
	var p = document.getElementById("price").value;
	var t = q*p;
	var table = document.getElementById("calcTable");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = document.getElementById("item").value;
	cell2.innerHTML = document.getElementById("quantity").value;
	cell3.innerHTML = document.getElementById("price").value;
	cell4.innerHTML = t;
	clearScreen();
}

function clearScreen(){
	document.getElementById("item").value ="";
	document.getElementById("quantity").value ="";
	document.getElementById("price").value = "";
}