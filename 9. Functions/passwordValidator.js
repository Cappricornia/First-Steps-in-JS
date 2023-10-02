function passwordValidator(password) {
    const isLengthValid = password.length >= 6 && password.length <= 10;
    const containsOnlyLettersAndDigits = /^[a-zA-Z0-9]+$/.test(password);
    const digitCount = (password.match(/\d/g) || []).length;

    if (isLengthValid && containsOnlyLettersAndDigits && digitCount >= 2) {
        console.log("Password is valid");
    } else {
        if (!isLengthValid) {
            console.log("Password must be between 6 and 10 characters");
        }
        if (!containsOnlyLettersAndDigits) {
            console.log("Password must consist only of letters and digits");
        }
        if (digitCount < 2) {
            console.log("Password must have at least 2 digits");
        }
    }
}

passwordValidator('MyPass123');
passwordValidator("123");