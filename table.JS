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
	cell2.innerText = document.getElementById("lName").value;
	clear();
}