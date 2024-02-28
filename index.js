var index = 1;
var editRowIndex = null;
function addOrUpdateProduct() {
    var productName = document.getElementById("productName").value;
    var productPrice = document.getElementById("ProductPrice").value;
    var productDescription = document.getElementById("productDescription").value;
    var productList = document.getElementById("productList");

    if (editRowIndex !== null && editRowIndex < productList.rows.length) {
        var rowToUpdate = productList.rows[editRowIndex];
        rowToUpdate.cells[1].innerText = productName;
        rowToUpdate.cells[2].innerText = productPrice;
        rowToUpdate.cells[3].innerText = productDescription;

        resetForm();
        editRowIndex = null;
    } else {
        if (productName && productPrice && productDescription) {
            var row = productList.insertRow();
            var cellIndex = row.insertCell(0);
            var cellName = row.insertCell(1);
            var cellPrice = row.insertCell(2);
            var cellDescription = row.insertCell(3);
            var cellAction = row.insertCell(4);

            cellIndex.innerText = index;
            cellName.innerText = productName;
            cellPrice.innerText = productPrice;
            cellDescription.innerText = productDescription;
            cellAction.innerHTML = '<button class="btn btn-primary btn-sm mr-2" onclick="editProduct(this)">Edit</button><button class="btn btn-danger btn-sm" onclick="deleteProduct(this)">Delete</button>';

            resetForm();
            index++; 
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    }
}

function editProduct(row) {
    var tableRow = row.parentNode.parentNode;
    var rowIndex = tableRow.rowIndex; 

    var productName = tableRow.cells[1].innerText;
    var productPrice = tableRow.cells[2].innerText;
    var productDescription = tableRow.cells[3].innerText;

    document.getElementById("productName").value = productName;
    document.getElementById("ProductPrice").value = productPrice;
    document.getElementById("productDescription").value = productDescription;

    var addButton = document.getElementById("addButton");
    if (addButton) {
        addButton.innerHTML = "Save";
        addButton.onclick = function () {
            saveProduct(rowIndex);
        };
    } else {
        console.error("Button 'addButton' not found in the document.");
    }
}

function deleteProduct(row) {
    var rowToDelete = row.parentNode.parentNode;
    rowToDelete.parentNode.removeChild(rowToDelete);
}

function resetForm() {
    document.getElementById("productName").value = "";
    document.getElementById("ProductPrice").value = "";
    document.getElementById("productDescription").value = "";
}