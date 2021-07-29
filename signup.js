const registrationForm = document.getElementById("registration_form");
registrationForm.addEventListener("submit", function(e){
    e.preventDefault();
    // alert(document.getElementsByName("first_name")[0].value + " " + document.getElementsByName("last_name")[0].value);
    window.location.href = "checkout.html?firstname=" + document.getElementsByName("first_name")[0].value + "&lastname=" + document.getElementsByName("last_name")[0].value;
});