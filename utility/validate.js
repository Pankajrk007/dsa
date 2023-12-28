export function validateRequired(inputControl, errorDiv, inputType) { //user ka input aur user error is parameter me aayenege
    let expectedValue, inputValue// if else ki tarah work karta hai
    // agar userinputtype hamne text set kiya hai toh inputType === text hai aur vo empty " " hai aur agar nahi hai toh 0 zero
    // matlab user ne text field empty rakhi toh "" toh function chalega require  
    switch (inputType) {
        case "text":
            expectedValue = "";
            inputValue = inputControl.value.trim();
            break;
        case "select":
            expectedValue = "0";
            inputValue = inputControl.value.trim();
            break;
        case "radio":
            inputValue = inputControl.querySelector
                ("input[name='passport']:checked");
            expectedValue = null;
            break;

    }



    if (inputValue === expectedValue) {  // inputControl.value === "" this "" is replace by expectedValue
        console.log("fields is empty")// "   Pankaj Kailash Khanderao".trim() output is //'Pankaj Kailash Khanderao' trim() space ko remove karta hai
        errorDiv.innerText = "Required"
        errorDiv.style.display = "block";
        inputControl.style.outline = "1px  orangered solid";  //error kaha hai vaha orange color ka box tayayr hoaga 
        if (inputType === "radio") {
            inputControl.style.outlineoffset = "5px";
        }
        formValidationStatus.value === false;

    }
    else {
        errorDiv.style.display = "none";
        inputControl.style.outline = "none";


    }

}