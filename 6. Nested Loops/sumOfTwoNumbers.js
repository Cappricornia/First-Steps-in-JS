function sumOfTwoNumbers(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let countCombinations = 0; 
    let isFound = false;
    let firstNum = 0;
    let secondNum = 0;

    for (let i = start; i <= end; i++){
        for (j = start; j<= end; j++){
            let sum = i + j;
            countCombinations += 1
            if (sum === magicNumber){
                firstNum = i;
                secondNum = j;
                isFound = true;
                break;
            } else{
                isFound = false;
            }    
        }
        if (isFound){
            break;
        }
    }

    if(isFound){
        console.log(`Combination N:${countCombinations} (${firstNum} + ${secondNum} = ${magicNumber})`);
    } else{
        console.log(`${countCombinations} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers(["1","10","5"]);
sumOfTwoNumbers(["88","888","1000"]);
sumOfTwoNumbers(["23","24","20"]);
sumOfTwoNumbers(["88", "888", "2000"]);


