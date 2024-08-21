document.getElementById("b1").addEventListener("click", function() {
    let x = document.getElementById("inptext").value;
    if (x) {
      
        let table1 = document.getElementById("table1");
        let newRow1 = table1.insertRow();
        newRow1.insertCell(0).textContent = x;

        
        let table2 = document.getElementById("table2");
        let newRow2 = document.createElement("tr");
        let newCell2 = document.createElement("td");
        newCell2.textContent = x;
        newRow2.appendChild(newCell2);
        table2.appendChild(newRow2);
    }
});
