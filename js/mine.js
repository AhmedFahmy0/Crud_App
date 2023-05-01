var input1 = document.getElementById("pNId");
var input2 = document.getElementById("pPId");
var input3 = document.getElementById("pCId");
var input4 = document.getElementById("pDId");
var deletePP = document.querySelector("#deleteP")
var cartona = [];

var up = 0;

if (localStorage.getItem("ourStore") == null) {
    cartona = [];
} else {
    cartona = JSON.parse(localStorage.getItem("ourStore"));

    displayProduct();

}

function addProduct() {
    var oneProduct = {
        pName: input1.value,
        pPrice: input2.value,
        pCat: input3.value,
        pDesc: input4.value
    }

    cartona.push(oneProduct);

    localStorage.setItem("ourStore", JSON.stringify(cartona));

    displayProduct();

    clearInputs();

    // if (validateProductName(input1) == true) {



    // } else {
    //     window.alert("Invalid productName");
    // }

}

function displayProduct() {

    var haslah = ``;

    for (var i = 0; i < cartona.length; i++) {

        haslah += `<tr>
        <td> ${i} </td>
        <td> ${cartona[i].pName} </td>
        <td>${cartona[i].pPrice}</td>
        <td>${cartona[i].pCat}</td>
        <td>${cartona[i].pDesc}</td>

        <td>
            <button onclick="updateProduct(${i})" class="btn btn-outline-warning">Update</button>
        </td>

        <td>
            <button onclick="deleteProduct(${i})" id="deleteP" class="btn btn-outline-danger" > Delete </button>
        </td>

    </tr>`;

    }


    document.getElementById("tBody").innerHTML = haslah;
}

function clearInputs() {
    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";

}

function searchProductName(searchWord) {
    var haslah = ``;
    for (var i = 0; i < cartona.length; i++) {
        if (cartona[i].pName.toLowerCase().includes(searchWord.toLowerCase())) {
            haslah += `<tr>
        <td> ${i} </td>
        <td> ${cartona[i].pName} </td>
        <td>${cartona[i].pPrice}</td>
        <td>${cartona[i].pCat}</td>
        <td>${cartona[i].pDesc}</td>

        <td>
            <button onclick="updateProduct(${i})" class="btn btn-outline-warning">Update</button>
        </td>

        <td>
            <button onclick="deleteProduct(${i})"  class="btn btn-outline-danger" > Delete </button>
        </td>

    </tr>`;
        }
    }


    document.getElementById("tBody").innerHTML = haslah;

}

deletePP.addEventListener("click" , function(){

    deleteProduct(pIndex) 


})

function deleteProduct(pIndex) {
    cartona.splice(pIndex, 1);
    displayProduct();
    localStorage.setItem("ourStore", JSON.stringify(cartona));
}




function updateProduct(pIndex) {
    up = pIndex;
    input1.value = cartona[pIndex].pName;
    input2.value = cartona[pIndex].pPrice;
    input3.value = cartona[pIndex].pCat;
    input4.value = cartona[pIndex].pDesc;

    document.getElementById("addBtn").style.display = "none";

    document.getElementById("saveBtn").style.display = "block"

}

function updatePBtn() {

    var oneProduct = {
        pName: input1.value,
        pPrice: input2.value,
        pCat: input3.value,
        pDesc: input4.value
    }

    cartona[up] = oneProduct;


    localStorage.setItem("ourStore", JSON.stringify(cartona))

    displayProduct()

    document.getElementById("addBtn").style.display = "block";

    document.getElementById("saveBtn").style.display = "none"

    clearInputs()

}

function validateProductName() {

    var regex = /^[A-Z][a-z]{4,9}$/;

    if (regex.test(input1.value) == true) {
        return true;
    } else {
        return false;
    }

}