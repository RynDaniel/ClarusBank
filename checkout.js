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
    const name = this.querySelector("#name");
    const price = this.querySelector("#price");
    const quantity = this.querySelector("#quantity");

    const product = new Product(name.value, price.value, quantity.value);
    const display = new Display();
    console.log(product);
    // display.clearFields();
    display.showLoading(product);

});

Display.prototype.showLoading = function(product){
    const loading = document.querySelector(".loading");
    loading.style.display = "block";
    console.log("showloading's this");
    console.log(this);

    const displayObj = this;
    setTimeout(function(){
        loading.style.display = "none";
        // displayObj.addProduct(product);
    }, 3000);
}































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




