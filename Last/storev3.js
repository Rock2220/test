// In case of insert operation. The value would be null.
// Based on it, we will decide whether we will have insert operation or update operation
var selectedRow = null;

function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null){
        insertNewRecord(formData);

    }
    insertNewRecord(FormData);
    resetForm();


}
function readFormData(){
    var formData = {};
    formData["img"] = document.getElementById("img").value;
    formData["productname"] = document.getElementById("productname").value;
    formData["price"] = document.getElementById("price").value;
/*     formData["quantity"] = document.getElementById("quantity").value;
 */    return formData;
    
}

function insertNewRecord(data){
    var table = document.getElementById("productsList").getElementsByTagName('td[0]');
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.imglocation;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.productname;
    cell1 = newRow.insertCell(2);
    cell1.innerHTML = data.price;
    cell1 = newRow.insertCell(3);
    cell1.innerHTML = data.quantity;

    cell1 = newRow.insertCell(4);
    cell1.innerHTML = `<a onClicl="onEdit(this)">Submit</a>
                       <a>Delete</a>`;

}

// Reset Form to it's initial Value

function resetForm(){
    document.getElementById("imglocation").value = "";
    document.getElementById("productname").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("imglocation").value = selectedRow.cells[0].innerHTML;
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productname").value = selectedRow.cells[0].innerHTML;
    selectedRow = td.parentElement.parentElement;
    document.getElementById("price").value = selectedRow.cells[0].innerHTML;
    selectedRow = td.parentElement.parentElement;
    document.getElementById("quantity").value = selectedRow.cells[0].innerHTML;
}