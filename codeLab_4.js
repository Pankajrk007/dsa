// import {countries} from "./codeLab_4Module.js";
// console.log(countries);
// agar apne module ko kisi varible me store kiya toh js me apko us varible ka nam curly breaceess me likhna hoga upar k format me 
import countries from "./codeLab_4Module.js";
console.log(countries);
import { validateRequired } from "./utility/validate.js"


// agar export default kiya hai toh curly braces ki jarurat nahi hai 


let allValidationPassed = true
const countrydropdown = document.getElementById("country");
const countryerrorTextBoxError = document.getElementById("country-error");

const usernameTextBox = document.getElementById("username");
const usernameErrorDiv = document.getElementById("username-error");

const passwordTextBox = document.getElementById("Password");
const passwordTextBoxError = document.getElementById("password-error");

const ConfirmpasswordTextBox = document.getElementById("Confirm-password");
const ConfirmerrorTextBoxError = document.getElementById("Confirm-error");

const fullnameTextBox = document.getElementById("fullname");
const fullnameTextBoxError = document.getElementById("fullname-error");

const addressTextBox = document.getElementById("address");
const addressTextBoxError = document.getElementById("address-error");

const favcolorTextBox = document.getElementById("fav-color");

const passportTextBox = document.getElementById("passport-div");
const passportErrorDiv = document.getElementById("passport-error");

const formErrorDiv = document.getElementById("form-error-div");

const formValidationStatus = document.getElementById("form-validation-status");

const signupButton = document.getElementById("sign-up");
// console.log(usernameTextBox,passwordTextBox,fullnameTextBox,countrydropdown,countryerrorTextBoxError)


populateCountries()

function populateCountries() {
    for (let index = 0; index < countries.length; index++) {
        const country = countries[index];

        const option = document.createElement("option");
        option.innerHTML = country;
        option.value = country;
        countrydropdown.append(option);

    }
}
// const signupButton = document.getElementById("sign-up");

// signupButton.addEventListener("click",()=>{
//    if (usernameTextBox.value === ""){
//     console.log("user name is empty")
//     usernameErrorDiv.innerText="Required"
//     usernameErrorDiv.style.display="block";
//     usernameTextBox.style.outline="1px  orangered solid";
//    }
// }
// )

// function validateRequired(inputControl,errorDiv)



// const signupButton = document.getElementById("sign-up");

signupButton.addEventListener("click", () => { // ab ye validate nam ki js file k function pr chal rhe hai 
    formValidationStatus.value === true;



    validateRequired(usernameTextBox, usernameErrorDiv, "text")
    validateRequired(passwordTextBox, passwordTextBoxError, "text")
    validateRequired(fullnameTextBox, fullnameTextBoxError, "text")
    validateRequired(addressTextBox, addressTextBoxError, "text")
    validateRequired(ConfirmpasswordTextBox, ConfirmerrorTextBoxError, "text")
    validateRequired(countrydropdown, countryerrorTextBoxError, "select")

    if (passwordTextBox.value.trim() !== ConfirmpasswordTextBox.value.trim()) {
        console.log("Both are not same");

        formErrorDiv.innerHTML = "Password and confirm password not match";
        formErrorDiv.style.display = "block";
        formValidationStatus.value = false;

    }
    else {
        formErrorDiv.innerHTML = "";

        formErrorDiv.style.display = "none";
    }


    validateRequired(passportTextBox, passportErrorDiv, "radio")


console.log(formValidationStatus.value);
    if (formValidationStatus.value = false) {
        return;
    }
    const formValues = {
        username: usernameTextBox.value.trim(),
        password: passwordTextBox.value.trim(),
        country: countrydropdown.value.trim(),
        fullname: fullnameTextBox.value.trim(),
        // favcolor : usernameTextBox.value.trim(),
        hasPassport: passportTextBox.querySelector(
            "input[name='passport']:checked")?.value,
        address: addressTextBox.value.trim(),
        monthlyNewsLetter: document.getElementById("send-newsletter").checked,

        acceptTnc: document.getElementById("accept-tnc").checked,
    };
    console.log("=============", formValues);
});






