function validateAndCheckNumber(input) {
    const numberToCheck = parseInt(input, 10); 
    
    const minNum = 100;
    const maxNum = 200;
    
    if (numberToCheck >= minNum && numberToCheck <= maxNum) {
        console.log("Number is valid");
    } else {
        console.log("Number is not valid");
    }
}

validateAndCheckNumber("105"); 
validateAndCheckNumber("99"); 
validateAndCheckNumber("205"); 
