var selectedRow = null;
function onFormSubmit(e){
    /*Stop form action in the URL bar */
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

// Function that retrieves data
function readFormData(){
    var formData = {};
    formData["img"] = document.getElementById("img").value;
    formData["productname"] = document.getElementById("productname").value;
    formData["price"] = document.getElementById("price").value;
    formData["qty"] = document.getElementById("qty").value;
    return formData;
}

// Inserting the Data
function insertNewRecord(data){
    var table = document.getElementById("StoreList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    
    var cell0 = newRow.insertCell(0);
        cell0.innerHTML = data.img;

    var cell1 = newRow.insertCell(1);
        cell1.innerHTML = data.productname;

    var cell2 = newRow.insertCell(2);
        cell2.innerHTML = data.price;

    var cell3 = newRow.insertCell(3);
        cell3.innerHTML = data.qty;

    var cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick='onEdit(this)'>Edit</button>
                            <button onClick='onDelete(this)'>Delete</button>`;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    /*document.getElementById('img').value = selectedRow.cells[0].innerHTML;*/
    document.getElementById('productname').value = selectedRow.cells[1].innerHTML;
    document.getElementById('price').value = selectedRow.cells[2].innerHTML;
    document.getElementById('qty').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.img;
    selectedRow.cells[1].innerHTML = formData.productname;
    selectedRow.cells[2].innerHTML = formData.price;
    selectedRow.cells[3].innerHTML = formData.qty;
}

function onDelete(td){
    if(confirm('Are you sure that you want to delete this record?!')){
        row = td.parentElement.parentElement;
        document.getElementById('StoreList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('img').value = '';
    document.getElementById('productname').value = '';
    document.getElementById('price').value = '';
    document.getElementById('qty').value = '';
}