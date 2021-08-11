//Form events
const registrationForm = document.querySelector("#registration_form");
registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href =
        "checkout.html?firstname=" +
        document.getElementsByName("first_name")[0].value + "&lastname=" + document.getElementsByName("last_name")[0].value;
});

// //Keyboard events(keydown)
// let firstNameInput = document.getElementsByName("first_name")[0];
// firstNameInput.addEventListener("keydown", (e) => {
//   console.log(e.key);
//   // Prevent Different character's name(BACKSPACE etc.)
//   if (e.key.length == 1) {
//     //add last
//     e.preventDefault();
//     //add += later
//     e.target.value += e.key.toLocaleUpperCase();
//   }
//   // firstNameInput.value += e.key.toLocaleUpperCase();
// });

let lastNameInput = document.getElementsByName("last_name")[0];
//Add span element (id=charCount)
let remainCharSpan = document.getElementById("charCount");
//Don't forget add lastname element's maxlength attribute
const showRemainChar = () => {
    // if (lastNameInput.value.length > 0) {
    //remainCharSpan.style.visibility = "visible";
    remainCharSpan.innerText = lastNameInput.value.length + "/40";
    //remainCharSpan.textContent = lastNameInput.value.length + "/40";
    //}
    // else{
    //     remainCharSpan.style.visibility = "hidden";
    //   }

};
lastNameInput.addEventListener("keyup", showRemainChar);

//DatePicker onchange function
let birthDay = document.getElementsByName("birthday")[0];
birthDay.addEventListener("change", function () {
    alert(new Date(this.value).toLocaleDateString() + " date is selected!");
});

//Selectbox onchange function
let selectBox = document.getElementById("paths");
const getSelectedItem = () => {
    let selectedPathName = selectBox.options[selectBox.selectedIndex].innerText;

    //alternative method
    // let selectedPathName = paths.options[paths.selectedIndex].innerText;
    alert(selectedPathName + " path is selected!")
  }
  selectBox.onchange = getSelectedItem;


//E-mail regex match function onkeyup(Add to e-mail input onclick, add span element(id=lblError))
const validateEmail = () => {
    let email = document.getElementsByName("email")[0];
    let errorSpan = document.getElementById("errorSpan");
    const regexPattern = /\S+\@+\S+\.+\S/;
    // if (email.value == "" || email.value.length == 0) {
    //   errorSpan.style.visibility = "hidden";
    // }
    // else {
    // errorSpan.style.visibility = "visible";
    if (!regexPattern.test(email.value)) {
        errorSpan.style.color = "red";
        // Changing Class Attributes(classes added in style in head??)
        // errorSpan.className = "redColorClass";
        errorSpan.innerHTML = "Invalid email address!*";
    }
    else {
        errorSpan.style.color = "green";
        // Changing Class Attributes(classes added in style in head??)
        // errorSpan.className = "greenColorClass";
        errorSpan.innerHTML = "E-mail address is valid!";
    }
}
