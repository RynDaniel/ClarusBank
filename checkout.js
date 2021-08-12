// Product Constructor

function Product(name, price, quantity){
    console.log("Product's this");
    console.log(this);
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

function Display(){
    console.log("Display's this");
    console.log(this);
    this.name = document.getElementById("name");
    this.price = document.getElementById("price");
    this.quantity = document.getElementById("quantity");
}

document.getElementById("customer-form").addEventListener("submit", function(e){
    console.log("...event...");
    console.log(e);
    console.log("...form's this...");
    console.log(this);
    e.preventDefault();
    ...



});






























// const queryString = window.location.search;
// console.log(queryString);
// const urlParams = new URLSearchParams(queryString);
// console.log(urlParams);
// const firstname = urlParams.get("firstname");
// const lastname = urlParams.get("lastname");
// alert("welcome " + firstname + " " + lastname);

const updateProductQuantity = (input) => {
    alert(input.value);
}

document.querySelectorAll(".product-quantity input").forEach(function(input){
    input.addEventListener("change", function(){
        updateProductQuantity(input);
    });
});

const removeProduct = (button) => {
    let productRow = button.parentElement.parentElement;
    productRow.remove();
}

document.querySelectorAll(".product-removal button").forEach(function(button){
    button.addEventListener("click", function(){
        removeProduct(button);
    });
});




