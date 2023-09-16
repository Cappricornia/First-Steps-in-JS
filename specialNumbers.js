function specialNumbers(input){
    let n = parseInt(input[0]);
    let result = "";

    for (let currentNumber = 1111; currentNumber <= 9999; currentNumber++){
        isSpecial = true;
        

        for (let currentDigit of currentNumber.toString() ){
            if (parseInt(currentDigit) == 0 || n % parseInt(currentDigit) != 0 ){
                isSpecial = false;
                break;
            }
        }
        if (isSpecial){
            result += `${currentNumber} `;
        }
        
    }
    console.log(result)
}

specialNumbers(["3"]);
specialNumbers(["1111"]);
specialNumbers(["16"]);