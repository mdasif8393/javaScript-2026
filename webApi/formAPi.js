function validation() {
    const inputObj = document.getElementById("id1");

    // custom error message
    if (inputObj.validity.rangeOverflow) {
        inputObj.setCustomValidity("You have made a range overflow error");
    }
    else if (inputObj.validity.rangeUnderflow) {
        inputObj.setCustomValidity("You have made a range rangeUnderflow error");
    }
    else if (inputObj.validity.valueMissing) {
        inputObj.setCustomValidity("Value Missing");
    }

    // show error message
    if (!inputObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inputObj.validationMessage;
    }
}

